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
} from "lucide-react";

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

              <div className="flex gap-4 absolute -top-1 -left-1 bg-white p-2.5 text-xs font-medium text-black rounded-sm z-10 transition-opacity duration-300 group-hover/card:opacity-0">
                <div className="flex items-center group/brand cursor-pointer">
                  {/* Static Icon */}
                  <div className="flex w-4 h-4 border-2 border-black rounded-full items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>

                  {/* Swapping Text */}
                  <div className="relative overflow-hidden h-6 w-10 flex items-center font-semibold justify-center">
                    <span className="absolute transition-all duration-300 group-hover/brand:-translate-y-full group-hover/brand:opacity-0">
                      Fjord
                    </span>
                    <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/brand:translate-y-0 group-hover/brand:opacity-100">
                      Home
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden h-6 w-8 flex items-center justify-center group/shop cursor-pointer">
                  <span className="absolute transition-all duration-300 group-hover/shop:-translate-y-full group-hover/shop:opacity-0">
                    Shop
                  </span>
                  <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/shop:translate-y-0 group-hover/shop:opacity-100">
                    Shop
                  </span>
                </div>
                <div className="relative flex items-center gap-0.5 text-center group/collection cursor-pointer">
                  <div className="flex items-center gap-0.5">
                    <div className="relative overflow-hidden h-6 w-16 flex items-center justify-center">
                      <span className="absolute transition-all duration-300 group-hover/collection:-translate-y-full group-hover/collection:opacity-0">
                        Collaction
                      </span>
                      <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/collection:translate-y-0 group-hover/collection:opacity-100">
                        Collaction
                      </span>
                    </div>
                    <Plus
                      size={13}
                      className="transition-transform duration-300 group-hover/collection:rotate-45"
                    />
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 opacity-0 invisible group-hover/collection:opacity-100 group-hover/collection:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 text-black text-left">
                      {[
                        { name: "Dark", image: "/assets/images/chair-1.webp" },
                        { name: "Modern", image: "/assets/images/f.avif" },
                        { name: "Wood", image: "/assets/images/c-chair2.avif" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center bg-gray-100 justify-between p-2 hover:bg-gray-200 rounded-lg transition-colors group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </div>
                          <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                            <ArrowRight
                              size={14}
                              className="absolute text-gray-400 transition-all duration-300 group-hover/item:-translate-y-full group-hover/item:opacity-0"
                            />
                            <ArrowRight
                              size={14}
                              className="absolute text-black transition-all duration-300 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-0.5 text-center group/about cursor-pointer">
                  <div className="flex items-center gap-0.5">
                    <div className="relative overflow-hidden h-6 w-10 flex items-center justify-center">
                      <span className="absolute transition-all duration-300 group-hover/about:-translate-y-full group-hover/about:opacity-0">
                        About
                      </span>
                      <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/about:translate-y-0 group-hover/about:opacity-100">
                        About
                      </span>
                    </div>
                    <Plus
                      size={13}
                      className="transition-transform duration-300 group-hover/about:rotate-45"
                    />
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 pt-4 w-48 opacity-0 invisible group-hover/about:opacity-100 group-hover/about:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 text-black text-left">
                      {["About", "Contact", "FAQ"].map((item) => (
                        <div
                          key={item}
                          className="flex bg-gray-100 items-center justify-between p-3 hover:bg-gray-200 rounded-lg transition-colors group/item"
                        >
                          <span className="text-sm font-medium">{item}</span>
                          <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                            <ArrowRight
                              size={14}
                              className="absolute text-gray-400 transition-all duration-300 group-hover/item:-translate-y-full group-hover/item:opacity-0"
                            />
                            <ArrowRight
                              size={14}
                              className="absolute text-black transition-all duration-300 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden h-6 w-6 flex items-center justify-center group/blog cursor-pointer">
                  <span className="absolute transition-all duration-300 group-hover/blog:-translate-y-full group-hover/blog:opacity-0">
                    Blog
                  </span>
                  <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/blog:translate-y-0 group-hover/blog:opacity-100">
                    Blog
                  </span>
                </div>
              </div>

              <div className="flex gap-2 absolute -top-1 -right-1 bg-white p-2.5 text-xs font-medium text-black rounded-sm z-10 transition-opacity duration-300 group-hover/card:opacity-0">
                <Search size={15} />
                <div className="flex items-center gap-1 text-center">
                  <ShoppingCart size={15} />
                  <span>(0)</span>
                </div>
              </div>
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
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/van.png"
            alt="Free Shipping"
            width={20}
            height={20}
          />
          <span>Free Shipping over 500€</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/world.png"
            alt="Free Shipping"
            width={20}
            height={20}
          />
          <span>Worldwide Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/box.png"
            alt="Free Shipping"
            width={20}
            height={20}
          />
          <span>Free Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/warranty.png"
            alt="Free Shipping"
            width={20}
            height={20}
          />
          <span>5-Year Warranty</span>
        </div>
      </div>
    </div>
  );
};
