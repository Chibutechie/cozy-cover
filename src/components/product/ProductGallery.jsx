import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // Reset selected image when images prop changes (e.g. navigation to new product)
    useEffect(() => {
        setSelectedImage(images[0]);
    }, [images]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={clsx(
                            "relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-sm border-2 transition-all",
                            selectedImage === img ? "border-gray-900" : "border-transparent hover:border-gray-200"
                        )}
                    >
                        <img
                            src={img}
                            alt={`Product view ${index + 1}`}
                            className="h-full w-full object-cover object-center"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square md:aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden group">
                <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage}
                    alt="Product details"
                    className="h-full w-full object-cover object-center"
                />
                {/* Simple Zoom hint or implementation could go here */}
            </div>
        </div>
    );
};

export default ProductGallery;
