import React from 'react'
import { Twitter, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SocialMedia() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {/* Twitter */}
            <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-full text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-sm md:text-lg tracking-tighter">Twitter</span>
                <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                    <Twitter
                        size={17}
                        className="absolute md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
                    />
                    <ArrowUpRight
                        size={17}
                        className="absolute md-size-24 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                </div>
            </div>

            {/* Instagram */}
            <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-full text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-sm md:text-lg tracking-tighter">Instagram</span>
                <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                    <Instagram
                        size={25}
                        className="absolute  md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
                    />
                    <ArrowUpRight
                        size={17}
                        className="absolute md-size-24 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                </div>
            </div>

            {/* Pinterest */}
            <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-full text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-sm md:text-lg tracking-tighter">Pinterest</span>
                <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                        <Image
                            src="/assets/images/pinterest.png"
                            alt="pinterest"
                            width={25}
                            height={25}
                            className="md-size-28"
                        />
                    </div>
                    <ArrowUpRight
                        size={17}
                        className="absolute md-size-28 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                </div>
            </div>

            {/* Behance */}
            <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-full text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-sm md:text-lg tracking-tighter">Behance</span>
                <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                        <Image
                            src="/assets/images/be.png"
                            alt="behance"
                            width={25}
                            height={25}
                            className="md-size-28"
                        />
                    </div>
                    <ArrowUpRight
                        size={17}
                        className="absolute md-size-28  transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    )
}
