import HeroSection from "@/components/pages/hero-section";
import InfoBoxes from "@/components/utils/info-boxes";
import RecentPropertiesSection from "@/components/pages/recent-properties-section";
import connectToMongoDB from "@/config/database";
import FeaturedProperties from "@/components/pages/featured-properties";

const HomePage = () => {
  connectToMongoDB();
  return (
    <main>
      <HeroSection />
      <InfoBoxes />
      <FeaturedProperties />
      <RecentPropertiesSection />
    </main>
  );
};

export default HomePage;