import { SP } from "next/dist/shared/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row px-4 justify-between gap-4 pb-4">
      {/* Left Layout (Navigation & Brand) */}
      <div className="bg-black order-2 lg:order-1 text-white p-6 lg:p-12 rounded-lg w-full lg:w-3/4 flex flex-col md:flex-row justify-between ">
        {/* Brand Section */}
        <div className="flex flex-col justify-between  ">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium tracking-tight">Fjord</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Scandinavian furniture, meticulously handcrafted to bring warmth
              and elegance into your home.
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <button className="inline-flex items-center gap-1 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              More Templates <span className="ml-1">↗</span>
            </button>
            <div className="mt-6 text-sm text-gray-500 font-medium">
              © Made by{" "}
              <a href="#" className="underline text-white">
                Gola Templates
              </a>
            </div>
          </div>
        </div>

        {/* Pages Section - 3 Columns */}
        <div className="grid grid-cols-3 gap-8 md:gap-4">
          {/* Column 1: Pages */}
          <div>
            <span className="text-sm font-medium block mb-6 text-white">
              Pages
            </span>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  404
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2: Help */}
          <div>
            <span className="text-sm font-medium block mb-6 text-white">
              Help
            </span>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: CMS */}
          <div>
            <span className="text-sm font-medium block mb-6 text-white">
              CMS
            </span>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shop Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shop Category
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Layout (Newsletter) */}
      <div className="flex order-1 lg:order-2 flex-col justify-between bg-black text-white p-6 lg:p-14 rounded-lg w-full lg:w-2/5">
        <span className="text-2xl lg:text-2xl font-medium leading-tight">
          Join our newsletter <br /> and get 20% off your <br /> first purchase
        </span>
        <div className="flex flex-col w-full gap-2 mt-10 lg:mt-24">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-[#1f1f1f] p-3 rounded-xl text-sm outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
          />
          <button className="bg-white mt-2 text-black p-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
