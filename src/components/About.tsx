// Somos uma pequena equipe de pessoas curiosas e criativas que 
// cria trabalhos dos quais nos orgulhamos, para pessoas e marcas nas quais acreditamos.
// Com muita colaboração e vontade colocada em cada projeto, identificamos as habilidades necessárias e reunimos as 
// melhores pessoas para criar algo verdadeiramente extraordinário. Combinando estratégia, branding, design e 
// desenvolvimento para construímos experiências digitais que transformam a maneira como as pessoas se conectam e 
// interagem com as marcas.

import { HorizontalScrollCarousel } from "@/app/ui/HorinzontalCarousel"
import MaxWidthWrapper from "./MaxWidth"

export const About = () => {
    return (
        <section className="">
            <MaxWidthWrapper className="pt-10">
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <h1 className="text-3xl font-Integral md:text-7xl font-bold text-white">
                        Sobre
                    </h1>
                    <p className="text-white/80 text-base max-w-prose lg:text-lg my-4 lg:my-10">
                        Somos uma pequena equipe de pessoas curiosas e criativas que 
                        cria trabalhos dos quais nos orgulhamos, para pessoas e marcas nas quais acreditamos.
                        Com muita colaboração e vontade colocada em cada projeto, identificamos as habilidades necessárias e reunimos as 
                        melhores pessoas para criar algo verdadeiramente extraordinário. Combinando estratégia, branding, design e 
                        desenvolvimento para construímos experiências digitais que transformam a maneira como as pessoas se conectam e 
                        interagem com as marcas.
                    </p>
                </div>
                <HorizontalScrollCarousel  />
            </MaxWidthWrapper>
        </section>
    )
}