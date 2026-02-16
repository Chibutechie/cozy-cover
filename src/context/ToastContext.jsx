import { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import Toast from '../components/ui/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {createPortal(
                <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                    <AnimatePresence>
                        {toasts.map(toast => (
                            <Toast
                                key={toast.id}
                                message={toast.message}
                                type={toast.type}
                                onClose={() => removeToast(toast.id)}
                            />
                        ))}
                    </AnimatePresence>
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};
