"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Category {
    id: string;
    name: string;
}

interface ShopCategoriesProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
}

export default function ShopCategories({
    categories,
    activeCategory,
    onCategoryChange,
}: ShopCategoriesProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollCategories = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const activeLabel = categories.find((c) => c.id === activeCategory)?.name || "All Products";

    return (
        <section className="sticky top-0 z-30 px-4 py-4 bg-white">
            <div className="mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center gap-2"
                >
                    {/* Mobile Dropdown */}
                    <div className="md:hidden w-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-full flex items-center justify-between bg-[#f6f6f6] text-black px-5 py-3 rounded-lg text-base tracking-tight font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                    <span>{activeLabel}</span>
                                    <ChevronDown size={20} className="text-gray-500" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[calc(100vw-2rem)] max-h-80 overflow-y-auto" align="start">
                                {categories.map((category) => (
                                    <DropdownMenuItem
                                        key={category.id}
                                        onClick={() => onCategoryChange(category.id)}
                                        className="flex items-center justify-between py-3 px-4 cursor-pointer"
                                    >
                                        <span className="font-medium">{category.name}</span>
                                        {activeCategory === category.id && (
                                            <Check size={16} className="text-black" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Desktop Category Grid */}
                    <div
                        ref={scrollContainerRef}
                        className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 items-center gap-4 overflow-x-auto scrollbar-hide flex-1"
                    >
                        {/* Category Tabs */}
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => onCategoryChange(category.id)}
                                className={`flex-shrink-0 flex items-center justify-between gap-6 px-5 py-3 rounded-lg text-base cursor-pointer tracking-tight font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-black text-white"
                                    : "bg-[#f6f6f6] text-black hover:bg-gray-200"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="whitespace-nowrap">{category.name}</span>
                                <ArrowRight size={16} />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
