
import { BentoGridSecondDemo } from "@/components/BentoGrid";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import { Hero } from "@/components/Hero";
import{ Navbar }from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <BentoGridSecondDemo/>
      <Services />
      <FeaturesSectionDemo />
    </div>
  );
}
