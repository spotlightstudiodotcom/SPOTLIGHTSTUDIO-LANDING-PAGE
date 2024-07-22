import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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

export const Loader = () => {
 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        
      >
        <p className="text-4xl lg:text-7xl font-bold p-2 font-Integral leading-normal tracking-normal">
          <span className="sr-only">SPOTLIGHTSTUDIO.</span>
          <AnimatedText text="SPOTLIGHTSTUDIO." />
        </p>
      </motion.div>
      <p className="text-lg lg:text-2xl font-bold p-2 leading-normal tracking-normal">Um estúdio digital que cria sites que não só brilham, mas também performam.</p>
    </div>
  );
};

export default Loader;
