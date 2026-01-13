import Image from "next/image";

export const CollactionSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4  ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black/70  font-medium flex justify-center">
        Collactions
      </div>
      <div className="flex justify-between gap-4">
        <div className="relative">
          <Image
            src="/assets/images/c-chair2.avif"
            alt=""
            width={900}
            height={500}
            className="rounded-lg object-cover w-[950px] h-[515px]"
          />
          <div className="absolute bottom-6 left-10 bg-white p-6 rounded-lg max-w-[250px] shadow-lg">
            <h2 className="text-3xl font-medium text-black">Wood</h2>
            <p className="mt-4 text-gray-500 text-sm leading-tight">
              Our Wood Collection celebrates the natural beauty of wood.
            </p>
            <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
              View Collection
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex  gap-4 justify-between">
            <Image
              src="/assets/images/c-chair.avif"
              alt=""
              width={600}
              height={500}
              className="rounded-lg object-cover w-[350px]  h-[250px] "
            />
            <div className="bg-black p-6 rounded-lg ">
              <h2 className="text-3xl font-medium text-white ">Dark</h2>
              <p className="mt-12 text-gray-500 text-sm leading-tight ">
                Rrefined finishes bring an air of sophistication and drama to
                any room.
              </p>

              <button className="mt-8 text-sm font-medium text-white underline hover:text-gray-700 transition-colors">
                View Product
              </button>
            </div>
          </div>

          <div className="flex  gap-4 justify-between">
            <div className="bg-black p-6 rounded-lg ">
              <h2 className="text-3xl font-medium text-white ">Modern</h2>
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
              className="rounded-lg object-cover  w-[350px] h-[250px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
