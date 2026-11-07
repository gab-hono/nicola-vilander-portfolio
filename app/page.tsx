import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 px-5 pt-6 pb-24 text-base leading-relaxed lg:gap-40 lg:pt-12 lg:pr-16 lg:pl-0 lg:text-[17px]">
      <HeroSection />
      <AboutSection />

      {/* TEMPORARY — keeps the navigation testable. Replaced in 3.9 (Works) and 3.10 (Contact). */}
      <section id="works" className="min-h-screen scroll-mt-6 border-t border-line pt-12 lg:scroll-mt-12">
        <h2 className="font-serif text-[40px] italic lg:text-[56px]">Works</h2>
      </section>
      <section id="contact" className="min-h-[60vh] scroll-mt-6 border-t border-line pt-12 lg:scroll-mt-12">
        <h2 className="font-serif text-[40px] italic lg:text-[56px]">Contact</h2>
      </section>
    </div>
  );
}