import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency } from '../utils/formatCurrency';
import ProductGallery from '../components/product/ProductGallery';
import ProductCard from '../components/product/ProductCard';
import QuantitySelector from '../components/ui/QuantitySelector';
import Button from '../components/ui/Button';
import { FiStar, FiTruck, FiRefreshCw, FiCheck } from 'react-icons/fi';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addToast } = useToast();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Selection State
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Simulate API fetch
        setLoading(true);
        window.scrollTo(0, 0);
        const foundProduct = products.find(p => p.id === parseInt(id));

        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedSize(foundProduct.options.sizes[0]);
            setSelectedColor(foundProduct.options.colors[0]);
        }
        setLoading(false);
    }, [id]);

    if (loading) return <div className="pt-32 text-center">Loading...</div>;
    if (!product) return <div className="pt-32 text-center">Product not found</div>;

    const images = [product.image, product.hoverImage, product.image, product.hoverImage]; // Creating mock gallery

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedSize, selectedColor);
        addToast(`Added ${quantity} ${product.name} to cart`);
    };

    return (
        <div className="container-custom pt-24 pb-16">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-gray-900">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/shop" className="hover:text-gray-900">Shop</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Gallery */}
                <ProductGallery images={images} />

                {/* Product Info */}
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xl font-medium text-gray-900">{formatCurrency(product.price)}</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <FiStar className="fill-current" />
                                <span className="ml-1 text-gray-900">{product.rating}</span>
                                <span className="text-gray-400 mx-1">|</span>
                                <span className="text-gray-500 underline">{product.reviews} Reviews</span>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    <div className="space-y-6 border-y border-gray-100 py-6 mb-6">
                        {/* Colors */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="text-gray-500 font-normal">{selectedColor}</span></h3>
                            <div className="flex flex-wrap gap-3">
                                {product.options.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={clsx(
                                            "h-10 w-10 rounded-full border flex items-center justify-center transition-all",
                                            selectedColor === color ? "ring-2 ring-gray-900 ring-offset-2" : "ring-0 hover:ring-1 hover:ring-gray-300"
                                        )}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        title={color}
                                    >
                                        {selectedColor === color && (
                                            <FiCheck className={clsx("w-4 h-4", color.toLowerCase() === 'white' ? 'text-gray-900' : 'text-white')} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Size: <span className="text-gray-500 font-normal">{selectedSize}</span></h3>
                            <div className="flex flex-wrap gap-3">
                                {product.options.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={clsx(
                                            "px-4 py-2 text-sm border rounded-sm transition-all",
                                            selectedSize === size
                                                ? "border-gray-900 bg-gray-900 text-white"
                                                : "border-gray-200 text-gray-700 hover:border-gray-900"
                                        )}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>

                    <div className="flex gap-4 mb-8">
                        <Button
                            variant="primary"
                            className="flex-1 py-4 text-lg"
                            onClick={handleAddToCart}
                        >
                            Add to Cart - {formatCurrency(product.price * quantity)}
                        </Button>
                    </div>

                    {/* Value Props */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <FiTruck className="w-5 h-5" />
                            <span>Free shipping over $200</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiRefreshCw className="w-5 h-5" />
                            <span>30-day returns</span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-8 bg-gray-50 p-6 rounded-sm">
                        <h3 className="font-serif font-medium text-gray-900 mb-4">Product Highlights</h3>
                        <ul className="grid grid-cols-1 gap-2">
                            {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="mt-24">
                    <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetail;
