"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle, Plus } from "lucide-react";

export const HeroSection = () => {
  // Start at index 1 because index 0 is the clone of the last slide
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "/assets/images/chair-1.webp",
    "/assets/images/chair 2.webp",
    "/assets/images/chair 3.webp",
  ];

  // Create extended array: [Last, ...Originals, First]
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const cardData = [
    {
      title: "Crafting Comfort, Inspired by the North.",
      description: "Simple, sleek, and built for a cozy, stylish lifestyle.",
    },
    {
      title: "Natural Elegance in Every Detail",
      description:
        "Crafted for style and lasting durability, perfect for any space.",
    },
    {
      title: "Modern Minimalism, Maximum Comfort",
      description:
        "Crafted from solid oak with a smooth finish, timeless and durable.",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we've reached the cloned last slide (at the end), snap to the real first slide (index 1)
    if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1);
    }

    // If we've reached the cloned first slide (at the start), snap to the real last slide
    if (currentIndex === 0) {
      setCurrentIndex(extendedImages.length - 2);
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because of the cloned slide at the start
  };

  // Calculate the "real" index (0-based relative to original images) for dots and content
  const getRealIndex = (index: number) => {
    if (index === 0) return images.length - 1;
    if (index === extendedImages.length - 1) return 0;
    return index - 1;
  };

  const realIndex = getRealIndex(currentIndex);

  return (
    <div className="p-4 space-y-4">
      {/* Marquee Section */}
      <div className="bg-black rounded-lg">
        <div className="relative max-w-md mx-auto text-white text-center bg-black overflow-hidden whitespace-nowrap">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

          {/* Marquee */}
          <div className="flex space-x-2 animate-marquee inline-block p-2">
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>

            {/* duplicate (required for infinite loop) */}
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative  w-full h-[500px] md:h-[560px] rounded-lg overflow-hidden group">
        {/* Sliding Image Track */}
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 700ms ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={img}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
                priority={index === 1} // Prioritize the first "real" image
              />
            </div>
          ))}
        </div>

        {/* Content Card Overlay */}
        <div
          key={realIndex} // Key ensures animation restarts on slide change
          className="absolute bottom-12 left-4 md:bottom-14 h-[250px] md:left-10 z-20 max-w-[400px] bg-white rounded-lg p-10 shadow-xl hidden md:block animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          <h2 className="text-3xl font-medium text-black ">
            {cardData[realIndex].title}
          </h2>
          <p className="mt-4 text-gray-500 text-sm ">
            {cardData[realIndex].description}
          </p>

          <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
            View Product
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-8 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-30"
        >
          <ChevronLeft size={25} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-8 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-30"
        >
          <ChevronRight size={25} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 rounded-full p-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300  ${
                realIndex === index
                  ? "text-white scale-125 "
                  : "text-white/50 hover:text-white/80 "
              }`}
            >
              <Circle
                size={10}
                fill={realIndex === index ? "currentColor" : "none"}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex  items-center justify-center gap-6 bg-black text-gray-400 font-medium  p-5 rounded-lg ">
           <span>Free Shipping over 500€</span> 
           <span>Worldwide Shipping</span> 
           <span>Free Returns</span> 
           <span>5-Year Warranty</span> 
      </div>
    </div>
  );
};

