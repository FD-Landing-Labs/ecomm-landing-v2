"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenuCategories, type CategoryGroup } from '@/data/categories';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen]);

  // Prevent wheel scroll from propagating to body
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
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
            className="fixed inset-0 bg-black/20 z-30"
            onClick={onClose}
            onWheel={handleWheel}
          />

          {/* Mega Menu Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[72px] left-0 right-0 z-40 mx-4"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onWheel={handleWheel}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 max-h-[calc(100vh-100px)] overflow-hidden">
              {/* Menu Content */}
              <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-8 overscroll-contain">
                <div className="grid grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-8">
                  {megaMenuCategories.map((group, groupIndex) => (
                    <CategoryColumn key={groupIndex} group={group} />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 bg-gray-50 px-8 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Browse all categories for your automotive needs
                  </span>
                  <Link
                    href="/shop"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CategoryColumn({ group }: { group: CategoryGroup }) {
  return (
    <div className="min-w-0">
      {/* Group Header */}
      <h3 className="font-semibold text-sm text-gray-900 mb-3 tracking-tight">
        {group.name}
      </h3>

      {/* Category Links */}
      <ul className="space-y-2">
        {group.categories.map((category, catIndex) => (
          <li key={catIndex}>
            <Link
              href={`/shop?category=${encodeURIComponent(category.name.toLowerCase())}`}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {category.name}
            </Link>

            {/* Subcategories if any */}
            {category.subcategories && category.subcategories.length > 0 && (
              <ul className="mt-1 ml-3 space-y-1">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={`/shop?category=${encodeURIComponent(sub.name.toLowerCase())}`}
                      className="block text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
