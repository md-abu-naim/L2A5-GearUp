import CategorySection from "./_components/Home/CategorySection";
import CTASection from "./_components/Home/CTASection";
import FeaturedGear from "./_components/Home/FeaturedGear";
import HeroSection from "./_components/Home/HeroSection";
import HowItWorks from "./_components/Home/HowItWorks";
import PopularGears from "./_components/Home/PopularSection";
import Testimonials from "./_components/Home/Testimonials";
import TrustStats from "./_components/Home/TrustStats";
import WhyChooseUs from "./_components/Home/WhyChooseUs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <PopularGears />
      <FeaturedGear />
      <CategorySection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
