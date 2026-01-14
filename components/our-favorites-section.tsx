"use clinet"
import Image from "next/image";
const OurFavoritesSectionData = [
    {
        name:"Skala",
        image:"/assets/images/f-chair-2.avif",
        price:"210,00 €420,00 €",
        offars:"50% OFF",
    },
    {
        name:"Nest",
        image:"/assets/images/f.avif",
        price:"450,00 €",
        offars:"",
    },
    {
        name:"Runa",
        image:"/assets/images/f-chair-3.avif",
        price:"300,00 €",
        offars:"",
    },
    {
        name:"Lykke",
        image:"/assets/images/f-chair-4.avif",
        price:"210,00 €420,00 €",
        offars:"54% OFF",
    },
    {
        name:"Holt",
        image:"/assets/images/f-chair-5.avif",
        price:"320,00 €",
        offars:"",
    },
     {
        name:"Kappa",
        image:"/assets/images/f-chair-6.avif",
        price:"280,00 €",
        offars:"",
    },
     {
        name:"Sol",
        image:"/assets/images/f-chair-7.avif",
        price:"300,00 €",
        offars:"65% OFF",
    },
     {
        name:"ELM",
        image:"/assets/images/f-chair-8.avif",
        price:"280,00 €",
        offars:"",
    },
]

export const OurFavoritesSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="bg-[#f6f6f6] rounded-lg p-4 text-black/60  font-medium flex justify-center">
        Our Favorites
      </div>
      <div className="flex  gap-4">
        {OurFavoritesSectionData.map((item) => (
          <div key={item.name} className="flex gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-lg object-cover w-[200px] h-[200px]"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-medium text-black">{item.name}</h2>
              <p className="mt-4 text-gray-500 text-sm leading-tight">
                {item.price}
              </p>
              <button className="mt-8 text-sm font-medium text-black underline hover:text-gray-700 transition-colors">
                View 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
