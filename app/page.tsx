import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { WorksSection } from "@/components/WorksSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 px-5 pt-6 pb-24 text-base leading-relaxed lg:gap-40 lg:pt-12 lg:pr-16 lg:pl-0 lg:text-[17px]">
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}