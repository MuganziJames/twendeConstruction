import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <CTASection />
    </div>
  );
}

export default Home;
