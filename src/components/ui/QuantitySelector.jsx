import { FiMinus, FiPlus } from 'react-icons/fi';

const QuantitySelector = ({ quantity, setQuantity, max = 99 }) => {
    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = () => {
        if (quantity < max) setQuantity(quantity + 1);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-sm w-fit">
            <button
                onClick={decrease}
                className="p-3 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                disabled={quantity <= 1}
            >
                <FiMinus size={16} />
            </button>
            <span className="w-10 text-center font-medium text-gray-900">{quantity}</span>
            <button
                onClick={increase}
                className="p-3 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                disabled={quantity >= max}
            >
                <FiPlus size={16} />
            </button>
        </div>
    );
};

export default QuantitySelector;
