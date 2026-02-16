import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Cozy Cover Beddings</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Premium bedding collections designed for restful sleep and restorative comfort. Experience luxury every night.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/shop" className="hover:text-gray-900 transition-colors">All Bedding</Link></li>
                            <li><Link to="/shop?category=sheets" className="hover:text-gray-900 transition-colors">Sheets</Link></li>
                            <li><Link to="/shop?category=duvets" className="hover:text-gray-900 transition-colors">Duvets</Link></li>
                            <li><Link to="/shop?category=pillows" className="hover:text-gray-900 transition-colors">Pillows</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
                            <li><Link to="/shipping" className="hover:text-gray-900 transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">Stay Connected</h4>
                        <p className="text-sm text-gray-500 mb-4">Subscribe for exclusive offers and sleep tips.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-900"
                            />
                            <button
                                type="button"
                                className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors"
                            >
                                Join
                            </button>
                        </form>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FiInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FiFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FiTwitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} YDS Bedding. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
