import CategorySection from "./_components/Home/CategorySection";
import FeaturedGear from "./_components/Home/FeaturedGear";
import HeroSection from "./_components/Home/HeroSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedGear />
      <CategorySection />
    </>
  );
}
