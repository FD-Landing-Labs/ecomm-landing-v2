"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import placeholderData from "@/data/place_holder.json";

const OurFavoritesSectionData = placeholderData.ourFavorites.products.map(product => ({
  name: product.name,
  image: product.image,
  price: product.price,
  offars: product.offers,
}));

export const OurFavoritesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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
      Math.min(prev + 1, OurFavoritesSectionData.length - itemsToShow)
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return;

    const autoplayInterval = setInterval(() => {
      setStartIndex((prev) => {
        // If at the end, loop back to start
        if (prev >= OurFavoritesSectionData.length - itemsToShow) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [isPaused, itemsToShow]);

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

    if (isLeftSwipe && startIndex < OurFavoritesSectionData.length - itemsToShow) {
      nextSlide();
    } else if (isRightSwipe && startIndex > 0) {
      prevSlide();
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="flex flex-col gap-4 px-4 ">
      <div className="bg-[#f6f6f6] text-lg md:text-xl rounded-lg p-4 text-black/70  font-medium flex justify-center tracking-tighter">
        {placeholderData.ourFavorites.sectionTitle}
      </div>

      <div
        ref={carouselRef}
        className="relative group touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
            {OurFavoritesSectionData.map((item) => (
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
          disabled={startIndex >= OurFavoritesSectionData.length - itemsToShow}
          className="absolute right-6 md:right-14 text-white top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 p-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-black transition-colors cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
