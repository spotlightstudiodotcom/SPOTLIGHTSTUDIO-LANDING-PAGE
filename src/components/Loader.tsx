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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 500); 
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg lg:text-2xl font-bold p-2 font-Integral leading-normal tracking-normal">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
            className="inline-block"
          >
            S
          </motion.span>
          <span className="sr-only">SPOTLIGHTSTUDIO.</span>
          <AnimatedText text="POTLIGHTSTUDIO." />
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;
