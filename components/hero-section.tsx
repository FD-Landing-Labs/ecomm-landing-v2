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
import { motion } from "framer-motion";
import placeholderData from "@/data/place_holder.json";

// Animation variants
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  }
};

export const HeroSection = () => {
  // Start at index 1 because index 0 is the clone of the last slide
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const images = placeholderData.hero.images;

  // Create extended array: [Last, ...Originals, First]
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const cardData = placeholderData.hero.slides;
  const features = placeholderData.hero.features;

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

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return;

    const autoplayInterval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [isPaused, isTransitioning]);

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <motion.div
      className="p-4 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Carousel Section */}
      <motion.div
        ref={carouselRef}
        className="relative w-full h-[500px] md:h-[560px] rounded-xl overflow-hidden group touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
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
                priority={index <= 2}
                quality={100}
                sizes="100vw"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Content Card Overlay */}
        <motion.div
          key={realIndex}
          className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-10 h-auto md:h-[250px] md:left-10 z-20 max-w-full md:max-w-[400px] bg-white rounded-lg p-4 shadow-xl block"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <div className="flex flex-col justify-between h-full items-start">
            <div>
              <motion.h2
                className="text-xl md:text-3xl font-medium text-black tracking-tighter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {cardData[realIndex].title}
              </motion.h2>
              <motion.p
                className="hidden md:block mt-2 md:mt-4 text-gray-500 text-base tracking-tight leading-snug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {cardData[realIndex].description}
              </motion.p>
            </div>

            <motion.button
              className="hidden md:block text-base tracking-tighter font-medium text-gray-500 border-2 border-gray-300 cursor-pointer rounded-md px-4 py-2 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Product
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex gap-2 z-30">
          {/* Left Arrow */}
          <motion.button
            onClick={prevSlide}
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={nextSlide}
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </motion.button>
        </div>

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
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 md:gap-16 bg-black text-gray-100 font-medium p-4 md:p-5 rounded-lg text-sm md:text-base"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2"
            variants={staggerItem}
          >
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-xs md:text-base tracking-tighter">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
