import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import FloatingBadge from "@/components/FloatingBadge";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`} suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <FloatingBadge />
      </body>
    </html>
  );
}
