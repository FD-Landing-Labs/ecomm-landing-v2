"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Truck, Globe, RefreshCw, Check } from "lucide-react";
import { useCart } from "@/context/cart-context";

interface Feature {
  icon: string;
  text: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  originalPrice?: string;
  offers?: string;
  shortDescription: string;
  materials: string[];
  image: string;
}

interface ProductInfoProps {
  product: Product;
  features: Feature[];
}

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="w-4 h-4" />,
  globe: <Globe className="w-4 h-4" />,
  refresh: <RefreshCw className="w-4 h-4" />,
};

// Parse price string to number
function parsePrice(priceStr: string): number {
  const match = priceStr.match(/[\d,]+/);
  if (match) {
    return parseFloat(match[0].replace(",", ""));
  }
  return 0;
}

export default function ProductInfo({ product, features }: ProductInfoProps) {
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.materials[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const { addToCart } = useCart();

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    setIsAdding(true);

    const price = parsePrice(product.price);
    const originalPrice = product.originalPrice
      ? parsePrice(product.originalPrice)
      : undefined;

    addToCart(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        material: selectedMaterial,
        price: price,
        originalPrice: originalPrice,
        image: product.image,
      },
      quantity
    );

    // Reset after animation
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1500);
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {/* Product Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: easeOut }}
      >
        <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tighter">
          {product.name}
        </h1>
        <p className="mt-3 text-gray-500 text-base leading-relaxed tracking-tight">
          {product.shortDescription}
        </p>
      </motion.div>

      {/* Price */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-medium text-black tracking-tight">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
          {product.offers && (
            <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
              {product.offers}
            </span>
          )}
        </div>
      </motion.div>

      {/* Material Selection */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
      >
        <span className="text-sm font-medium text-black mb-3 block">
          Material
        </span>
        <div className="flex gap-2">
          {product.materials.map((material) => (
            <motion.button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedMaterial === material
                  ? "bg-black text-white"
                  : "bg-[#f6f6f6] text-black hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {material}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Quantity & Add to Cart */}
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25, ease: easeOut }}
      >
        {/* Quantity Selector */}
        <div className="flex items-center bg-[#f6f6f6] rounded-lg">
          <motion.button
            onClick={decrementQuantity}
            className="w-12 h-12 flex items-center justify-center text-black hover:bg-gray-200 rounded-l-lg transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <span className="w-12 text-center text-base font-medium text-black">
            {quantity}
          </span>
          <motion.button
            onClick={incrementQuantity}
            className="w-12 h-12 flex items-center justify-center text-black hover:bg-gray-200 rounded-r-lg transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`flex-1 rounded-lg text-base font-medium tracking-tight transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdding
              ? "bg-green-500 text-white"
              : "bg-black text-white hover:bg-gray-800 cursor-pointer"
          }`}
          whileHover={!isAdding ? { scale: 1.01 } : {}}
          whileTap={!isAdding ? { scale: 0.99 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5" />
                Added to Cart
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Features Marquee */}
      <motion.div
        className="bg-black text-white rounded-xl py-3 px-4 overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: easeOut }}
      >
        <div className="flex animate-marquee gap-8">
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              {iconMap[feature.icon]}
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
