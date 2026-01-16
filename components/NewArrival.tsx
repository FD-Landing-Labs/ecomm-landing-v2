"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const NewArrivalsData = [
    {
        name: "Starter Motor",
        image: "/assets/images/parts/starter-motor.png",
        price: "220,00 Rs",
        offars: "",
    },
    {
        name: "Exhaust Manifold",
        image: "/assets/images/parts/exhaust-manifold.png",
        price: "450,00 Rs 600,00 Rs",
        offars: "25% OFF",
    },
    {
        name: "Steering Wheel",
        image: "/assets/images/parts/steering-wheel.png",
        price: "320,00 Rs",
        offars: "",
    },
    {
        name: "Car Battery",
        image: "/assets/images/parts/car-battery.png",
        price: "150,00 Rs 200,00 Rs",
        offars: "25% OFF",
    },
    {
        name: "AC Compressor",
        image: "/assets/images/parts/ac-compressor.png",
        price: "680,00 Rs",
        offars: "",
    },
    {
        name: "Crankshaft",
        image: "/assets/images/parts/crankshaft.png",
        price: "950,00 Rs",
        offars: "",
    },
    {
        name: "Cylinder Head",
        image: "/assets/images/parts/cylinder-head.png",
        price: "1200,00 Rs 1500,00 Rs",
        offars: "20% OFF",
    },
    {
        name: "ECU Module",
        image: "/assets/images/parts/ecu.png",
        price: "850,00 Rs",
        offars: "",
    },
];

export const NewArrival = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(4);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setStartIndex((prev) =>
            Math.min(prev + 1, NewArrivalsData.length - itemsToShow)
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="flex flex-col gap-4 px-4">
            {/* New Arrivals Section */}
            <div className="bg-[#f6f6f6] text-sm md:text-xl rounded-lg p-4 text-black/70 font-medium flex justify-center tracking-tighter">
                New Arrivals
            </div>

            <div className="relative group">
                {/* Left Navigation Button */}
                <button
                    onClick={prevSlide}
                    disabled={startIndex === 0}
                    className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 -translate-x-4 text-white z-10 bg-black/50 p-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-black transition-colors cursor-pointer"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Carousel Window */}
                <div className="overflow-hidden -mx-2">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
                        }}
                    >
                        {NewArrivalsData.map((item) => (
                            <div
                                key={item.name}
                                className="min-w-full md:min-w-[50%] lg:min-w-[25%] mb-4 px-2 "
                            >
                                <div className="flex flex-col gap-4 group/card cursor-pointer">
                                    <div className=" relative overflow-hidden rounded-lg">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={320}
                                            height={400}
                                            className="object-cover w-full h-[400px] transition-all duration-500 group-hover/card:blur-sm group-hover/card:scale-105"
                                        />
                                        {item.offars && (
                                            <span className="absolute top-4 right-4 bg-black px-3 py-1 text-xs font-medium text-white rounded-full z-10 transition-opacity duration-300 group-hover/card:opacity-0">
                                                {item.offars}
                                            </span>
                                        )}
                                        <span className="flex items-center absolute -top-1 -left-1 bg-white px-4 py-2 text-base tracking-tighter font-medium text-black rounded-md z-10">
                                            {item.name}
                                            <ArrowRight
                                                size={14}
                                                className="ml-0 w-0 opacity-0 transition-all duration-300 group-hover/card:ml-2 group-hover/card:w-3.5 group-hover/card:opacity-100"
                                            />
                                        </span>

                                        {/* Bottom Overlay Bar */}
                                        <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg flex justify-between items-center opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 z-10">
                                            <span className="text-sm font-medium text-black">
                                                {item.price.includes("Rs") &&
                                                    item.price.split("Rs").filter((p) => p.trim()).length >
                                                    1 ? (
                                                    <div className="flex gap-2 items-center">
                                                        <span>{item.price.split("Rs")[0].trim()} Rs</span>
                                                        <span className="text-gray-400 line-through text-xs">
                                                            Rs{item.price.split("Rs")[1].trim()} Rs
                                                        </span>
                                                    </div>
                                                ) : (
                                                    item.price
                                                )}
                                            </span>
                                            <button className="text-xs font-medium text-black underline hover:text-gray-600">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Navigation Button */}
                <button
                    onClick={nextSlide}
                    disabled={startIndex >= NewArrivalsData.length - itemsToShow}
                    className="absolute right-6 md:right-14 text-white top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 p-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-black transition-colors cursor-pointer"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};
