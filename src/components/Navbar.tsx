"use client";
import React, { useContext, useEffect, useState } from "react";
import { cn } from "../app/lib/utils";
import MaxWidthWrapper from "./MaxWidth";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeContext } from "@/app/context/Context";

export const Navbar = ({ className }: { className?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const AnimatedText = ({ text }: { text: string }) => {
    return (
      <span className="inline-flex">
        {text.split("").map((char, index) => (
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
        "w-full py-4 text-white fixed top-0 z-30 bg-transparent",
        theme ? "opacity-100 transition-opacity" : "opacity-0 transition-opacity -z-20",
      )}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <Link href="/" className="text-lg lg:text-2xl font-bold p-2 font-Integral leading-normal tracking-normal">
              <span className="sr-only">SPOTLIGHTSTUDIO.</span>
              <AnimatedText text="SPOTLIGHTSTUDIO." />
            </Link>
          </motion.div>
          <HamburgerIcon isOpen={menuOpen} setMenuOpen={() => setMenuOpen(!menuOpen)} />
          <ul
            className={cn(
              "flex items-center gap-4 [&>li]:cursor-pointer",
              "lg:flex",
              menuOpen ? "flex flex-col justify-center items-center fixed min-h-screen top-0 left-0 w-full bg-black lg:bg-transparent" : "hidden"
            )}
          >
            <li
              className={cn(
                "text-base font-medium text-neutral-300 hover:text-white",
                active === "home" && "text-white"
              )}
              onClick={() => setActive("home")}
            >
              Home
            </li>
            <li
              className={cn(
                "text-base font-medium text-neutral-300 hover:text-white",
                active === "about" && "text-white"
              )}
              onClick={() => setActive("about")}
            >
              About
            </li>
            <li
              className={cn(
                "text-base font-medium text-neutral-300 hover:text-white",
                active === "services" && "text-white"
              )}
              onClick={() => setActive("services")}
            >
              Services
            </li>
            <li
              className={cn(
                "text-base font-medium text-neutral-300 hover:text-white",
                active === "contact" && "text-white"
              )}
              onClick={() => setActive("contact")}
            >
              Contact
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
}
const HamburgerIcon = ({ isOpen,setMenuOpen }: Props) => (
  <motion.div
    className="cursor-pointer lg:hidden z-10"
    onClick={() => setMenuOpen(!isOpen)}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
  >
    <motion.span
      className="block w-8 h-0.5 bg-white mb-1"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 6 },
      }}
    />
    <motion.span
      className="block w-8 h-0.5 bg-white mb-1"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
    />
    <motion.span
      className="block w-8 h-0.5 bg-white"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -6 },
      }}
    />
  </motion.div>
);
