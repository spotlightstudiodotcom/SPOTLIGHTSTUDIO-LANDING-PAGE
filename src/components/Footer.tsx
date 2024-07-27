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
            <Link href="/">
              <FlipLink>Instagram</FlipLink>
            </Link>
          </li>
          {/* <li><Link href="/"><FlipLink>About</FlipLink></Link></li>
              <li><Link href="/"><FlipLink>Services</FlipLink></Link></li> */}
          <li>
            <Link href="/">
              <FlipLink>Twitter</FlipLink>
            </Link>
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
