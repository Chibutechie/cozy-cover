import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language.split('-')[0]) || languages[0];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm hover:bg-white/10 transition-colors text-primary-100"
            >
                <FiGlobe size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{currentLanguage.code}</span>
                <FiChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-44 bg-white rounded-sm shadow-xl border border-primary-100 overflow-hidden z-20"
                    >
                        <div className="max-h-64 overflow-y-auto">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-accent-50 ${currentLanguage.code === lang.code ? 'text-primary-900 font-bold bg-accent-50' : 'text-primary-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </div>
                                    {currentLanguage.code === lang.code && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
