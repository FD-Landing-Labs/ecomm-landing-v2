import Image from "next/image";

export const CollactionSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4  ">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black  flex justify-center">
        Collaction
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <Image
            src="/assets/images/chair 2.webp"
            alt=""
            width={700}
            height={500}
            className="rounded-lg object-cover w-full h-[515px]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex  gap-4 justify-between">
            <Image
              src="/assets/images/c-chair.avif"
              alt=""
              width={400}
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
                The Modern Collection brings together graceful lines and luxurious finishes.
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
