import { motion } from "framer-motion";

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