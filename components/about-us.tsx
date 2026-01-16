import Image from "next/image";
import placeholderData from "@/data/place_holder.json";

const aboutData = placeholderData.aboutUs;

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-[#f6f6f6] text-lg md:text-xl tracking-tighter rounded-lg p-4 text-black/80  font-medium flex justify-center">
        {aboutData.sectionTitle}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4 md:gap-y-0">
        <div className="bg-[#f6f6f6] rounded-lg p-6 text-black/80 font-medium flex flex-col justify-between items-center col-span-3 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl md:text-3xl font-medium text-black tracking-tighter">
            {aboutData.headline}
          </h2>
          <div>
            <p className=" text-gray-500 text-base text-justify leading-tight tracking-tighter max-w-md">
              {aboutData.description}
            </p>
            <button className="mt-8 text-lg tracking-tighter font-medium text-black underline hover:text-gray-700 transition-colors">
              {aboutData.ctaText}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:col-span-2">
          <Image
            src={aboutData.image}
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};
