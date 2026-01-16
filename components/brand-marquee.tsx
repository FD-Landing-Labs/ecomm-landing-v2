"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import placeholderData from "@/data/place_holder.json";

interface MarqueeProps {
  data: {
    sectionLabel: string;
    headline: string;
    description: string;
  };
}

const brandsData = placeholderData.brands;
const brandLogosRow1 = brandsData.row1;
const brandLogosRow2 = brandsData.row2;

function BrandMarqueeRow({
  brands,
  reverse = false,
  duration = 30,
}: {
  brands: typeof brandLogosRow1;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="flex overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0 px-6 py-4 bg-white border border-border rounded-xl hover:shadow-md transition-shadow"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="pb-4 bg-white overflow-hidden">
      {/* <div className="mx-4 mb-2 bg-[#f6f6f6] text-sm md:text-xl tracking-tighter rounded-lg p-4 text-black/80  font-medium flex justify-center">
        Our Trusted Brands
      </div> */}
      {/* Brand Logo Marquee Rows */}
      <div className="space-y-">
        <BrandMarqueeRow brands={brandLogosRow1} duration={35} />
        <BrandMarqueeRow brands={brandLogosRow2} reverse duration={40} />
      </div>
    </section>
  );
}
