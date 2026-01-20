"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { megaMenuCategories, type CategoryGroup, type Category } from '@/data/categories';

interface ShopSidebarProps {
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategorySelect: (groupName: string, categoryName: string | null, subcategoryName?: string | null) => void;
}

export default function ShopSidebar({
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
}: ShopSidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupName)
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const toggleCategory = (categoryName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleCategoryClick = (groupName: string, categoryName: string) => {
    onCategorySelect(groupName, categoryName, null);
  };

  const handleSubcategoryClick = (groupName: string, categoryName: string, subcategoryName: string) => {
    onCategorySelect(groupName, categoryName, subcategoryName);
  };

  const handleViewAllGroup = (groupName: string) => {
    onCategorySelect(groupName, null, null);
  };

  return (
    <aside className="w-full bg-gray-50 p-4 rounded-2xl">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-medium tracking-tighter text-gray-900">Categories</h2>
      </div>

      {/* Category Accordion */}
      <nav className="space-y-1">
        {/* All Products */}
        <button
          onClick={() => onCategorySelect('', null, null)}
          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${!selectedCategory
            ? 'bg-black text-white'
            : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
          All Products
        </button>

        {/* Category Groups */}
        {megaMenuCategories.map((group) => (
          <CategoryGroupAccordion
            key={group.name}
            group={group}
            isExpanded={expandedGroups.includes(group.name)}
            expandedCategories={expandedCategories}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            onToggle={() => toggleGroup(group.name)}
            onCategoryToggle={toggleCategory}
            onCategoryClick={handleCategoryClick}
            onSubcategoryClick={handleSubcategoryClick}
            onViewAllGroup={handleViewAllGroup}
          />
        ))}
      </nav>
    </aside>
  );
}

interface CategoryGroupAccordionProps {
  group: CategoryGroup;
  isExpanded: boolean;
  expandedCategories: string[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onToggle: () => void;
  onCategoryToggle: (categoryName: string, e: React.MouseEvent) => void;
  onCategoryClick: (groupName: string, categoryName: string) => void;
  onSubcategoryClick: (groupName: string, categoryName: string, subcategoryName: string) => void;
  onViewAllGroup: (groupName: string) => void;
}

function CategoryGroupAccordion({
  group,
  isExpanded,
  expandedCategories,
  selectedCategory,
  selectedSubcategory,
  onToggle,
  onCategoryToggle,
  onCategoryClick,
  onSubcategoryClick,
  onViewAllGroup,
}: CategoryGroupAccordionProps) {
  const isGroupSelected = selectedCategory?.startsWith(group.name);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {/* Group Header */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between cursor-pointer px-3 py-2.5 text-sm font-medium transition-colors rounded-lg ${isGroupSelected
          ? 'text-black bg-gray-50'
          : 'text-gray-700 hover:bg-gray-50'
          }`}
      >
        <span>{group.name}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-gray-400" />
        </motion.span>
      </button>

      {/* Group Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-3 pb-2 space-y-0.5">
              {/* View All in Group */}
              <button
                onClick={() => onViewAllGroup(group.name)}
                className={`w-full text-left px-3 py-2 rounded-md cursor-pointer text-sm transition-colors ${selectedCategory === group.name && !selectedSubcategory
                  ? 'bg-black text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                All {group.name}
              </button>

              {/* Categories */}
              {group.categories.map((category) => (
                <CategoryItem
                  key={category.name}
                  category={category}
                  groupName={group.name}
                  isExpanded={expandedCategories.includes(`${group.name}-${category.name}`)}
                  isSelected={selectedCategory === `${group.name}/${category.name}`}
                  selectedSubcategory={selectedSubcategory}
                  onToggle={(e) => onCategoryToggle(`${group.name}-${category.name}`, e)}
                  onClick={() => onCategoryClick(group.name, category.name)}
                  onSubcategoryClick={(subName) => onSubcategoryClick(group.name, category.name, subName)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CategoryItemProps {
  category: Category;
  groupName: string;
  isExpanded: boolean;
  isSelected: boolean;
  selectedSubcategory: string | null;
  onToggle: (e: React.MouseEvent) => void;
  onClick: () => void;
  onSubcategoryClick: (subcategoryName: string) => void;
}

function CategoryItem({
  category,
  groupName,
  isExpanded,
  isSelected,
  selectedSubcategory,
  onToggle,
  onClick,
  onSubcategoryClick,
}: CategoryItemProps) {
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={onClick}
          className={`flex-1 text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer ${isSelected && !selectedSubcategory
            ? 'bg-black text-white font-medium'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
        >
          {category.name}
        </button>

        {hasSubcategories && (
          <button
            onClick={onToggle}
            className="p-2 hover:bg-white rounded-md transition-colors cursor-pointer"
          >
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={14} className="text-gray-400" />
            </motion.span>
          </button>
        )}
      </div>

      {/* Subcategories */}
      <AnimatePresence>
        {hasSubcategories && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-0.5">
              {category.subcategories?.map((sub) => (
                <button
                  key={sub.name}
                  onClick={() => onSubcategoryClick(sub.name)}
                  className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors ${selectedSubcategory === sub.name
                    ? 'bg-black text-white font-medium'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
