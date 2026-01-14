import Image from "next/image";

export const CollactionSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4  ">
      <div className="bg-[#f6f6f6] rounded-lg p-4  text-sm md:text-lg text-black/70  font-medium flex justify-center">
        Collactions
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="relative w-full lg:w-auto">
          <Image
            src="/assets/images/c-chair2.avif"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] md:h-[515px] lg:w-[950px] lg:h-[515px]"
          />
          <div className="absolute  md:bottom-6 bottom-4 left-6 md:left-10 bg-white p-6 rounded-lg md:max-w-[250px] max-w-[200px] shadow-lg">
            <h2 className="text-sm md:text-3xl font-medium text-black">Wood</h2>
            <p className="mt-4 text-gray-500 text-sm leading-tight">
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
              src="/assets/images/c-chair.avif"
              alt=""
              width={600}
              height={500}
              className="rounded-lg object-cover w-full md:w-[350px] h-[250px] "
            />
            <div className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1">
              <h2 className="md:text-3xl text-m font-medium text-white ">Dark</h2>
              <p className="mt-12 text-gray-500 text-sm leading-tight ">
                Rrefined finishes bring an air of sophistication and drama to
                any room.
              </p>

              <button className="mt-8 text-sm font-medium text-white underline hover:text-gray-700 transition-colors">
                View Product
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="bg-black p-6 rounded-lg w-full md:w-auto md:flex-1 order-2 md:order-1">
              <h2 className="md:text-3xl text-m font-medium text-white ">Modern</h2>
              <p className="mt-12 text-gray-500 text-sm leading-tight ">
                The Modern Collection brings together graceful lines and
                luxurious finishes.
              </p>

              <button className="mt-8 text-sm font-medium text-white underline hover:text-gray-700 transition-colors">
                View Product
              </button>
            </div>
            <Image
              src="/assets/images/chair-1.webp"
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
