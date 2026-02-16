import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <div className="relative h-[90vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1522771753035-4a53c6218fb8?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Bedding"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full container-custom flex flex-col justify-center items-center text-center text-white pt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium"
                >
                    Elevate Your Sleep
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight"
                >
                    Comfort <br className="md:hidden" /> Redefined
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl text-lg md:text-xl text-gray-100 mb-10 font-light"
                >
                    Discover our premium collection of sustainably sourced, ethically made bedding designed for the modern sanctuary.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/shop">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-none">
                            Shop Bedding
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
