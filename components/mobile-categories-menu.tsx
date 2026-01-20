"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { megaMenuCategories, type CategoryGroup, type Category } from '@/data/categories';

interface MobileCategoriesMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type NavigationLevel = {
  type: 'root';
} | {
  type: 'group';
  group: CategoryGroup;
} | {
  type: 'category';
  group: CategoryGroup;
  category: Category;
};

export default function MobileCategoriesMenu({ isOpen, onClose }: MobileCategoriesMenuProps) {
  const [navigationStack, setNavigationStack] = useState<NavigationLevel[]>([{ type: 'root' }]);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward');

  const currentLevel = navigationStack[navigationStack.length - 1];

  // Reset navigation when menu closes
  useEffect(() => {
    if (!isOpen) {
      setNavigationStack([{ type: 'root' }]);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
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

  const navigateTo = (level: NavigationLevel) => {
    setSlideDirection('forward');
    setNavigationStack(prev => [...prev, level]);
  };

  const navigateBack = () => {
    if (navigationStack.length > 1) {
      setSlideDirection('backward');
      setNavigationStack(prev => prev.slice(0, -1));
    }
  };

  const getBackLabel = (): string => {
    if (navigationStack.length <= 1) return 'All';
    const previousLevel = navigationStack[navigationStack.length - 2];
    if (previousLevel.type === 'root') return 'All';
    if (previousLevel.type === 'group') return previousLevel.group.name;
    return 'Back';
  };

  const getCurrentTitle = (): string => {
    if (currentLevel.type === 'root') return 'Categories';
    if (currentLevel.type === 'group') return currentLevel.group.name;
    if (currentLevel.type === 'category') return currentLevel.category.name;
    return 'Categories';
  };

  const slideVariants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '-100%' : '100%',
      opacity: 0,
    }),
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

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[500px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              {/* Back Button */}
              <button
                onClick={navigateBack}
                className={`flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors ${navigationStack.length <= 1 ? 'invisible' : ''
                  }`}
              >
                <ChevronLeft size={20} />
                <span>{getBackLabel()}</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence initial={false} custom={slideDirection} mode="popLayout">
                <motion.div
                  key={JSON.stringify(currentLevel)}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
                  className="absolute inset-0 overflow-y-auto"
                >
                  <div className="px-6 py-6">
                    {/* Current Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      {getCurrentTitle()}
                    </h2>

                    {/* Content based on current level */}
                    {currentLevel.type === 'root' && (
                      <RootLevel onNavigate={navigateTo} />
                    )}

                    {currentLevel.type === 'group' && (
                      <GroupLevel
                        group={currentLevel.group}
                        onNavigate={navigateTo}
                        onClose={onClose}
                      />
                    )}

                    {currentLevel.type === 'category' && (
                      <CategoryLevel
                        group={currentLevel.group}
                        category={currentLevel.category}
                        onClose={onClose}
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function RootLevel({ onNavigate }: { onNavigate: (level: NavigationLevel) => void }) {
  return (
    <ul className="space-y-1">
      {megaMenuCategories.map((group, index) => (
        <li key={index}>
          <button
            onClick={() => onNavigate({ type: 'group', group })}
            className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
          >
            <span className="text-base text-gray-700">{group.name}</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </li>
      ))}
    </ul>
  );
}

function GroupLevel({
  group,
  onNavigate,
  onClose,
}: {
  group: CategoryGroup;
  onNavigate: (level: NavigationLevel) => void;
  onClose: () => void;
}) {
  return (
    <ul className="space-y-1">
      {/* View All link */}
      <li>
        <Link
          href={`/shop?group=${encodeURIComponent(group.name.toLowerCase())}`}
          onClick={onClose}
          className="block py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
        >
          View All {group.name}
        </Link>
      </li>

      {/* Divider */}
      <li className="border-b border-gray-100 my-2" />

      {/* Categories */}
      {group.categories.map((category, index) => (
        <li key={index}>
          {category.subcategories && category.subcategories.length > 0 ? (
            <button
              onClick={() => onNavigate({ type: 'category', group, category })}
              className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
            >
              <span className="text-base text-gray-700">{category.name}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ) : (
            <Link
              href={`/shop?category=${encodeURIComponent(category.name.toLowerCase())}`}
              onClick={onClose}
              className="block py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
            >
              {category.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function CategoryLevel({
  group,
  category,
  onClose,
}: {
  group: CategoryGroup;
  category: Category;
  onClose: () => void;
}) {
  return (
    <ul className="space-y-1">
      {/* View All link */}
      <li>
        <Link
          href={`/shop?category=${encodeURIComponent(category.name.toLowerCase())}`}
          onClick={onClose}
          className="block py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
        >
          View All {category.name}
        </Link>
      </li>

      {/* Divider */}
      <li className="border-b border-gray-100 my-2" />

      {/* Subcategories */}
      {category.subcategories?.map((sub, index) => (
        <li key={index}>
          <Link
            href={`/shop?category=${encodeURIComponent(sub.name.toLowerCase())}`}
            onClick={onClose}
            className="block py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
          >
            {sub.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
