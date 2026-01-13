import Image from "next/image";
import { Twitter, Instagram, ArrowUpRight } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black/80  font-medium flex justify-center">
        About Us
      </div>
      <div className="flex justify-between ">
        <div className="bg-[#f6f6f6] rounded-lg p-14 text-black/80  font-medium w-[450px] ">
          <h2 className="text-3xl font-normal text-black">
            Designing Spaces, Inspiring Connection
          </h2>
          <p className="mt-74 text-gray-500 text-sm text-justify leading-tight">
            At Hanssen, our mission is to create furniture that brings people
            together, inspired by the simplicity and warmth of Scandinavian
            design.
          </p>
          <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
            More About Us
          </button>
        </div>

        <div>
          <Image
            src="/assets/images/aboutimage.avif"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-[850px] h-[600px]"
          />
        </div>
      </div>
      <div className="flex gap-3 ">
        {/* Twitter */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-[350px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="capitalize">Twitter</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <Twitter
              size={24}
              className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
            />
            <ArrowUpRight
              size={20}
              className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Instagram */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-[350px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="capitalize">Instagram</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <Instagram
              size={24}
              className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
            />
            <ArrowUpRight
              size={20}
              className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Pinterest */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-[350px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="capitalize">Pinterest</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <Image
                src="/assets/images/pinterest.png"
                alt="pinterest"
                width={24}
                height={24}
              />
            </div>
            <ArrowUpRight
              size={20}
              className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Behance */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-[350px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="capitalize">Behance</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <Image
                src="/assets/images/be.png"
                alt="behance"
                width={24}
                height={24}
              />
            </div>
            <ArrowUpRight
              size={20}
              className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
