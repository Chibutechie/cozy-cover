import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const Shop = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category');

    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [sortBy, setSortBy] = useState('popularity'); // popularity, price-asc, price-desc, newest

    const [filters, setFilters] = useState({
        categories: initialCategory ? [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)] : [],
        minPrice: '',
        maxPrice: '',
        sizes: [],
        colors: [],
    });

    useEffect(() => {
        if (initialCategory) {
            setFilters(prev => ({ ...prev, categories: [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)] }));
        }
    }, [initialCategory]);


    // Extract all available options from products (for filter sidebar)
    const allCategories = [...new Set(products.map(p => p.category))];
    const allSizes = [...new Set(products.flatMap(p => p.options.sizes))];
    const allColors = [...new Set(products.flatMap(p => p.options.colors))];

    const clearFilters = () => {
        setFilters({
            categories: [],
            minPrice: '',
            maxPrice: '',
            sizes: [],
            colors: [],
        });
    };

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Category Filter
            if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
                return false;
            }

            // Price Filter
            if (filters.minPrice && product.price < parseFloat(filters.minPrice)) return false;
            if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) return false;

            // Size Filter
            if (filters.sizes.length > 0) {
                const hasSize = product.options.sizes.some(size => filters.sizes.includes(size));
                if (!hasSize) return false;
            }

            // Color Filter
            if (filters.colors.length > 0) {
                const hasColor = product.options.colors.some(color => filters.colors.includes(color));
                if (!hasColor) return false;
            }

            return true;
        }).sort((a, b) => {
            switch (sortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'newest':
                    return b.id - a.id;
                case 'popularity':
                default:
                    return b.rating - a.rating;
            }
        });
    }, [products, filters, sortBy]);

    return (
        <div className="container-custom pt-24 pb-16 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 pb-6">
                <h1 className="text-3xl font-serif font-medium text-gray-900">
                    {t('shop.title')}
                    <span className="ml-4 text-sm font-sans font-normal text-gray-500">
                        {filteredProducts.length} {t('shop.items')}
                    </span>
                </h1>

                <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
                    <button
                        className="md:hidden flex items-center gap-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-sm"
                        onClick={() => setIsMobileFiltersOpen(true)}
                    >
                        <FiFilter /> {t('shop.filters')}
                    </button>

                    <div className="relative flex-1 md:flex-none">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none w-full md:w-48 pl-4 pr-10 py-2 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 cursor-pointer"
                        >
                            <option value="popularity">{t('shop.mostPopular')}</option>
                            <option value="newest">{t('shop.newest')}</option>
                            <option value="price-asc">{t('shop.priceLowHigh')}</option>
                            <option value="price-desc">{t('shop.priceHighLow')}</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block lg:col-span-1">
                    <FilterSidebar
                        filters={filters}
                        setFilters={setFilters}
                        clearFilters={clearFilters}
                        categories={allCategories}
                        sizes={allSizes}
                        colors={allColors}
                    />
                </aside>

                {/* Product Grid */}
                <main className="lg:col-span-3">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('shop.noProducts')}</h3>
                            <p className="text-gray-500 mb-6">{t('shop.tryAdjusting')}</p>
                            <button
                                onClick={clearFilters}
                                className="text-gray-900 underline underline-offset-4 hover:text-gray-600"
                            >
                                {t('shop.clearFilters')}
                            </button>
                        </div>
                    )}
                </main>
            </div>

            {/* Mobile Filters Drawer */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40 lg:hidden"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl lg:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">{t('shop.filters')}</h2>
                                <button
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                    className="p-2 text-gray-500 hover:text-gray-900"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto flex-1">
                                <FilterSidebar
                                    filters={filters}
                                    setFilters={setFilters}
                                    clearFilters={clearFilters}
                                    categories={allCategories}
                                    sizes={allSizes}
                                    colors={allColors}
                                />
                            </div>
                            <div className="p-4 border-t border-gray-200 bg-gray-50">
                                <Button className="w-full" onClick={() => setIsMobileFiltersOpen(false)}>
                                    {t('shop.showResults')} ({filteredProducts.length})
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shop;
