import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    loading = false,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide';

    const variants = {
        primary: 'bg-primary-900 text-white hover:bg-primary-800 active:transform active:scale-95',
        secondary: 'bg-white text-primary-900 border border-primary-900 hover:bg-accent-50 active:transform active:scale-95',
        outline: 'bg-transparent text-primary-900 border border-primary-200 hover:border-primary-900',
        ghost: 'bg-transparent text-primary-900 hover:bg-accent-50',
        link: 'text-primary-900 underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        icon: 'p-2',
    };

    return (
        <motion.button
            whileTap={!loading ? { scale: 0.98 } : {}}
            className={twMerge(clsx(
                baseStyles,
                variants[variant],
                sizes[size],
                className
            ))}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : null}
            {children}
        </motion.button>
    );
};

export default Button;
