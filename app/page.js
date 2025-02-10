import Image from "next/image";
import BigCardSection from "./components/BigCardSection";
import ConversionSection from "./components/ConversionSection";
import DesignSection from "./components/DesignSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Processes from "./components/Processes";
import SEOSection from "./components/SEOSection";
import Services from "./components/Services";
import TextSection from "./components/TextSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ConversionSection />
      <DesignSection />
      <SEOSection />
      <Processes />
      <TextSection />
      <BigCardSection />
      <Pricing />
      <FAQ />
    </div>
  );
}
