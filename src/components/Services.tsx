import { TextGenerateEffect } from '@/app/ui/text-generate-effect';
import MaxWidthWrapper from './MaxWidth';
import { HoverImageLinks } from '@/app/ui/HoverAnimations';

export const Services = () => {
  const words =
    'No Spotlight Studio, transformamos suas ideias em realidade digital com soluções personalizadas e inovadoras. Nossa equipe especializada oferece:';
  return (
    <section id="services">
      <MaxWidthWrapper className="lg:pt-10">
        <h2 className="mb-4 font-Integral text-2xl font-bold text-white md:text-7xl">
          O que oferecemos
        </h2>
        <TextGenerateEffect
          className="mb-8 max-w-prose text-base font-normal text-white lg:text-lg"
          words={words}
        />
        <HoverImageLinks />
      </MaxWidthWrapper>
    </section>
  );
};
