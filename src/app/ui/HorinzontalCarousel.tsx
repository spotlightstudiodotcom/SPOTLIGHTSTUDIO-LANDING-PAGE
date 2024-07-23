import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex  flex-col h-screen items-start justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
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
    title: "Title 1",
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