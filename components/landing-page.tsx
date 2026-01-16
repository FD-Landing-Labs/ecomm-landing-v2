import { HeroSection } from "./hero-section";
import { CollectionSection } from "./collaction-section";
import { AboutUs } from "./about-us";
import Footer from "./footer";
import { OurFavoritesSection } from "./our-favorites-section";
import { NewArrival } from "./NewArrival";
import FaqSection from "./faq-section";
import TestimonialSection from "./testimonial-section";
import Navbar from "./navbar";
import SocialMedia from "./social-media";
import { Marquee } from "./brand-marquee";
import CartSheet from "./cart-sheet";

export const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <CartSheet />
      <HeroSection />
      <OurFavoritesSection />
      <NewArrival />
      <CollectionSection />
      <AboutUs />
      <Marquee />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </div>
  );
};
