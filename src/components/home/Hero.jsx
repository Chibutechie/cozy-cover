import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-accent-100">
            {/* Background Texture/Image (Optional, subtle) */}
            <div className="absolute inset-0 opacity-10 mix-blend-multiply">
                <img
                    src="https://images.unsplash.com/photo-1522771753035-4a53c6218fb8?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Bedding Texture"
                    className="h-full w-full object-cover object-center"
                />
            </div>

            {/* Content */}
            <div className="relative h-full container-custom flex flex-col justify-center items-center text-center text-primary-900 pt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium text-primary-600"
                >
                    {t('hero.span')}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight text-primary-900"
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl text-lg md:text-xl text-primary-700 mb-10 font-light"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/shop">
                        <Button size="lg" variant="primary">
                            {t('hero.button')}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
