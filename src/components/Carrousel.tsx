'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/apple-cards-carousel';

const Content = () => {
  return (
    <>
      {DATA.map((item, index) => {
        return (
          <div
            key={item.title + index}
            className="mb-4 rounded-2xl bg-white p-8 md:p-14 dark:bg-neutral-800"
          >
            <p className="font-sans mx-auto max-w-prose text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
              <span className="font-bold text-neutral-700 dark:text-white">{item.title}</span>{' '}
              {item.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row lg:gap-8">
              <Image
                src={item.mobile}
                alt={item.imageALT}
                height="500"
                width="500"
                className="mx-auto mt-10 h-full w-full rounded-2xl object-contain md:h-1/2 md:w-1/2"
              />
              <Image
                src={item.image}
                alt={item.imageALT}
                height="500"
                width="500"
                className="mx-auto mt-10 h-full w-full rounded-2xl object-contain md:h-1/2 md:w-1/2"
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
    title: 'Spotlight Studio',
    url: 'https://spotlightstudio.com/',
    category: 'Landing Page',
    description:
      'Um estúdio digital especializado em criação de sites, marketing digital, SEO, design e branding. Transformamos sua presença online com soluções personalizadas.',
    image: '/projetos/spotlight/landing.png',
    imageALT: 'Spotlight Studio',
    mobile: '/projetos/spotlight/responsive-spotlight.png',
    content: <Content />,
  },
];

export function AppleCardsCarouselDemo() {
  const cards = DATA.map((card, index) => <Card key={card.image} card={card} index={index} />);

  return (
    <div className="h-full w-full">
      <Carousel items={cards} />
    </div>
  );
}
