'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
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

  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer ref={ref} className="bg-white">
      <MaxWidthWrapper
        className={cn(
          'flex h-[calc(100vh-20px)] flex-col items-center justify-center overflow-hidden text-black',
        )}
      >
        <ul
          className={cn(
            'flex w-full items-center justify-between gap-8 font-Integral text-xs text-black lg:text-lg',
          )}
        >
          <li>
            <a href="https://www.instagram.com/sptlghtstudio/" target="_blank" rel="noopener noreferrer">
              <FlipLink>Instagram</FlipLink>
            </a>
          </li>
          <li>
            <a href="https://x.com/std_spotlight" target="_blank" rel="noopener noreferrer">
              <FlipLink>Twitter</FlipLink>
            </a>
          </li>
        </ul>
        <div className="relative grid h-full place-content-center">
          <Ripple />
          <BrazilianTime />
          <p className="relative w-full text-nowrap text-center font-Integral text-2xl lg:mb-4 lg:text-7xl lg:leading-tight xl:text-[7rem]">
            © Spotlight Studio.
          </p>
          <p className="text-center text-lg font-bold lg:text-lg">Todos os direitos reservados.</p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <nav className="flex w-full items-center justify-between">
          <ul
            className={cn(
              'flex w-full items-center justify-between font-Integral text-xs text-black lg:gap-8 lg:text-lg',
            )}
          >
            <li>
              <a href="#home" onClick={() => handleLinkClick('home')}>
                <FlipLink>Inicio</FlipLink>
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleLinkClick('about')}>
                <FlipLink>Sobre</FlipLink>
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => handleLinkClick('services')}>
                <FlipLink>Atividades</FlipLink>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleLinkClick('contact')}>
                <FlipLink>Contato</FlipLink>
              </a>
            </li>
          </ul>
        </nav>
      </MaxWidthWrapper>
    </motion.footer>
  );
};

export default Footer;