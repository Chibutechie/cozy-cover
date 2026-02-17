import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{t('footer.brand')}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {t('footer.brandDesc')}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">{t('footer.shop')}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/shop" className="hover:text-gray-900 transition-colors">{t('footer.allBedding')}</Link></li>
                            <li><Link to="/shop?category=sheets" className="hover:text-gray-900 transition-colors">{t('footer.sheets')}</Link></li>
                            <li><Link to="/shop?category=duvets" className="hover:text-gray-900 transition-colors">{t('footer.duvets')}</Link></li>
                            <li><Link to="/shop?category=pillows" className="hover:text-gray-900 transition-colors">{t('footer.pillows')}</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">{t('footer.support')}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/contact" className="hover:text-gray-900 transition-colors">{t('footer.contactUs')}</Link></li>
                            <li><Link to="/shipping" className="hover:text-gray-900 transition-colors">{t('footer.shipping')}</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-900 transition-colors">{t('footer.faq')}</Link></li>
                            <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">{t('footer.privacy')}</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4">{t('footer.stayConnected')}</h4>
                        <p className="text-sm text-gray-500 mb-4">{t('footer.newsletter')}</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                className="flex-1 bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-900"
                            />
                            <button
                                type="button"
                                className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors"
                            >
                                {t('footer.join')}
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
                    <p>&copy; {new Date().getFullYear()} {t('footer.brand')}. {t('footer.rights')}</p>
                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-gray-900">{t('footer.terms')}</Link>
                        <Link to="/privacy" className="hover:text-gray-900">{t('footer.privacy')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
