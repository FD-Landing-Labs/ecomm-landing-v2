import Image from "next/image";
import placeholderData from "@/data/place_holder.json";

const collectionsData = placeholderData.collections;

export const CollectionSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4  ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 tracking-tighter text-sm md:text-xl text-black/70  font-medium flex justify-center">
        {collectionsData.sectionTitle}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="relative w-full lg:w-auto flex flex-col md:block">
          <Image
            src="/assets/images/collection-1.png"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] md:h-[515px] lg:w-[950px] lg:h-[515px]"
          />
          <div className="relative md:absolute md:bottom-6 md:left-6 bg-white p-4 rounded-lg md:max-w-[250px] max-w-full shadow-lg mt-4 md:mt-0">
            <h2 className="text-3xl font-medium text-black tracking-tighter">Wood</h2>
            <p className="mt-4 text-gray-500 text-base tracking-tight leading-tight">
              Our Wood Collection celebrates the natural beauty of wood.
            </p>
            <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
              View Collection
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <Image
              src="/assets/images/collection-2.png"
              alt=""
              width={600}
              height={500}
              className="rounded-lg object-cover w-full md:w-[350px] h-[250px] "
            />
            <div className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1 flex flex-col justify-between items-start">
              <div>
                <h2 className="text-3xl font-medium text-white tracking-tighter">Dark</h2>
                <p className="mt-4 text-gray-400 text-base tracking-tight leading-tight">
                  Refined finishes bring an air of sophistication and drama to
                  any room.
                </p>
              </div>

              <button className=" text-sm font-medium text-white underline hover:text-gray-400 transition-colors tracking-tight">
                View Collection
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1 order-2 md:order-1 flex flex-col justify-between items-start">
              <div>
                <h2 className="text-3xl font-medium text-white tracking-tighter">
                  Light
                </h2>
                <p className="mt-4 text-gray-400 text-base tracking-tight leading-tight">
                  Bright and airy designs that create a sense of openness and
                  tranquility.
                </p>
              </div>

              <button className="mt-8 text-sm font-medium text-white underline hover:text-gray-400 transition-colors tracking-tight">
                View Collection
              </button>
            </div>
            <Image
              src="/assets/images/collection-3.png"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover w-full md:w-[350px] h-[250px] order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
