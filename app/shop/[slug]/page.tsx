"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CartSheet from "@/components/cart-sheet";
import ProductGallery from "@/components/shop/product-gallery";
import ProductInfo from "@/components/shop/product-info";
import ProductAccordion from "@/components/shop/product-accordion";
import RelatedProducts from "@/components/shop/related-products";
import placeholderData from "@/data/place_holder.json";

const shopData = placeholderData.shop;

// Generate slug from product name if not provided
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find product by slug or generated slug from name
  const product = shopData.allProducts.find(
    (p) => p.slug === slug || generateSlug(p.name) === slug
  );

  if (!product) {
    notFound();
  }

  // Get related products from same category (excluding current product)
  const relatedProducts = shopData.allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Fallback data for products without full details
  const productWithDefaults = {
    ...product,
    slug: product.slug || generateSlug(product.name),
    images: product.images || [product.image],
    shortDescription:
      product.shortDescription ||
      "Premium quality auto part engineered for optimal performance and durability.",
    fullDescription:
      product.fullDescription ||
      `Discover the ${product.name}, a high-quality automotive component designed to meet or exceed OEM specifications. Built with precision engineering and premium materials for reliable performance and long-lasting durability.`,
    materials: product.materials || ["OEM Grade"],
    dimensions: product.dimensions || {
      materials: "Premium grade materials",
      compatibility: "Universal fit",
      warranty: "1 Year manufacturer warranty",
      weight: "Varies by application",
    },
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <CartSheet />
      <div className="pt-20 pb-4">
        {/* Product Detail Section */}
        <section className="px-4">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-4">
              {/* Left: Image Gallery */}
              <ProductGallery
                images={productWithDefaults.images}
                productName={product.name}
              />

              {/* Right: Product Info */}
              <div className="flex flex-col gap-4 mt-4">
                <ProductInfo
                  product={productWithDefaults}
                  features={shopData.productFeatures}
                />

                <ProductAccordion
                  description={productWithDefaults.fullDescription}
                  dimensions={productWithDefaults.dimensions}
                  shippingInfo={shopData.shippingInfo}
                  returnPolicy={shopData.returnPolicy}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>

      <Footer />
    </main>
  );
}
