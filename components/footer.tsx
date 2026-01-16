import Link from "next/link";
import placeholderData from "@/data/place_holder.json";

const brandData = placeholderData.brand;
const footerData = placeholderData.footer;

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row px-4 justify-between gap-4 pb-4">
      {/* Left Layout (Navigation & Brand) */}
      <div className="bg-blue-950 order-2 lg:order-1 text-white p-6 md:p-8 rounded-lg w-full lg:w-3/4 flex flex-col md:flex-row justify-between ">
        {/* Brand Section */}
        <div className="flex flex-col justify-between  ">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium tracking-tighter">{brandData.name}</h3>
            </div>
            <p className="text-gray-300 text-base max-w-xs leading-snug">
              {brandData.description}
            </p>
          </div>
        </div>

        {/* Pages Section - 3 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mt-8 md:mt-0">
          {/* Column 1: Pages */}
          <div>
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.pages.title}
            </span>
            <ul className="space-y-4 text-gray-300 text-base tracking-tighter font-medium">
              {footerData.navigation.pages.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2: Help */}
          <div>
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.help.title}
            </span>
            <ul className="space-y-4 text-gray-300 text-base tracking-tighter font-medium">
              {footerData.navigation.help.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3: CMS */}
          <div>
            <span className="text-base tracking-tighter font-medium block mb-6 text-white">
              {footerData.navigation.cms.title}
            </span>
            <ul className="space-y-4 text-gray-300 text-base tracking-tighter font-medium">
              {footerData.navigation.cms.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Layout (Newsletter) */}
      <div className="flex order-1 lg:order-2 flex-col justify-between bg-red-900 text-white p-6 rounded-lg w-full lg:w-2/5">
        <span className="text-2xl lg:text-2xl font-medium tracking-tighter leading-tight">
          {footerData.newsletter.headline.split(" and ")[0]} <br /> and {footerData.newsletter.headline.split(" and ")[1]?.split(" your ")[0]} your <br /> {footerData.newsletter.headline.split(" your ")[1]}
        </span>
        <div className="flex flex-col w-full gap-2 mt-10 lg:mt-24">
          <input
            type="email"
            placeholder={footerData.newsletter.placeholder}
            className="border border-white p-3 rounded-xl text-base tracking-tighter outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-200"
          />
          <button className="bg-white mt-2 text-black p-3 rounded-xl font-medium cursor-pointer hover:text-white tracking-tighter hover:bg-blue-800 transition-colors">
            {footerData.newsletter.ctaText}
          </button>
        </div>
      </div>
    </footer>
  );
}
