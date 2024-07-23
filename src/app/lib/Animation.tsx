import { AnimatePresence, motion, useInView } from 'framer-motion';
import { cn } from "./utils";
import { useRef } from 'react'; 


export function GradualSpacing({ text}: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex  justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
           
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
  children: string;
  className?: string;
}
export const FlipLink = ({ children, className }: FlipLinkProps) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      className={cn(`relative block overflow-hidden`, className)}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};