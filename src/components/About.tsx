// Somos uma pequena equipe de pessoas curiosas e criativas que
// cria trabalhos dos quais nos orgulhamos, para pessoas e marcas nas quais acreditamos.
// Com muita colaboração e vontade colocada em cada projeto, identificamos as habilidades necessárias e reunimos as
// melhores pessoas para criar algo verdadeiramente extraordinário. Combinando estratégia, branding, design e
// desenvolvimento para construímos experiências digitais que transformam a maneira como as pessoas se conectam e
// interagem com as marcas.

import { HorizontalScrollCarousel } from '@/app/ui/HorinzontalCarousel';
import MaxWidthWrapper from './MaxWidth';

export const About = () => {
  return (
    <section className="">
      <MaxWidthWrapper className="pt-10">
        <div className="flex h-full w-full flex-col items-start justify-start">
          <h1 className="font-Integral text-2xl font-bold text-white md:text-7xl">Sobre</h1>
          <p className="my-4 max-w-prose text-xs text-white/80 lg:my-10 lg:text-lg">
            Somos uma pequena equipe de pessoas curiosas e criativas que cria trabalhos dos quais
            nos orgulhamos, para pessoas e marcas nas quais acreditamos. Com muita colaboração e
            vontade colocada em cada projeto, identificamos as habilidades necessárias e reunimos as
            melhores pessoas para criar algo verdadeiramente extraordinário. Combinando estratégia,
            branding, design e desenvolvimento para construímos experiências digitais que
            transformam a maneira como as pessoas se conectam e interagem com as marcas.
          </p>
        </div>
        <HorizontalScrollCarousel />
      </MaxWidthWrapper>
    </section>
  );
};
