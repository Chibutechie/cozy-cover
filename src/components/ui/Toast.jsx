import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-sm shadow-lg border text-sm font-medium min-w-[300px]",
                type === 'success' ? "bg-white border-gray-200 text-gray-900" : "bg-red-50 border-red-100 text-red-800"
            )}
        >
            {type === 'success' ? (
                <FiCheckCircle className="text-green-500 text-lg" />
            ) : (
                <FiAlertCircle className="text-red-500 text-lg" />
            )}
            <div className="flex-1">{message}</div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <FiX />
            </button>
        </motion.div>
    );
};

export default Toast;
