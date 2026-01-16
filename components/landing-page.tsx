import { HeroSection } from "./hero-section";
import { CollectionSection } from "./collaction-section";
import { AboutUs } from "./about-us";
import Footer from "./footer";
import { OurFavoritesSection } from "./our-favorites-section";
import FaqSection from "./faq-section";
import TestimonialSection from "./testimonial-section";
import Navbar from "./navbar";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurFavoritesSection />
      <CollectionSection />
      <AboutUs />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </div>
  );
};
