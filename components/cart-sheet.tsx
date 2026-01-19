"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

// Generate slug from product name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function CartSheet() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getCartTotal,
  } = useCart();

  const subtotal = getCartTotal();

  return (
    <>
      {/* Cart Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Sheet */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isCartOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl"
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg tracking-tighter font-semibold text-black">
              Cart ({cartItems.length})
            </h2>
            <motion.button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} className="text-gray-600" />
            </motion.button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-gray-500"
              >
                <ShoppingCart size={48} className="mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-400 mb-6">
                  Add some products to get started
                </p>
                <motion.button
                  onClick={closeCart}
                  className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Shopping
                </motion.button>
              </motion.div>
            ) : (
              <AnimatePresence mode="popLayout">
                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.material}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                      className="flex gap-4"
                    >
                      {/* Product Image */}
                      <Link
                        href={`/shop/${item.slug || generateSlug(item.name)}`}
                        onClick={closeCart}
                      >
                        <motion.div
                          className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              href={`/shop/${item.slug || generateSlug(item.name)}`}
                              onClick={closeCart}
                            >
                              <h3 className="font-medium text-black tracking-tighter hover:underline">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-500">
                              Material: {item.material}
                            </p>
                          </div>
                          <span className="font-medium text-black">
                            {(item.price * item.quantity)
                              .toFixed(2)
                              .replace(".", ",")}{" "}
                            Rs
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-auto pt-3">
                          <div className="flex items-center border rounded-lg">
                            <motion.button
                              onClick={() => decrementQuantity(item.id)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus size={14} />
                            </motion.button>
                            <span className="px-3 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <motion.button
                              onClick={() => incrementQuantity(item.id)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus size={14} />
                            </motion.button>
                          </div>
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 border rounded-lg hover:bg-gray-100 transition-colors tracking-tighter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <X size={14} className="text-gray-500" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
          </div>

          {/* Cart Footer */}
          <AnimatePresence>
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="border-t p-6 bg-gray-50"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-lg font-semibold text-black">
                    {subtotal.toFixed(2).replace(".", ",")} Rs
                  </span>
                </div>
                <motion.button
                  className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Checkout
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
