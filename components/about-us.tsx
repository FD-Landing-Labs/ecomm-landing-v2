import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-[#f6f6f6] text-sm md:text-xl tracking-tighter rounded-lg p-4 text-black/80  font-medium flex justify-center">
        About Us
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#f6f6f6] rounded-lg p-6 text-black/80 font-medium flex flex-col justify-between items-center col-span-3 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl md:text-3xl font-medium text-black tracking-tighter">
            Designing Spaces, Inspiring Connection
          </h2>
          <div>
            <p className=" text-gray-500 text-base text-justify leading-tight tracking-tighter max-w-md">
              At Hanssen, our mission is to create furniture that brings people
              together, inspired by the simplicity and warmth of Scandinavian
              design.
            </p>
            <button className="mt-8 text-lg tracking-tighter font-medium text-black underline hover:text-gray-700 transition-colors">
              More About Us
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:col-span-2">
          <Image
            src="/assets/images/about.jpg"
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
