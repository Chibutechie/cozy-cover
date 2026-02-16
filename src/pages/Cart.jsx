import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import QuantitySelector from '../components/ui/QuantitySelector';
import Button from '../components/ui/Button';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const total = getCartTotal();

    if (cart.length === 0) {
        return (
            <div className="container-custom pt-32 pb-24 text-center">
                <h1 className="text-3xl font-serif font-medium text-gray-900 mb-6">Your Cart is Empty</h1>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop">
                    <Button>Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom pt-24 pb-16">
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-6 py-6 border-b border-gray-100 last:border-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                                            <Link to={`/product/${item.id}`} className="hover:underline">{item.name}</Link>
                                        </h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                                            <p>Size: <span className="text-gray-900">{item.size}</span></p>
                                            <p>Color: <span className="text-gray-900">{item.color}</span></p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-medium text-gray-900">{formatCurrency(item.price)}</p>
                                </div>

                                <div className="flex justify-between items-end mt-4">
                                    <QuantitySelector
                                        quantity={item.quantity}
                                        setQuantity={(q) => updateQuantity(item.id, item.size, item.color, q)}
                                    />
                                    <button
                                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm"
                                    >
                                        <FiTrash2 /> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="pt-4">
                        <Link to="/shop" className="text-gray-900 hover:underline flex items-center gap-2 font-medium">
                            <FiArrowLeft /> Continue Shopping
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-sm sticky top-24">
                        <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-900">{formatCurrency(total)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-900">Total</span>
                            <span className="text-xl font-serif font-medium text-gray-900">{formatCurrency(total)}</span>
                        </div>

                        <Button className="w-full" onClick={() => navigate('/checkout')}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
