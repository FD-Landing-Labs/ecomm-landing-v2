"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal } from 'lucide-react';
import ShopSidebar from './shop-sidebar';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategorySelect: (groupName: string, categoryName: string | null, subcategoryName?: string | null) => void;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
}: MobileFilterDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCategorySelect = (groupName: string, categoryName: string | null, subcategoryName?: string | null) => {
    onCategorySelect(groupName, categoryName, subcategoryName);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[350px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-gray-700" />
                <span className="font-semibold text-gray-900">Filters</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <ShopSidebar
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4">
              <button
                onClick={onClose}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Filter Button Component for triggering the drawer
export function MobileFilterButton({ onClick, activeFiltersCount }: { onClick: () => void; activeFiltersCount?: number }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg font-medium"
    >
      <SlidersHorizontal size={18} />
      <span>Filters</span>
      {activeFiltersCount && activeFiltersCount > 0 && (
        <span className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
          {activeFiltersCount}
        </span>
      )}
    </button>
  );
}
