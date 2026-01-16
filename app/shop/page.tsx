"use client";

import { useState } from "react";
import placeholderData from "@/data/place_holder.json";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShopHeader, ShopCategories, ShopProducts } from "@/components/shop";

const shopData = placeholderData.shop;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? shopData.allProducts
      : shopData.allProducts.filter(
        (product) => product.category === activeCategory
      );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-10">
        <ShopHeader title={shopData.title} description={shopData.description} />

        <ShopCategories
          categories={shopData.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ShopProducts
          products={filteredProducts}
          activeCategory={activeCategory}
        />
      </div>

      <Footer />
    </main>
  );
}
