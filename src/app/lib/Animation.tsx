import { motion } from "framer-motion";
import { cn } from "./utils";
type TextSlideInFromBottomProps = {
    className?: string;
    text : string;
};

export const TextSlideInFromBottom = ({text,className}: TextSlideInFromBottomProps) => {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" }},
    };

    return (
        <div className="overflow-hidden">
            <motion.div variants={textVariants} initial="hidden" animate="visible" className="flex items-center justify-start gap-3 lg:gap-10 overflow-hidden">{text}</motion.div>
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