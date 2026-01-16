"use client";

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Plus, Search, ShoppingCart, ArrowRight, X, MenuIcon } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import placeholderData from "@/data/place_holder.json";
import { useCart } from "@/context/cart-context";

const navbarData = placeholderData.navbar;
const brandData = placeholderData.brand;

interface NavbarProps {
    onMobileMenuOpen?: () => void;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const { openCart, getCartCount } = useCart();
    const cartCount = getCartCount();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 100) {
            setIsNavbarVisible(false);
        } else {
            setIsNavbarVisible(true);
        }
    });

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: isNavbarVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between mx-4 px-6 py-4 rounded-b-xl bg-gray-50 "
            >
                {/* Left Section - Logo, Nav Links, Theme Toggle */}
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 cursor-pointer group/brand">
                        {/* Brand Name */}
                        <span className="font-semibold text-xl text-blue-950 tracking-tighter">{brandData.name}</span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-5 text-base tracking-tighter font-medium text-black">
                    {/* Shop */}
                    <Link href="/shop" className="relative overflow-hidden h-6 flex items-center justify-center group/shop cursor-pointer">
                        <span className="transition-all duration-300 group-hover/shop:-translate-y-full group-hover/shop:opacity-0">
                            Shop
                        </span>
                        <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/shop:translate-y-0 group-hover/shop:opacity-100">
                            Shop
                        </span>
                    </Link>

                    {/* Collections with Dropdown */}
                    <div className="relative flex items-center gap-0.5 group/collection cursor-pointer">
                        <div className="flex items-center gap-0.5">
                            <div className="relative overflow-hidden h-6 flex items-center justify-center">
                                <span className="transition-all duration-300 group-hover/collection:-translate-y-full group-hover/collection:opacity-0">
                                    Categories
                                </span>
                                <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover/collection:translate-y-0 group-hover/collection:opacity-100">
                                    Categories
                                </span>
                            </div>
                            <Plus
                                size={13}
                                className="transition-transform duration-300 group-hover/collection:rotate-45"
                            />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="fixed top-14 left-1/2 -translate-x-1/2 pt-4 w-[90vw] max-w-[700px] opacity-0 invisible group-hover/collection:opacity-100 group-hover/collection:visible transition-all duration-300 z-50">
                            <div className="bg-gray-100 rounded-xl shadow-xl p-3 grid grid-cols-2 lg:grid-cols-3 gap-2 text-black text-left">
                                {navbarData.categories.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center bg-white justify-between p-2 hover:bg-gray-200 rounded-lg transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2 lg:gap-3">
                                            <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-md overflow-hidden bg-gray-100 shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <span className="text-sm lg:text-base font-medium">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
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
                                {navbarData.aboutDropdown.map((item) => (
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
                        onClick={openCart}
                        className="relative cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        <ShoppingCart size={18} />
                        {cartCount > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full"
                            >
                                {cartCount}
                            </motion.span>
                        )}
                    </button>
                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden text-sm font-medium hover:opacity-70 transition-opacity"
                    >
                        <MenuIcon size={20} />
                    </button>
                </div>
            </motion.nav>

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
                    <div className="flex-1 overflow-y-auto">
                        <div className="space-y-3">
                            {/* Shop Link */}
                            <Link
                                href="/shop"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-between bg-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors group/item"
                            >
                                <span className="text-sm font-medium text-black">Shop</span>
                                <ArrowRight size={18} className="text-gray-500 group-hover/item:translate-x-1 transition-transform" />
                            </Link>

                            {/* Categories Section */}
                            <div className="bg-gray-200 rounded-xl overflow-hidden">
                                <div className="p-4 border-b border-gray-300">
                                    <span className="text-sm font-medium text-black">Categories</span>
                                </div>
                                <div className="p-2 space-y-1">
                                    {navbarData.categories.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center justify-between bg-white p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors group/item"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-black">{item.name}</span>
                                            </div>
                                            <ArrowRight size={16} className="text-gray-400 group-hover/item:text-black group-hover/item:translate-x-1 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* About Section */}
                            <div className="bg-gray-200 rounded-xl overflow-hidden">
                                <div className="p-4 border-b border-gray-300">
                                    <span className="text-sm font-medium text-black">About</span>
                                </div>
                                <div className="p-2 space-y-1">
                                    {navbarData.aboutDropdown.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center justify-between bg-white p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors group/item"
                                        >
                                            <span className="text-sm font-medium text-black">{item}</span>
                                            <ArrowRight size={16} className="text-gray-400 group-hover/item:text-black group-hover/item:translate-x-1 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
