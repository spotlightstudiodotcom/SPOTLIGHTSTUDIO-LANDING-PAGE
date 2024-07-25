import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-start justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 border-t border-t-white pt-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <>
      <div className="h-[54vh] w-[280px] lg:w-[500px]">
        <p className="mb-4 text-xs text-white lg:text-lg">{card.title}</p>
        <Image
          src={card.url}
          alt={card.title}
          width={600}
          height={600}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: 'https://images.unsplash.com/photo-1721048149858-139c52892fc9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Studio Spotlight',
    id: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1721251326644-05457660fc4e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1720887237257-3d1ad1a06c8a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 3,
  },
  {
    url: 'https://images.unsplash.com/photo-1721333671137-8f77de74756e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 4,
  },
  {
    url: 'https://images.unsplash.com/photo-1721224026389-bd0f4fd04eea?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 5,
  },
  {
    url: 'https://images.unsplash.com/photo-1716322603195-2fbb04f132cf?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 6,
  },
  {
    url: 'https://images.unsplash.com/photo-1712738603891-3f504a0d2658?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Em progresso',
    id: 7,
  },
];
