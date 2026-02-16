import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error('Failed to load cart from local storage', error);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Failed to save cart to local storage', error);
        }
    }, [cart]);

    const addToCart = (product, quantity = 1, selectedSize, selectedColor) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(
                item => item.id === product.id && item.size === selectedSize && item.color === selectedColor
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity, size: selectedSize, color: selectedColor }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId, size, color) => {
        setCart(prevCart => prevCart.filter(item => !(item.id === itemId && item.size === size && item.color === color)));
    };

    const updateQuantity = (itemId, size, color, quantity) => {
        if (quantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                (item.id === itemId && item.size === size && item.color === color) ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount,
            isCartOpen,
            setIsCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
