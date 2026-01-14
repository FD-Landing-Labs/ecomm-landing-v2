"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const OurFavoritesSectionData = [
  {
    name: "Skala",
    image: "/assets/images/f-chair-2.avif",
    price: "210,00 €420,00 €",
    offars: "50% OFF",
  },
  {
    name: "Nest",
    image: "/assets/images/f.avif",
    price: "450,00 €",
    offars: "",
  },
  {
    name: "Runa",
    image: "/assets/images/f-chair-3.avif",
    price: "300,00 €",
    offars: "",
  },
  {
    name: "Lykke",
    image: "/assets/images/f-chair-4.avif",
    price: "250,00 € 400,00 €",
    offars: "54% OFF",
  },
  {
    name: "Holt",
    image: "/assets/images/f-chair-5.avif",
    price: "320,00 €",
    offars: "",
  },
  {
    name: "Kappa",
    image: "/assets/images/f-chair-6.avif",
    price: "280,00 €",
    offars: "",
  },
  {
    name: "Sol",
    image: "/assets/images/f-chair-7.avif",
    price: "300,00 €",
    offars: "65% OFF",
  },
  {
    name: "ELM",
    image: "/assets/images/f-chair-8.avif",
    price: "280,00 €",
    offars: "",
  },
];

export const OurFavoritesSection = () => {
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
      Math.min(prev + 1, OurFavoritesSectionData.length - itemsToShow)
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col gap-4 px-4 ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black/70  font-medium flex justify-center">
        Our Favorites
      </div>

      <div className="relative group">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 -translate-x-4 text-white z-10 bg-black/50 p-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
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
                    <span className="flex items-center absolute -top-1 -left-1 bg-white px-4 py-2 text-xs font-medium text-black rounded-md z-10 shadow-sm">
                      {item.name}
                      <ArrowRight
                        size={14}
                        className="ml-0 w-0 opacity-0 transition-all duration-300 group-hover/card:ml-2 group-hover/card:w-3.5 group-hover/card:opacity-100"
                      />
                    </span>

                    {/* Bottom Overlay Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg flex justify-between items-center opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 z-10">
                      <span className="text-sm font-medium text-black">
                        {item.price.includes("€") &&
                        item.price.split("€").filter((p) => p.trim()).length >
                          1 ? (
                          <div className="flex gap-2 items-center">
                            <span>{item.price.split("€")[0].trim()} €</span>
                            <span className="text-gray-400 line-through text-xs">
                              {item.price.split("€")[1].trim()} €
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
          className="absolute right-6 md:right-14 text-white top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 p-2 rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
