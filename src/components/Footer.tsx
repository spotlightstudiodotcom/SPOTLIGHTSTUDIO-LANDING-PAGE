'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidth';
import { FlipLink } from '@/app/lib/Animation';
import { ThemeContext } from '@/app/context/Context';
import { cn } from '@/app/lib/utils';
import { motion, useInView } from 'framer-motion';
import Ripple from '@/app/ui/Ripple';
import BrazilianTime from '@/app/ui/Time';

export const Footer = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [wasInView, setWasInView] = useState(false);

  useEffect(() => {
    if (isInView && !wasInView) {
      toggleTheme();
      setWasInView(true);
    } else if (!isInView && wasInView) {
      toggleTheme();
      setWasInView(false);
    }
  }, [isInView, wasInView, toggleTheme]);

  return (
    <motion.footer ref={ref} className="bg-white flex flex-col items-center justify-between min-h-screen">
      <MaxWidthWrapper className="w-full py-4">
        <ul className="flex w-full items-start justify-between gap-8 font-Integral text-xs text-black lg:text-lg">
          <li>
            <Link href="/">
              <FlipLink>Instagram</FlipLink>
            </Link>
          </li>
          <li>
            <Link href="/">
              <FlipLink>Twitter</FlipLink>
            </Link>
          </li>
        </ul>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex-grow flex items-center overflow-visible justify-center w-full text-black">
        <div className="relative text-center">
          <Ripple />
          <BrazilianTime />
          <p className="relative w-full text-nowrap font-Integral text-2xl lg:text-7xl xl:text-[7rem]">
            © Spotlight Studio.
          </p>
          <p className="text-lg font-bold lg:text-lg">Todos os direitos reservados.</p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="w-full py-4">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between font-Integral text-xs text-black lg:gap-8 lg:text-lg">
            <li>
              <Link href="/">
                <FlipLink>Inicio</FlipLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <FlipLink>sobre</FlipLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <FlipLink>Atividades</FlipLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <FlipLink>Contato</FlipLink>
              </Link>
            </li>
          </ul>
        </nav>
      </MaxWidthWrapper>
    </motion.footer>
  );
};

export default Footer;