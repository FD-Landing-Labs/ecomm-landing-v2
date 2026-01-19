"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import placeholderData from "@/data/place_holder.json";

const aboutData = placeholderData.aboutUs;

// Animation variants
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut }
};

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut }
};

const slideInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut }
};

export const AboutUs = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-[#f6f6f6] text-lg md:text-xl tracking-tighter rounded-lg p-4 text-black/80 font-medium flex justify-center"
        {...fadeUp}
      >
        {aboutData.sectionTitle}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4 md:gap-y-0">
        <motion.div
          className="bg-[#f6f6f6] rounded-lg p-6 text-black/80 font-medium flex flex-col justify-between items-center col-span-3 md:col-span-1 lg:col-span-1"
          {...slideInLeft}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-medium text-black tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {aboutData.headline}
          </motion.h2>
          <div>
            <motion.p
              className="text-gray-500 text-base text-justify leading-tight tracking-tighter max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {aboutData.description}
            </motion.p>
            <motion.button
              className="mt-8 text-lg tracking-tighter font-medium text-black underline hover:text-gray-700 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 4 }}
            >
              {aboutData.ctaText}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-auto lg:col-span-2"
          {...slideInRight}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={aboutData.image}
              alt=""
              width={900}
              height={500}
              className="rounded-lg object-cover w-full h-[300px] md:h-[500px] lg:h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
