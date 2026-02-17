import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-screen pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Bedroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container-custom py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-white"
                >
                    <h1 className="text-4xl lg:text-6xl font-serif font-medium mb-8">
                        {t('about.title')}
                    </h1>

                    <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-gray-100 font-light">
                        <p>
                            {t('about.p1')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>
                        <p>
                            {t('about.p3')}
                        </p>

                        <div className="pt-8 border-t border-white/20">
                            <p className="text-2xl lg:text-3xl font-serif italic text-accent-100">
                                {t('about.cta')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
