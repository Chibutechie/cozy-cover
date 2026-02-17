import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import Button from '../components/ui/Button';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { t } = useTranslation();
    const { cart, getCartTotal, clearCart } = useCart();
    const total = getCartTotal();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: '',
    });

    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setIsOrderPlaced(true);
            clearCart();
            window.scrollTo(0, 0);
        }, 2000);
    };

    if (isOrderPlaced) {
        return (
            <div className="container-custom pt-32 pb-24 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <FiCheckCircle className="text-green-600 w-10 h-10" />
                </div>
                <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">{t('checkout.thankYou')}</h1>
                <p className="text-xl text-gray-600 mb-8">{t('checkout.orderSuccess')}</p>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    {t('checkout.confirmation', { email: formData.email })}
                    <br />
                    {t('checkout.orderId')} <span className="font-mono bg-gray-100 px-2 py-1 rounded">#YDS-{Math.floor(Math.random() * 10000)}</span>
                </p>
                <Link to="/">
                    <Button>{t('checkout.returnHome')}</Button>
                </Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="container-custom pt-32 pb-24 text-center">
                <p>{t('cart.empty')}. Redirecting...</p>
                <Link to="/shop" className="text-gray-900 underline mt-4 block">{t('cart.startShopping')}</Link>
            </div>
        );
    }

    return (
        <div className="container-custom pt-24 pb-16">
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8">{t('checkout.title')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Form */}
                <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6 border-b pb-2">{t('checkout.shippingInfo')}</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('checkout.firstName')}</label>
                                <input
                                    required
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('checkout.lastName')}</label>
                                <input
                                    required
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t('contact.email')}</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t('contact.address')}</label>
                            <input
                                required
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('checkout.city')}</label>
                                <input
                                    required
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t('checkout.zip')}</label>
                                <input
                                    required
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t('checkout.phone')}</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900"
                            />
                        </div>

                        <div className="pt-6">
                            <h2 className="text-xl font-medium text-gray-900 mb-6 border-b pb-2">{t('checkout.payment')}</h2>
                            <div className="bg-gray-50 p-4 border border-gray-200 rounded-sm text-center text-gray-500 text-sm">
                                {t('checkout.paymentDesc')}
                            </div>
                        </div>
                    </form>
                </div>

                {/* Summary */}
                <div>
                    <div className="bg-gray-50 p-8 rounded-sm sticky top-24">
                        <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">{t('cart.summary')}</h2>
                        <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-6 scrollbar-thin">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                                    <div className="w-16 h-16 bg-white rounded-sm overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                                        <p className="text-xs text-gray-500">{item.size} / {item.color}</p>
                                        <div className="flex justify-between mt-1">
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                            <p className="text-sm font-medium text-gray-900">{formatCurrency(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600 mb-6">
                            <div className="flex justify-between">
                                <span>{t('cart.subtotal')}</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{t('cart.shipping')}</span>
                                <span className="text-green-600">{t('cart.shippingFree')}</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-8">
                            <span className="text-lg font-medium text-gray-900">{t('cart.total')}</span>
                            <span className="text-xl font-serif font-medium text-gray-900">{formatCurrency(total)}</span>
                        </div>

                        <Button
                            type="submit"
                            form="checkout-form"
                            className="w-full py-4 text-lg"
                            loading={loading}
                        >
                            {t('checkout.placeOrder')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
