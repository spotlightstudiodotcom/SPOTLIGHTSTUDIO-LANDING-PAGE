import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const HoverImageLinks = () => {
  return (
    <section className="pb-10 lg:py-16">
      <div className="">
        <CustomP
          heading="IDENTIDADE VISUAL"
          subheading="Criamos identidades visuais memoráveis."
          imgSrc="/LOGO.png"
        />
        <CustomP
          heading="WEB DESIGN"
          subheading="Transformamos ideias em interfaces."
          imgSrc="/LOGO.png"
        />
        <CustomP
          heading="Naming"
          subheading="Transformamos conceitos em nomes."
          imgSrc="/LOGO.png"
        />
        <CustomP
          heading="Desenvolvimento"
          subheading="Desenvolvemos soluções digitais."
          imgSrc="/LOGO.png"
        />
        <CustomP
          heading="SEO"
          subheading="Otimizamos para resultados de busca."
          imgSrc="/LOGO.png"
        />
      </div>
    </section>
  );
};

interface CustomPProps {
  heading: string;
  imgSrc: string;
  subheading: string;
}

const CustomP = ({ heading, imgSrc, subheading }: CustomPProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.p
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <h1 className="relative z-10 block font-Integral text-2xl font-bold text-neutral-50 md:text-7xl">
          {heading}
        </h1>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className="relative z-10 p-4"
      ></motion.div>
    </motion.p>
  );
};
