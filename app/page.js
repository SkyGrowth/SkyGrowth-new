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
import HeroTwo from "./components/HeroTwo";
import RoiSection from "./components/RoiSection";
import ContactSection from "./components/ContactSection";
import PulseButton from "./components/PulseButton";
// import BlackCurve from "./components/BlackCurve";

export default function Home() {
  return (
    <div>
      <PulseButton />
      <Hero />
      {/* <BlackCurve /> */}

      {/* <Services /> */}
      <ConversionSection />
      <DesignSection />
      <RoiSection />
      <ContactSection />
      {/* <SEOSection /> */}
      {/* <Processes /> */}
      {/* <TextSection /> */}
      {/* <BigCardSection /> */}
      {/* <Pricing /> */}
      <FAQ />
    </div>
  );
}
