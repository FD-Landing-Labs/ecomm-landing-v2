import { HeroSection } from "./hero-section";
import { CollactionSection } from "./collaction-section";
import { AboutUs } from "./about-us";
import Footer from "./footer";
import { OurFavoritesSection } from "./our-favorites-section";
import FaqSection from "./faq-section";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <OurFavoritesSection />
      <CollactionSection />
      <AboutUs />
      <FaqSection />
      <Footer />
    </div>
  );
};
