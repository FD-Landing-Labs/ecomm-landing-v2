"use client";

import { useState } from "react";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMedia from "./social-media";
import placeholderData from "@/data/place_holder.json";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData = placeholderData.faq;
const faqs: FAQItem[] = faqData.items;

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

const faqItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut }
  }
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <motion.section
      className="px-4 pb-4 md:px-8 md:pb-4 lg:px-4 lg:pb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-auto p-4 md:p rounded-3xl bg-gray-100 mb-4"
        {...fadeUp}
      >
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Title & Contact */}
          <motion.div
            className="flex flex-col space-y-8"
            {...slideInLeft}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-4">
              <motion.span
                className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {faqData.sectionLabel}
              </motion.span>
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl tracking-tighter font-medium capitalize text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {faqData.sectionTitle}
              </motion.h2>
            </div>

            {/* Still have questions card */}
            <motion.div
              className="p-4 mt-8 md:mt-32 bg-gray-200 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-start space-y-4">
                <motion.div
                  className="p-3 bg-white rounded-xl shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="w-6 h-6 text-black" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {faqData.contactCard.title}
                  </h3>
                  <p className="mt-2 text-base tracking-tighter text-gray-600">
                    {faqData.contactCard.description}
                  </p>
                </div>
                <motion.button
                  className="inline-flex cursor-pointer items-center px-4 py-2 md:px-6 md:py-3 text-base tracking-tighter capitalize font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {faqData.contactCard.ctaText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="md:col-span-2">
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`overflow-hidden transition-all duration-200 border rounded-2xl ${openIndex === index
                    ? "bg-white border-gray-00 shadow-sm"
                    : "bg-gray-200 border-transparent hover:bg-gray-50"
                    }`}
                  variants={faqItem}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`text-lg md:text-xl tracking-tighter font-medium ${openIndex === index ? "text-gray-900" : "text-gray-600"
                        }`}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      className="ml-6 flex-shrink-0"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`p-1 rounded-md ${openIndex === index
                          ? "bg-black text-white"
                          : "text-gray-400"
                          }`}
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <div className="px-6 pb-6 text-base md:text-lg tracking-tighter text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <SocialMedia />
    </motion.section>
  );
}
