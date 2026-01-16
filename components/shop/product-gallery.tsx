"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [[selectedIndex, direction], setSelectedIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = selectedIndex + newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedIndex([newIndex, newDirection]);
    }
  };

  const goToSlide = (index: number) => {
    const newDirection = index > selectedIndex ? 1 : -1;
    setSelectedIndex([index, newDirection]);
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-4 col-span-2"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {/* Main Image Carousel */}
      <div className="relative aspect-square min-h-[500px] rounded-2xl overflow-hidden bg-gray-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={selectedIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${productName} - View ${selectedIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              disabled={selectedIndex === 0}
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-200 ${selectedIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-white hover:scale-110"
                }`}
            >
              <ChevronLeft size={24} className="text-black" />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={selectedIndex === images.length - 1}
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-200 ${selectedIndex === images.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-white hover:scale-110"
                }`}
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </>
        )}

        {/* Slide Indicators (Mobile) */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedIndex === index
                    ? "bg-black w-6"
                    : "bg-black/30 hover:bg-black/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails (Desktop) */}
      {images.length > 1 && (
        <motion.div
          className="hidden md:flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${selectedIndex === index
                  ? "border-black"
                  : "border-transparent hover:border-gray-300"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {selectedIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-black/5"
                  layoutId="thumbnail-highlight"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
