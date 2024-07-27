import { motion } from 'framer-motion';

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

export const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-2">
      <div className="animate-fadeIn">
        <p className="font-Integral text-2xl font-bold leading-normal tracking-normal lg:text-7xl">
          <span className="sr-only">SPOTLIGHTSTUDIO.</span>
          <AnimatedText text="SPOTLIGHTSTUDIO." />
        </p>
      </div>
      <p className="text-center text-xs font-bold leading-normal tracking-normal lg:text-lg mt-2">
        Um estúdio digital que cria sites que não só brilham, mas também performam.
      </p>
    </div>
  );
};

export default Loader;
