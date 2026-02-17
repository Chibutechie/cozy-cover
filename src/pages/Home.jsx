import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import Newsletter from '../components/home/Newsletter';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const Home = () => {
    const { t } = useTranslation();
    // Get best sellers (top 4 rated products)
    const bestSellers = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

    return (
        <div>
            <Hero />

            {/* Best Sellers Section */}
            <section className="py-24 container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-2">{t('home.bestSellers')}</h2>
                        <p className="text-gray-500">{t('home.bestSellersDesc')}</p>
                    </div>
                    <a href="/shop" className="hidden md:block text-gray-900 font-medium hover:underline underline-offset-4">
                        {t('home.viewAll')}
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/shop" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 font-medium hover:bg-gray-50">
                        {t('home.viewAll')}
                    </a>
                </div>
            </section>

            {/* Featured Collections / Categories could go here */}

            <Newsletter />
        </div>
    );
};

export default Home;
