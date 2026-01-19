"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Generate slug from product name
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

interface Product {
    id: number;
    name: string;
    slug?: string;
    image: string;
    price: string;
    originalPrice: string;
    offers: string;
    category: string;
}

interface ShopProductsProps {
    products: Product[];
    activeCategory: string;
}

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function ShopProducts({
    products,
    activeCategory,
}: ShopProductsProps) {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    return (
        <section className="px-4 pb-16">
            <div className="mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 4) * 0.1,
                                    ease: easeOut,
                                }}
                                layout
                                className="group relative"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <Link href={`/shop/${product.slug || generateSlug(product.name)}`}>
                                    <div className="relative overflow-hidden rounded-xl bg-[#f6f6f6] aspect-square cursor-pointer">
                                        {/* Product Name Label */}
                                        <div className="absolute top-0 left-0 z-10 flex items-center">
                                            <span className="bg-white px-4 py-2 text-sm md:text-base tracking-tight font-medium text-black rounded-br-xl rounded-tl-xl flex items-center gap-2">
                                                {product.name}
                                                <motion.span
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{
                                                        opacity: hoveredProduct === product.id ? 1 : 0,
                                                        x: hoveredProduct === product.id ? 0 : -5,
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ArrowRight size={14} />
                                                </motion.span>
                                            </span>
                                        </div>

                                        {/* Discount Badge */}
                                        {product.offers && (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                animate={{
                                                    opacity: hoveredProduct === product.id ? 0 : 1,
                                                }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-4 right-4 z-10"
                                            >
                                                <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded-full">
                                                    {product.offers}
                                                </span>
                                            </motion.div>
                                        )}

                                        {/* Product Image */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center p-8"
                                            animate={{
                                                scale: hoveredProduct === product.id ? 1.05 : 1,
                                                filter:
                                                    hoveredProduct === product.id
                                                        ? "blur(2px)"
                                                        : "blur(0px)",
                                            }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>

                                        {/* Hover Overlay with Price */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: hoveredProduct === product.id ? 1 : 0,
                                                y: hoveredProduct === product.id ? 0 : 20,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute bottom-4 left-4 right-4 z-10"
                                        >
                                            <div className="bg-white rounded-xl p-4 shadow-lg flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-semibold text-black">
                                                        {product.price}
                                                    </span>
                                                    {product.originalPrice && (
                                                        <span className="text-xs text-gray-400 line-through">
                                                            {product.originalPrice}
                                                        </span>
                                                    )}
                                                </div>
                                                <button className="text-xs font-medium text-black underline hover:text-gray-600 transition-colors">
                                                    View
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {products.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-500 text-lg">
                            No products found in this category.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
