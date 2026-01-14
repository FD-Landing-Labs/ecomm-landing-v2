
import { SP } from "next/dist/shared/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex px-4 justify-between gap-3">
      {/* Left Layout (Navigation & Brand) */}
      <div className="bg-black text-white p-12 rounded-lg w-1/2 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-8">
          {/* Pages Section */}
          <div>
            <span className="text-sm font-medium mb-6 ">Pages</span>
            <ul className="space-y-4 py-4 text-gray-400 text-sm font-medium">
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

          {/* CMS Section */}
          <div>
            <span className="text-sm font-medium mb-6">CMS</span>
            <ul className="space-y-4  py-4 text-gray-400 text-sm font-medium">
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

          {/* Help Section */}
          <div>
            <span className="text-sm font-medium ">Help</span>
            <ul className="space-y-4 py-4 text-gray-400 text-sm font-medium">
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
          
        </div>
        

        {/* Brand Section */}
        <div className="mt-12">
          <div className="flex  gap-2 mb-4">
            <div className="flex  w-6 h-6 border-2 border-white rounded-full">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">Fjord</span>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Scandinavian furniture, meticulously handcrafted to bring warmth and
            elegance into your home.
          </p>
        </div>
         <button className="mt-8 w-40 text-sm font-medium text-black bg-white p-2 rounded-lg underline hover:text-gray-700 transition-colors">
         More Templates
          </button>
          <span className="mt-4">© Made by <span className="underline">Gola Templates</span></span>
      </div>

      {/* Right Layout (Newsletter) */}
      <div className="flex  flex-col gap-14 bg-black text-white p-14 rounded-lg w-1/2">
        <span className="text-2xl font-medium">
          Join our newsletter <br /> and get 20% off your <br /> first purchase
        </span>
        <div className="flex flex-col w-full gap-2 mt-44">
          <input
            type="email"
            placeholder="Enter your email "
            className=" bg-gray-900 p-2 rounded-lg"
          />
          <button className="bg-white mt-2 text-black p-2 rounded-lg">
            Subscribe
          </button>
        </div>
        
      </div>
      
    </footer>
  );
}
