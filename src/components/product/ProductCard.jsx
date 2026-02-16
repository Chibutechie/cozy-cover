import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { addToast } = useToast();

    return (
        <div className="group relative">
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-gray-100 relative">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.hoverImage && (
                        <img
                            src={product.hoverImage}
                            alt={product.name}
                            className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                    )}
                </Link>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button
                        variant="primary"
                        className="w-full shadow-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1, product.options.sizes[0], product.options.colors[0]);
                            addToast(`Added ${product.name} to cart`);
                        }}
                    >
                        <FiShoppingBag className="mr-2" /> Add to Cart
                    </Button>
                </div>
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{formatCurrency(product.price)}</p>
            </div>
            <div className="mt-1 flex items-center">
                <FiStar className="text-yellow-400 fill-current h-4 w-4" />
                <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
            </div>
        </div>
    );
};

export default ProductCard;
