'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Carousel, Card } from '@/components/apple-cards-carousel';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface CardItem {
  title: string;
  url: string;
  category: string;
  description: string;
  image: SanityImage;
  imageAlt?: string;
  mobile: SanityImage;
}

interface ContentProps {
  item: CardItem;
}

const Content: React.FC<ContentProps> = ({ item }) => {
  return (
    <div className="mb-4 rounded-2xl bg-white p-8 md:p-14 dark:bg-neutral-800">
      <p className="font-sans mx-auto max-w-prose text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
        <span className="font-bold text-neutral-700 dark:text-white">{item.title}</span>{' '}
        {item.description}
      </p>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row lg:gap-8">
        <Image
          src={urlFor(item.mobile).url()}
          alt={item.imageAlt || `Mobile view of ${item.title}`}
          height={500}
          width={500}
          className="mx-auto mt-10 h-full w-full rounded-2xl object-contain md:h-1/2 md:w-1/2"
        />
        <Image
          src={urlFor(item.image).url()}
          alt={item.imageAlt || `Desktop view of ${item.title}`}
          height={500}
          width={500}
          className="mx-auto mt-10 h-full w-full rounded-2xl object-contain md:h-1/2 md:w-1/2"
        />
      </div>
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const query = `*[_type == "card"] {
        title,
        url,
        category,
        description,
        image,
        imageAlt,
        mobile
      }`;
      
      const result = await client.fetch<CardItem[]>(query);
      setCards(result);
    };

    fetchCards();
  }, []);

  const cardComponents = cards.map((card, index) => (
    <Card
      key={card.image.asset._ref}
      card={{
        ...card,
        image: urlFor(card.image).url(),
        mobile: urlFor(card.mobile).url(),
        imageAlt: card.imageAlt || `View of ${card.title}`,
        content: <Content item={card} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="h-full w-full">
      <Carousel items={cardComponents} />
    </div>
  );
}