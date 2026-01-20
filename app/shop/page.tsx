"use client";

import { useState } from "react";
import placeholderData from "@/data/place_holder.json";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CartSheet from "@/components/cart-sheet";
import { ShopHeader, ShopProducts, ShopSidebar, MobileFilterDrawer, MobileFilterButton } from "@/components/shop";

const shopData = placeholderData.shop;

export default function ShopPage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Handle category selection from sidebar
  const handleCategorySelect = (
    groupName: string,
    categoryName: string | null,
    subcategoryName?: string | null
  ) => {
    if (!groupName) {
      // All Products selected
      setSelectedGroup(null);
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else if (!categoryName) {
      // Group level selected (e.g., "All Automotive Lights")
      setSelectedGroup(groupName);
      setSelectedCategory(groupName);
      setSelectedSubcategory(null);
    } else {
      // Category or subcategory selected
      setSelectedGroup(groupName);
      setSelectedCategory(`${groupName}/${categoryName}`);
      setSelectedSubcategory(subcategoryName || null);
    }
  };

  // For now, show all products (filtering can be enhanced later based on actual product data)
  // This is a simplified version - you can enhance this to filter based on the category structure
  const filteredProducts = shopData.allProducts;

  // Get display text for current selection
  const getSelectionText = () => {
    if (!selectedCategory) return "All Products";
    if (selectedSubcategory) return selectedSubcategory;
    if (selectedCategory.includes('/')) {
      return selectedCategory.split('/')[1];
    }
    return selectedCategory;
  };

  // Count active filters
  const activeFiltersCount = selectedCategory ? 1 : 0;

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <CartSheet />

      <div className="pt-10">
        <ShopHeader title={shopData.title} description={shopData.description} />

        {/* Main Content Area */}
        <div className="px-4 pb-16">
          <div className="flex gap-4">
            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20">
                <ShopSidebar
                  selectedCategory={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  onCategorySelect={handleCategorySelect}
                />
              </div>
            </div>

            {/* Products Area */}
            <div className="flex-1 min-w-0">
              {/* Mobile Filter Button & Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gray-50 rounded-lg px-4 py-2 w-full">
                  <h2 className="text-xl font-medium tracking-tighter text-gray-900">
                    {getSelectionText()}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {filteredProducts.length} products
                  </p>
                </div>

                {/* Mobile Filter Button */}
                <MobileFilterButton
                  onClick={() => setIsMobileFilterOpen(true)}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>

              {/* Products Grid */}
              <ShopProducts
                products={filteredProducts}
                activeCategory="all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onCategorySelect={handleCategorySelect}
      />

      <Footer />
    </main>
  );
}
