"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import placeholderData from "@/data/place_holder.json";

const collectionsData = placeholderData.collections;

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

const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: easeOut }
};

export const CollectionSection = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-[#f6f6f6] rounded-lg p-4 tracking-tighter text-sm md:text-xl text-black/70 font-medium flex justify-center"
        {...fadeUp}
      >
        {collectionsData.sectionTitle}
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <motion.div
          className="relative w-full lg:w-auto flex flex-col md:block"
          {...slideInLeft}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/assets/images/collection-1.png"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] md:h-[515px] lg:w-[950px] lg:h-[515px]"
          />
          <motion.div
            className="relative md:absolute md:bottom-6 md:left-6 bg-white p-4 rounded-lg md:max-w-[250px] max-w-full shadow-lg mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-medium text-black tracking-tighter">Wood</h2>
            <p className="mt-4 text-gray-500 text-base tracking-tight leading-tight">
              Our Wood Collection celebrates the natural beauty of wood.
            </p>
            <motion.button
              className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Collection
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 w-full lg:w-auto"
          {...slideInRight}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/assets/images/collection-2.png"
                alt=""
                width={600}
                height={500}
                className="rounded-lg object-cover w-full md:w-[350px] h-[250px]"
              />
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1 flex flex-col justify-between items-start"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                <h2 className="text-3xl font-medium text-white tracking-tighter">Dark</h2>
                <p className="mt-4 text-gray-400 text-base tracking-tight leading-tight">
                  Refined finishes bring an air of sophistication and drama to
                  any room.
                </p>
              </div>

              <motion.button
                className="text-sm font-medium text-white underline hover:text-gray-400 transition-colors tracking-tight"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Collection
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1 order-2 md:order-1 flex flex-col justify-between items-start"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                <h2 className="text-3xl font-medium text-white tracking-tighter">
                  Light
                </h2>
                <p className="mt-4 text-gray-400 text-base tracking-tight leading-tight">
                  Bright and airy designs that create a sense of openness and
                  tranquility.
                </p>
              </div>

              <motion.button
                className="mt-8 text-sm font-medium text-white underline hover:text-gray-400 transition-colors tracking-tight"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Collection
              </motion.button>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-lg order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/assets/images/collection-3.png"
                alt=""
                width={500}
                height={500}
                className="rounded-lg object-cover w-full md:w-[350px] h-[250px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
