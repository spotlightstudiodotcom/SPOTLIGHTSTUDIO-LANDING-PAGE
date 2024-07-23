"use client";
import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidth";
import { FlipLink } from "@/app/lib/Animation";
import { ThemeContext } from "@/app/context/Context";
import { cn } from "@/app/lib/utils";
import { motion, useInView } from "framer-motion";
import Ripple from '@/app/ui/Ripple';

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
    <motion.footer
      ref={ref}
      className='bg-white relative'
    >
      <Ripple />
      <MaxWidthWrapper className={cn("flex flex-col items-center h-[calc(100vh-30px)] justify-center text-black")}>
        <ul className={cn("flex items-center lg:text-base text-sm justify-between gap-8 w-full font-Integral text-black")}>
              <li><Link href="/"><FlipLink>Instagram</FlipLink></Link></li>
              {/* <li><Link href="/"><FlipLink>About</FlipLink></Link></li>
              <li><Link href="/"><FlipLink>Services</FlipLink></Link></li> */}
              <li><Link href="/"><FlipLink>Twitter</FlipLink></Link></li>
        </ul>
        <div className='h-full grid place-content-center'>
          <p className="font-Integral text-center text-4xl lg:text-[14vh] lg:leading-tight w-full">© Spotlight Studio.</p>
          <p className="font-Integral text-center">Todos os direitos reservados.</p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full">
          <ul className={cn("flex lg:text-base text-sm items-center justify-between gap-8 w-full font-Integral text-black")}>
            <li><Link href="/"><FlipLink>Home</FlipLink></Link></li>
            <li><Link href="/"><FlipLink>About</FlipLink></Link></li>
            <li><Link href="/"><FlipLink>Services</FlipLink></Link></li>
            <li><Link href="/"><FlipLink>Contact</FlipLink></Link></li>
          </ul>
        </nav>
      </MaxWidthWrapper>
    </motion.footer>
  );
};

export default Footer;
