"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/apple-cards-carousel";

const Content = () => {
  return (
    <>
      {DATA.map((item, index) => {
        return (
          <div
            key={item.title + index}
            className="bg-white dark:bg-neutral-800 p-8 md:p-14 rounded-2xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-prose mx-auto">
              <span className="font-bold text-neutral-700 dark:text-white">
                {item.title}
              </span>{" "}
              {item.description}
            </p>
            <div className="flex items-center flex-col md:flex-row justify-center gap-2 lg:gap-8">
            <Image
              src={item.mobile}
              alt={item.imageALT}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
            />
            <Image
              src={item.image}
              alt={item.imageALT}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
            />
            </div>
          </div>
        );
      })}
    </>
  );
};

const DATA = [
  {
    title : "Spotlight Studio",
    url : "https://spotlightstudio.com/",
    category : "Landing Page",
    description : "Um estúdio digital especializado em criação de sites, marketing digital, SEO, design e branding. Transformamos sua presença online com soluções personalizadas.",
    image : "/projetos/spotlight/landing.png",
    imageALT: "Spotlight Studio",
    mobile : "/projetos/spotlight/responsive-spotlight.png",
    content : <Content />,
  },
]

export function AppleCardsCarouselDemo() {
  const cards = DATA.map((card, index) => (
    <Card key={card.image} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full font-Open_Sans">
      {/* <h2 className="text-xs lg:text-lg text-white">
        Nos gostamos de mostra nossos projetos aqui.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}


