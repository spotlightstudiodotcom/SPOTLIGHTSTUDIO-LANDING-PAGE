import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { DirectionAwareHover } from "./direction-aware-hover";
import Image from "next/image";


export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex flex-col h-screen items-start justify-center overflow-hidden ">
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
      <div className="w-[450px] lg:w-[500px] h-[54vh]">
          <p className="text-base lg:text-lg text-white">
            {card.title}
          </p>
          <Image src={card.url} alt={card.title} width={600} height={600} className="w-full h-full object-cover rounded-2xl" />
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
    url: "/SEO.webp",
    title: "Studio Spotlight",
    id: 1,
  },
  {
    url: "/SEO.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/SEO.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/SEO.webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/SEO.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/SEO.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/SEO.webp",
    title: "Title 7",
    id: 7,
  },
];