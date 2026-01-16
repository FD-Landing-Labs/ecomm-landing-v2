import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import FloatingBadge from "@/components/FloatingBadge";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { CartProvider } from "@/context/cart-context";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "RR Auto Parts - Premium Auto Parts for Every Vehicle",
  description: "RR Auto Parts offers a wide selection of high-quality auto parts designed to enhance your vehicle's performance and durability. Shop now for the best deals on OEM and aftermarket parts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`} suppressHydrationWarning>
        <CartProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <FloatingBadge />
        </CartProvider>
      </body>
    </html>
  );
}
