"use client";

import React, { useState } from 'react'
import Image from "next/image";
import { Plus, Search, ShoppingCart, ArrowRight, Menu, X, Minus } from "lucide-react";

interface NavbarProps {
    onMobileMenuOpen?: () => void;
}

interface CartItem {
    id: number;
    name: string;
    material: string;
    price: number;
    quantity: number;
    image: string;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Runa",
            material: "Teak",
            price: 300,
            quantity: 1,
            image: "/assets/images/f-chair-1"
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <nav className="flex items-center justify-between mt-4 mx-4 px-6 py-4 rounded-2xl bg-gray-200">
                {/* Left Section - Logo, Nav Links, Theme Toggle */}
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-1.5 cursor-pointer group/brand">
                        {/* Orange Circle Icon */}
                        <div className="w-4 h-4 bg-orange-500 rounded-full" />

                        {/* Brand Name */}
                        <span className="font-semibold text-sm text-black">Fjord</span>
                    </div>

                    {/* Dark Mode Toggle - visible on mobile */}
                    <div className="md:hidden flex items-center gap-2">
                        <div className="w-4 h-4 bg-black rounded-full" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-5 text-sm font-medium text-black">
                        {/* Shop */}
                        <div className="relative overflow-hidden h-6 flex items-center justify-center group/shop cursor-pointer">
                            <span className="transition-all duration-300 group-hover/shop:-translate-y-full group-hover/shop:opacity-0">
                                Shop
                            </span>
                            <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/shop:translate-y-0 group-hover/shop:opacity-100">
                                Shop
                            </span>
                        </div>

                        {/* Collections with Dropdown */}
                        <div className="relative flex items-center gap-0.5 group/collection cursor-pointer">
                            <div className="flex items-center gap-0.5">
                                <div className="relative overflow-hidden h-6 flex items-center justify-center">
                                    <span className="transition-all duration-300 group-hover/collection:-translate-y-full group-hover/collection:opacity-0">
                                        Collections
                                    </span>
                                    <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/collection:translate-y-0 group-hover/collection:opacity-100">
                                        Collections
                                    </span>
                                </div>
                                <Plus
                                    size={13}
                                    className="transition-transform duration-300 group-hover/collection:rotate-45"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 opacity-0 invisible group-hover/collection:opacity-100 group-hover/collection:visible transition-all duration-300 z-50">
                                <div className="bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 text-black text-left">
                                    {[
                                        { name: "Dark", image: "/assets/images/chair-1.webp" },
                                        { name: "Modern", image: "/assets/images/f.avif" },
                                        { name: "Wood", image: "/assets/images/c-chair2.avif" },
                                    ].map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center bg-gray-100 justify-between p-2 hover:bg-gray-200 rounded-lg transition-colors group/item"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                <ArrowRight
                                                    size={14}
                                                    className="absolute text-gray-400 transition-all duration-300 group-hover/item:-translate-y-full group-hover/item:opacity-0"
                                                />
                                                <ArrowRight
                                                    size={14}
                                                    className="absolute text-black transition-all duration-300 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About with Dropdown */}
                        <div className="relative flex items-center gap-0.5 group/about cursor-pointer">
                            <div className="flex items-center gap-0.5">
                                <div className="relative overflow-hidden h-6 flex items-center justify-center">
                                    <span className="transition-all duration-300 group-hover/about:-translate-y-full group-hover/about:opacity-0">
                                        About
                                    </span>
                                    <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/about:translate-y-0 group-hover/about:opacity-100">
                                        About
                                    </span>
                                </div>
                                <Plus
                                    size={13}
                                    className="transition-transform duration-300 group-hover/about:rotate-45"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 opacity-0 invisible group-hover/about:opacity-100 group-hover/about:visible transition-all duration-300 z-50">
                                <div className="bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 text-black text-left">
                                    {["About", "Contact", "FAQ"].map((item) => (
                                        <div
                                            key={item}
                                            className="flex bg-gray-100 items-center justify-between p-3 hover:bg-gray-200 rounded-lg transition-colors group/item"
                                        >
                                            <span className="text-sm font-medium">{item}</span>
                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                <ArrowRight
                                                    size={14}
                                                    className="absolute text-gray-400 transition-all duration-300 group-hover/item:-translate-y-full group-hover/item:opacity-0"
                                                />
                                                <ArrowRight
                                                    size={14}
                                                    className="absolute text-black transition-all duration-300 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Blog */}
                        <div className="relative overflow-hidden h-6 flex items-center justify-center group/blog cursor-pointer">
                            <span className="transition-all duration-300 group-hover/blog:-translate-y-full group-hover/blog:opacity-0">
                                Blog
                            </span>
                            <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/blog:translate-y-0 group-hover/blog:opacity-100">
                                Blog
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Section - Search & Cart */}
                <div className="flex items-center gap-4 text-sm font-medium text-black">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Search size={18} />
                    </button>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        <ShoppingCart size={18} />
                        <span>({cartItems.length})</span>
                    </button>
                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden text-sm font-medium hover:opacity-70 transition-opacity"
                    >
                        Menu
                    </button>
                </div>
            </nav>

            {/* Search Modal Overlay */}
            <div
                className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsSearchOpen(false)}
            />

            {/* Search Modal */}
            <div
                className={`fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4 transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="bg-white rounded-full shadow-2xl flex items-center px-6 py-4">
                    <Search size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-black placeholder:text-gray-400 text-lg"
                        autoFocus={isSearchOpen}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors ml-2"
                        >
                            <X size={18} className="text-gray-400" />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Sheet */}
            <div
                className={`fixed inset-0 bg-gray-100 z-50 transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Mobile Menu Header */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                        >
                            Close
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="space-y-3">
                            {/* Collections with Images */}
                            {[
                                { name: "Dark", image: "/assets/images/c-chair.avif" },
                                { name: "Modern", image: "/assets/images/f.avif" },
                                { name: "Wood", image: "/assets/images/c-chair2.avif" },
                            ].map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center justify-between bg-gray-200 p-3 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors group/item"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-300">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-black">{item.name}</span>
                                    </div>
                                    <ArrowRight size={18} className="text-gray-500 group-hover/item:translate-x-1 transition-transform" />
                                </div>
                            ))}

                            {/* Simple Links */}
                            {["Shop", "About", "Blog"].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between bg-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors group/item"
                                >
                                    <span className="text-sm font-medium text-black">{item}</span>
                                    <ArrowRight size={18} className="text-gray-500 group-hover/item:translate-x-1 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Sheet */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Cart Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-semibold text-black">Cart ({cartItems.length})</h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <ShoppingCart size={48} className="mb-4 opacity-50" />
                                <p>Your cart is empty</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        {/* Product Image */}
                                        <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium text-black">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">Material: {item.material}</p>
                                                </div>
                                                <span className="font-medium text-black">
                                                    {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                                                </span>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-between mt-auto pt-3">
                                                <div className="flex items-center border rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-3 text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 border rounded-lg hover:bg-gray-100 transition-colors"
                                                >
                                                    <X size={14} className="text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cart Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t p-6 bg-gray-50">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="text-lg font-semibold text-black">
                                    {subtotal.toFixed(2).replace('.', ',')} €
                                </span>
                            </div>
                            <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
