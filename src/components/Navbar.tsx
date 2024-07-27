'use client';
import React, { useContext, useState } from 'react';
import { cn } from '../app/lib/utils';
import MaxWidthWrapper from './MaxWidth';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeContext } from '@/app/context/Context';

const setMenuOpen = (isOpen: boolean) => {
  setMenuOpen(!isOpen);
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { theme } = useContext(ThemeContext);
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const AnimatedText = ({ text }: { text: string }) => {
    return (
      <span className="inline-flex">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-[1100] w-full bg-transparent py-4 text-white',
        theme ? 'opacity-100 transition-opacity' : '-z-20 opacity-0 transition-opacity',
      )}
    >
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-between">
          <div className="animate-fadeIn">
            <Link
              href="/"
              className="p-2 font-Integral text-lg font-bold leading-normal tracking-normal lg:text-2xl"
            >
              <span className="sr-only">SPOTLIGHTSTUDIO.</span>
              <AnimatedText text="SPOTLIGHTSTUDIO." />
              {/* <GradualSpacing text="SPOTLIGHTSTUDIO." /> */}
            </Link>
          </div>
          <HamburgerIcon isOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <ul
            className={cn(
              'flex items-center gap-4 [&>li]:cursor-pointer',
              'lg:flex',
              menuOpen
                ? 'fixed left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center bg-black lg:bg-transparent'
                : 'hidden',
            )}
          >
            <li
              className={cn(
                'text-xs font-medium text-white/80 hover:text-white lg:text-lg',
                active === 'inicio' && 'text-white',
              )}
              onClick={() => setActive('inicio')}
            >
              Inicio
            </li>
            <li
              className={cn(
                'text-xs font-medium text-white/80 hover:text-white lg:text-lg',
                active === 'sobre' && 'text-white',
              )}
              onClick={() => setActive('sobre')}
            >
              Sobre
            </li>
            <li
              className={cn(
                'text-xs font-medium text-white/80 hover:text-white lg:text-lg',
                active === 'atividades' && 'text-white',
              )}
              onClick={() => setActive('atividades')}
            >
              Atividades
            </li>
            <li
              className={cn(
                'text-xs font-medium text-white/80 hover:text-white lg:text-lg',
                active === 'contato' && 'text-white',
              )}
              onClick={() => setActive('contato')}
            >
              Contato
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </nav>
    // </header>
  );
};

type Props = {
  isOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
};
const HamburgerIcon = ({ isOpen, setMenuOpen }: Props) => (
  <motion.div
    className="z-10 cursor-pointer lg:hidden"
    onClick={() => setMenuOpen(!isOpen)}
    initial="closed"
    animate={isOpen ? 'open' : 'closed'}
  >
    <motion.span
      className="mb-1 block h-0.5 w-8 bg-white"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 6 },
      }}
    />
    <motion.span
      className="mb-1 block h-0.5 w-8 bg-white"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
    />
    <motion.span
      className="block h-0.5 w-8 bg-white"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -6 },
      }}
    />
  </motion.div>
);
