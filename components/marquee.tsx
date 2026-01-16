import React from 'react'

export default function Marquee() {
    return (
        <div className="bg-black rounded-lg">
            <div className="relative max-w-md mx-auto text-white text-center bg-black overflow-hidden whitespace-nowrap">
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>

                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

                <div className="flex space-x-2 animate-marquee inline-block p-2 text-sm md:text-base">
                    <span>Save 20% on your first order -</span>
                    <span>Save 20% on your first order -</span>
                    <span>Save 20% on your first order -</span>

                    <span>Save 20% on your first order -</span>
                    <span>Save 20% on your first order -</span>
                    <span>Save 20% on your first order -</span>
                </div>
            </div>
        </div>
    )
}
