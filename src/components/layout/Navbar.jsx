import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getCartCount, toggleCart } = useCart();
    const location = useLocation();
    const cartCount = getCartCount();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Bedding', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-primary-900 shadow-md py-3' : 'bg-primary-800 shadow-sm py-5'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-white">
                    Cozy Cover Beddings
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                clsx(
                                    'text-sm font-medium transition-colors hover:text-accent-100',
                                    isActive ? 'text-white border-b-2 border-white' : 'text-primary-100'
                                )
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button className="p-2 text-primary-100 hover:text-white transition-colors">
                        <FiSearch size={20} />
                    </button>

                    <button
                        onClick={toggleCart}
                        className="p-2 text-primary-100 hover:text-white transition-colors relative"
                    >
                        <FiShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[10px] text-primary-900 font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary-900 border-t border-primary-800 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        clsx(
                                            'text-lg font-medium transition-colors',
                                            isActive ? 'text-white' : 'text-primary-200'
                                        )
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
