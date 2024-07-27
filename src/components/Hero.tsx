import { Spotlight } from '@/app/ui/Spotlight';
import MaxWidthWrapper from './MaxWidth';
import { TextHeroSection } from './TextHeroSection';
import { HeroHighlight } from '@/app/ui/hero-highlight';

export const Hero = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
      <HeroHighlight>
        <main id="home" className="relative min-h-screen w-full grid place-content-center">
          <Spotlight className="-top-[0px] left-20 md:-top-6 md:left-60 z-50" fill="white" />
          {/* <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div> */}
          <MaxWidthWrapper className="px-0 py-0 lg:px-0">
            {/* <div className="relative flex h-dvh w-full items-center overflow-hi
            dden bg-black pt-20 antialiased bg-dot-white/30 md:justify-center lg:pt-0"> */}
              <div className="relative z-10 mx-auto w-full max-w-7xl p-4 md:pt-0 h-full overflow-hidden">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-Integral text-2xl font-bold text-transparent md:text-7xl">
                  <TextHeroSection />
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-center text-xs font-normal text-white/80 lg:text-lg">
                  No Spotlight Studio, destacamos sua marca com experiências digitais que capturam sua
                  essência e brilham no mercado competitivo.
                </p>
              </div>
          </MaxWidthWrapper>
        </main>
      </HeroHighlight>
    </div>
  );
};
