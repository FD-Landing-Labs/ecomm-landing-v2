"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import placeholderData from "@/data/place_holder.json";

const brandData = placeholderData.brand;
const footerData = placeholderData.footer;

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

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const linkItem = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easeOut }
  }
};

export default function Footer() {
  return (
    <motion.footer
      className="flex flex-col lg:flex-row px-4 justify-between gap-4 pb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Layout (Navigation & Brand) */}
      <motion.div
        className="bg-blue-950 order-2 lg:order-1 text-white p-6 md:p-8 rounded-lg w-full lg:w-3/4 flex flex-col md:flex-row justify-between"
        {...slideInLeft}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Brand Section */}
        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
              <h3 className="text-xl font-medium tracking-tighter">{brandData.name}</h3>
            </div>
            <p className="text-gray-300 text-base max-w-xs leading-snug">
              {brandData.description}
            </p>
          </div>
        </motion.div>

        {/* Pages Section - 3 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mt-8 md:mt-0">
          {/* Column 1: Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.pages.title}
            </span>
            <motion.ul
              className="space-y-4 text-gray-300 text-base tracking-tighter font-medium"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {footerData.navigation.pages.links.map((link, index) => (
                <motion.li key={index} variants={linkItem}>
                  <Link href={link.href} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Column 2: Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.help.title}
            </span>
            <motion.ul
              className="space-y-4 text-gray-300 text-base tracking-tighter font-medium"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {footerData.navigation.help.links.map((link, index) => (
                <motion.li key={index} variants={linkItem}>
                  <Link href={link.href} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Column 3: CMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.cms.title}
            </span>
            <motion.ul
              className="space-y-4 text-gray-300 text-base tracking-tighter font-medium"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {footerData.navigation.cms.links.map((link, index) => (
                <motion.li key={index} variants={linkItem}>
                  <Link href={link.href} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Layout (Newsletter) */}
      <motion.div
        className="flex order-1 lg:order-2 flex-col justify-between bg-red-900 text-white p-6 rounded-lg w-full lg:w-2/5"
        {...slideInRight}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.span
          className="text-2xl lg:text-2xl font-medium tracking-tighter leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {footerData.newsletter.headline.split(" and ")[0]} <br /> and {footerData.newsletter.headline.split(" and ")[1]?.split(" your ")[0]} your <br /> {footerData.newsletter.headline.split(" your ")[1]}
        </motion.span>
        <motion.div
          className="flex flex-col w-full gap-2 mt-10 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.input
            type="email"
            placeholder={footerData.newsletter.placeholder}
            className="border border-white p-3 rounded-xl text-base tracking-tighter outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-200"
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.button
            className="bg-white mt-2 text-black p-3 rounded-xl font-medium cursor-pointer hover:text-white tracking-tighter hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {footerData.newsletter.ctaText}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
