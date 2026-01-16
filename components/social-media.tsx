"use client";

import React from 'react'
import { Twitter, Instagram, ArrowUpRight, Facebook } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import placeholderData from "@/data/place_holder.json";

const socialMediaData = placeholderData.socialMedia.platforms;

const iconMap: { [key: string]: React.ReactNode } = {
    facebook: <Facebook size={17} className="absolute md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0" />,
    instagram: <Instagram size={25} className="absolute md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0" />,
};

// Animation variants
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const socialItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: easeOut }
    }
};

export default function SocialMedia() {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
        >
            {socialMediaData.map((platform, index) => (
                <motion.div
                    key={index}
                    className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-full text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors"
                    variants={socialItem}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <span className="text-lg tracking-tighter">{platform.name}</span>
                    <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                        {platform.iconImage ? (
                            <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                                <Image
                                    src={platform.iconImage}
                                    alt={platform.name.toLowerCase()}
                                    width={25}
                                    height={25}
                                    className="md-size-28"
                                />
                            </div>
                        ) : (
                            iconMap[platform.icon]
                        )}
                        <ArrowUpRight
                            size={17}
                            className="absolute md-size-24 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
