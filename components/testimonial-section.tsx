import { cn } from "@/lib/utils";
import { Star, Plus } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  variant?: "default" | "inverted" | "summary";
  name?: string;
  role?: string;
  company?: string;
  content?: string;
  rating?: number;
  className?: string;
  imageSrc?: string;
}

const TestimonialCard = ({
  variant = "default",
  name,
  role,
  company,
  content,
  rating = 5,
  className,
  imageSrc,
}: TestimonialCardProps) => {
  // Summary Card Implementation (remains a single large block)
  if (variant === "summary") {
    return (
      <div
        className={cn(
          "bg-gray-200 p-6 rounded-3xl flex flex-col justify-between h-full min-h-[400px] ",
          className
        )}
      >
        <div>
          <div className="flex items-baseline gap-1">
            <span className="md:text-5xl text-3xl font-bold tracking-tighter">4.9</span>
            <span className="text-gray-400 text-xl font-medium">/5</span>
          </div>
          <p className="text-gray-500 mt-4 text-lg tracking-tight leading-snug">
            We&apos;ve delivered{" "}
            <span className="font-semibold text-black">56+ projects</span> that
            help companies generate real results.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-bold md:text-xl text-lg tracking-tight">
              fabrica&reg;
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[
                "/assets/images/profile1.avif",
                "/assets/images/profile2.avif",
                "/assets/images/profile3.jpeg",
                "/assets/images/profile4.jpeg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-[10px] font-medium">
                56+
              </div>
            </div>
            <div className="flex gap-0.5 text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 font-medium">
            Trusted by clients worldwide
          </p>

          <button className="w-40 md:w-full bg-black text-white md:py-3 py-2 rounded-lg cursor-pointer font-medium text-sm hover:bg-gray-800 transition-colors">
            Leave a review
          </button>
        </div>
      </div>
    );
  }

  // Common blocks for Standard Testimonials
  const ProfileBlock = () => (
    <div className="bg-gray-100 p-4 rounded-3xl flex items-center gap-3">
      <div className="w-10 h-10 rounded-sm bg-gray-100 overflow-hidden relative flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name || "User"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      <div>
        <h4 className="font-semibold tracking-tighter text-lg text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-widest">{role || company}</p>
      </div>
    </div>
  );

  const ContentBlock = () => {
    const StarsAndPlus = () => (
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-black">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </div>
        <button className="text-gray-300 hover:text-black transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    );

    const isStarsBottom = variant === "inverted";

    return (
      <div
        className={cn(
          "bg-gray-100 p-6 rounded-3xl flex flex-col justify-between flex-grow h-full min-h-[200px]",
          className
        )}
      >
        {!isStarsBottom && (
          <div className="mb-4">
            <StarsAndPlus />
          </div>
        )}

        <p className=" md:text-xl text-sm tracking-tighter font-medium leading-snug text-gray-900">
          {content}
        </p>

        {isStarsBottom && (
          <div className="mt-4">
            <StarsAndPlus />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn("flex flex-col gap-3 h-full", className)}>
      {variant === "default" ? (
        <>
          <ProfileBlock />
          <ContentBlock />
        </>
      ) : (
        <>
          <ContentBlock />
          <ProfileBlock />
        </>
      )}
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="px-4 pb-4">
      <div className="bg-[#f6f6f6] text-sm md:text-xl tracking-tighter rounded-lg p-4 text-black/80  font-medium flex justify-center">
        Hear From Our Clients
      </div>
      <div className="pt-4 mx-auto rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1: Summary Card */}
          <TestimonialCard variant="summary" />

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="James Carter"
              company="Wilson & Co"
              content="Incredible team! They delivered exactly what we needed, on time and beyond expectations."
              imageSrc="/assets/images/profile4.jpeg"
            />
            {/* Placeholder for vertical stacking if needed, or just single card */}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              variant="inverted"
              content="A smooth process from start to finish. Highly professional team!"
              rating={5}
              name="Emily Davis"
              role="StartUp Hub"
              imageSrc="/assets/images/profile1.avif"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Anna Martinez"
              role="Marketing Director"
              content="Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry."
              imageSrc="/assets/images/profile2.avif"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
