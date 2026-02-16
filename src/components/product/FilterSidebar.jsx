import { useState, useEffect } from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const FilterSection = ({ title, isOpen, setIsOpen, children }) => (
    <div className="border-b border-gray-200 py-6">
        <button
            className="flex w-full items-center justify-between text-base font-medium text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span>{title}</span>
            <span className="ml-6 flex items-center">
                {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
            </span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="pt-6">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FilterSidebar = ({
    filters,
    setFilters,
    clearFilters,
    categories,
    sizes,
    colors,
    className
}) => {
    const [openSections, setOpenSections] = useState({
        category: true,
        price: true,
        size: true,
        color: true,
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleCheckboxChange = (type, value) => {
        setFilters(prev => {
            const current = prev[type];
            if (current.includes(value)) {
                return { ...prev, [type]: current.filter(item => item !== value) };
            } else {
                return { ...prev, [type]: [...current, value] };
            }
        });
    };

    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4 lg:hidden">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            </div>

            <div className="space-y-1">
                {/* Category Filter */}
                <FilterSection title="Category" isOpen={openSections.category} setIsOpen={() => toggleSection('category')}>
                    <div className="space-y-3">
                        {categories.map((category) => (
                            <div key={category} className="flex items-center">
                                <input
                                    id={`filter-category-${category}`}
                                    name="category"
                                    type="checkbox"
                                    checked={filters.categories.includes(category)}
                                    onChange={() => handleCheckboxChange('categories', category)}
                                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                />
                                <label htmlFor={`filter-category-${category}`} className="ml-3 text-sm text-gray-600">
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                </FilterSection>

                {/* Price Filter */}
                <FilterSection title="Price Range" isOpen={openSections.price} setIsOpen={() => toggleSection('price')}>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <input
                                type="number"
                                placeholder="Min"
                                value={filters.minPrice}
                                onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                                className="w-full rounded-sm border border-gray-300 py-2 pl-7 text-sm focus:border-gray-900 focus:outline-none"
                            />
                        </div>
                        <span className="text-gray-500">-</span>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={filters.maxPrice}
                                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                                className="w-full rounded-sm border border-gray-300 py-2 pl-7 text-sm focus:border-gray-900 focus:outline-none"
                            />
                        </div>
                    </div>
                </FilterSection>

                {/* Size Filter */}
                <FilterSection title="Size" isOpen={openSections.size} setIsOpen={() => toggleSection('size')}>
                    <div className="space-y-3">
                        {sizes.map((size) => (
                            <div key={size} className="flex items-center">
                                <input
                                    id={`filter-size-${size}`}
                                    name="size"
                                    type="checkbox"
                                    checked={filters.sizes.includes(size)}
                                    onChange={() => handleCheckboxChange('sizes', size)}
                                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                />
                                <label htmlFor={`filter-size-${size}`} className="ml-3 text-sm text-gray-600">
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>
                </FilterSection>

                {/* Color Filter */}
                <FilterSection title="Color" isOpen={openSections.color} setIsOpen={() => toggleSection('color')}>
                    <div className="flex flex-wrap gap-3">
                        {colors.map((color) => {
                            const isWhite = color.toLowerCase() === 'white' || color.toLowerCase() === 'ivory';
                            return (
                                <button
                                    key={color}
                                    onClick={() => handleCheckboxChange('colors', color)}
                                    className={clsx(
                                        "h-8 w-8 rounded-full border flex items-center justify-center transition-all",
                                        filters.colors.includes(color) ? "ring-2 ring-gray-900 ring-offset-2" : "ring-0"
                                    )}
                                    style={{ backgroundColor: color.toLowerCase().includes('plaid') ? 'url(path/to/pattern)' : color }}
                                    title={color}
                                >
                                    {isWhite && <span className="sr-only">{color}</span>}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-4 space-y-3">
                        {colors.map((color) => (
                            <div key={`text-${color}`} className="flex items-center">
                                <input
                                    id={`filter-color-${color}`}
                                    name="color"
                                    type="checkbox"
                                    checked={filters.colors.includes(color)}
                                    onChange={() => handleCheckboxChange('colors', color)}
                                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                />
                                <label htmlFor={`filter-color-${color}`} className="ml-3 text-sm text-gray-600">
                                    {color}
                                </label>
                            </div>
                        ))}
                    </div>
                </FilterSection>
            </div>

            <Button variant="secondary" className="w-full mt-6" onClick={clearFilters}>
                Clear All Filters
            </Button>
        </div>
    );
};

export default FilterSidebar;
