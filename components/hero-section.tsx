"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleDot,
  Plus,
  Search,
  ShoppingCart,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export const HeroSection = () => {
  // Start at index 1 because index 0 is the clone of the last slide
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const collectionItems = [
    { name: "Dark", image: "/assets/images/chair-1.webp" },
    { name: "Modern", image: "/assets/images/f.avif" },
    { name: "Wood", image: "/assets/images/c-chair2.avif" },
  ];

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
      {/* <div className="bg-black rounded-lg">
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
      </div> */}


      {/* Carousel Section */}
      <div className="relative w-full h-[500px] md:h-[560px] rounded-3xl overflow-hidden group bg-[#b08a82]">
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
          className="absolute bottom-12 left-4 right-4 md:right-auto md:bottom-14 h-auto md:h-[250px] md:left-10 z-20 max-w-full md:max-w-[400px] bg-white rounded-lg p-6 md:p-10 shadow-xl block animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-black">
            {cardData[realIndex].title}
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 text-sm">
            {cardData[realIndex].description}
          </p>

          <button className="mt-4 md:mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
            View Product
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-30"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-30"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 rounded-full p-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${realIndex === index
                ? "text-white scale-125 "
                : "text-white/50 hover:text-white/80 "
                }`}
            >
              <Circle
                size={8}
                className="md:w-[10px] md:h-[10px]"
                fill={realIndex === index ? "currentColor" : "none"}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-black text-gray-400 font-medium p-4 md:p-5 rounded-lg text-sm md:text-base">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/van.png"
            alt="Free Shipping"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-xs md:text-sm">Free Shipping over 500€</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/world.png"
            alt="Worldwide Shipping"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-xs md:text-base">Worldwide Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/box.png"
            alt="Free Returns"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-xs md:text-sm">Free Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/warranty.png"
            alt="5-Year Warranty"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-xs md:text-sm">5-Year Warranty</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed w-[370px] inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="absolute inset-2 bg-[#f4f4f5] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                Close
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col  overflow-y-auto px-4 pb-6 space-y-2">
              {/* Collections */}
              {collectionItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 bg-[#e4e4e7]/50 rounded-2xl group active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  <ArrowRight size={18} className="text-gray-400" />
                </div>
              ))}

              <div className="h-2"></div>

              {/* Links */}
              {["Shop", "About", "Blog"].map((link) => (
                <div
                  key={link}
                  className="flex items-center justify-between p-5 bg-[#e4e4e7]/50 rounded-2xl group active:scale-[0.98] transition-all"
                >
                  <span className="text-base font-medium text-gray-900">
                    {link}
                  </span>
                  <ArrowRight size={18} className="text-gray-400" />
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
