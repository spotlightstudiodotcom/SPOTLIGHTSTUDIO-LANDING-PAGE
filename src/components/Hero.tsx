import { useState } from "react";
import { Spotlight } from "@/app/ui/Spotlight";
import MaxWidthWrapper from "./MaxWidth";
import { TextHeroSection } from "./TextHeroSection";

export const Hero = () => {
  return (
    <main id="home" className="w-full min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
      <MaxWidthWrapper className="py-0 px-0 lg:px-0">
        <div className="w-full pt-20 lg:pt-0  h-dvh flex items-center md:justify-center bg-dot-white/30 bg-black antialiased relative overflow-hidden">
         
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-0">
          <Spotlight
            className="-top-[50px] left-20 md:left-60 md:-top-20"
            fill="white"
          />
            <h1 className="text-3xl font-Integral md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <TextHeroSection />
            </h1>
            <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
              No Spotlight Studio, destacamos sua marca com experiências digitais que capturam sua essência e brilham no mercado competitivo.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};
