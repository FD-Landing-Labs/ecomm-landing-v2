"use client";

import { motion } from "framer-motion";

interface ShopHeaderProps {
    title: string;
    description: string;
}

export default function ShopHeader({ title, description }: ShopHeaderProps) {
    return (
        <section className="px-4 pt-8 pb-4">
            <div className="mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-[#f6f6f6] rounded-2xl p-8 md:p-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-black">
                        {title}
                    </h1>
                    <p className="mt-4 text-gray-500 text-base md:text-lg tracking-tight leading-relaxed max-w-xl">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
