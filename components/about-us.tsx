import Image from "next/image";
import { Twitter, Instagram, ArrowUpRight } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black/80  font-medium flex justify-center">
        About Us
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
        <div className="bg-[#f6f6f6] rounded-lg p-6 lg:p-14 text-black/80 font-medium w-full lg:w-[450px] ">
          <h2 className="text-3xl font-normal text-black">
            Designing Spaces, Inspiring Connection
          </h2>
          <p className="mt-8 lg:mt-74 text-gray-500 text-sm text-justify leading-tight">
            At Hanssen, our mission is to create furniture that brings people
            together, inspired by the simplicity and warmth of Scandinavian
            design.
          </p>
          <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
            More About Us
          </button>
        </div>

        <div className="w-full lg:w-auto">
          <Image
            src="/assets/images/aboutimage.avif"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] md:h-[500px] lg:w-[850px] lg:h-[600px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 ">
        {/* Twitter */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-[320px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-sm md:text-lg">Twitter</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <Twitter
              size={17}
              className="absolute md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
            />
            <ArrowUpRight
              size={17}
              className="absolute md-size-24 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Instagram */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-[310px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-sm md:text-lg">Instagram</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <Instagram
              size={25}
              className="absolute  md-size-24 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
            />
            <ArrowUpRight
              size={17}
              className="absolute md-size-24 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Pinterest */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-[300px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-sm md:text-lg">Pinterest</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <Image
                src="/assets/images/pinterest.png"
                alt="pinterest"
                width={25}
                height={25}
                className="md-size-28"
              />
            </div>
            <ArrowUpRight
              size={17}
              className="absolute md-size-28 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Behance */}
        <div className="flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 w-full md:w-[calc(50%-0.375rem)] lg:w-[350px] text-black/80 font-medium group cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-sm md:text-lg">Behance</span>
          <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className="absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <Image
                src="/assets/images/be.png"
                alt="behance"
                width={25}
                height={25}
                className="md-size-28"
              />
            </div>
            <ArrowUpRight
              size={17}
              className="absolute md-size-28  transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
