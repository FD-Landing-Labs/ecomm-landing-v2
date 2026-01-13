export const HeroSection = () => {
  return (
    <div className="p-4">
      <div className="bg-black rounded-lg">
        <div className="relative max-w-md mx-auto text-white text-center bg-black overflow-hidden whitespace-nowrap">
          
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

          {/* Marquee */}
          <div className="flex space-x-2 animate-marquee inline-block p-2">
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>

            {/* duplicate (required for infinite loop) */}
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
            <span>Save 20% on your first order -</span>
          </div>

        </div>
      </div>
    </div>
  );
};
