"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Dimensions {
  [key: string]: string | undefined;
}

interface ShippingInfo {
  title: string;
  content: string;
}

interface ReturnPolicy {
  title: string;
  content: string;
}

interface ProductAccordionProps {
  description: string;
  dimensions: Dimensions;
  shippingInfo: ShippingInfo;
  returnPolicy: ReturnPolicy;
}

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  delay?: number;
}

function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
  delay = 0,
}: AccordionItemProps) {
  return (
    <motion.div
      className="border border-gray-200 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: easeOut }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-base font-medium text-black">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProductAccordion({
  description,
  dimensions,
  shippingInfo,
  returnPolicy,
}: ProductAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    description: true,
    dimensions: true,
    shipping: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Format dimension keys for display
  const formatKey = (key: string): string => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Description */}
      <AccordionItem
        title="Description"
        isOpen={openSections.description}
        onToggle={() => toggleSection("description")}
        delay={0.35}
      >
        <p>{description}</p>
      </AccordionItem>

      {/* Dimensions / Specifications */}
      <AccordionItem
        title="Specifications"
        isOpen={openSections.dimensions}
        onToggle={() => toggleSection("dimensions")}
        delay={0.4}
      >
        <ul className="space-y-2">
          {Object.entries(dimensions)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => (
              <li key={key} className="flex">
                <span className="font-medium text-black min-w-[120px]">
                  {formatKey(key)}:
                </span>
                <span>{value}</span>
              </li>
            ))}
        </ul>
      </AccordionItem>

      {/* Shipping & Returns */}
      <AccordionItem
        title="Shipping & Returns"
        isOpen={openSections.shipping}
        onToggle={() => toggleSection("shipping")}
        delay={0.45}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-black mb-1">{shippingInfo.title}</h4>
            <p>{shippingInfo.content}</p>
          </div>
          <div>
            <h4 className="font-medium text-black mb-1">{returnPolicy.title}</h4>
            <p>{returnPolicy.content}</p>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}
