import { HeroSection } from "./hero-section";
import { CollactionSection } from "./collaction-section";
import { AboutUs } from "./about-us";
import  Footer  from "./footer";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CollactionSection />
      <AboutUs />
      <Footer />
    </div>
  );
};
