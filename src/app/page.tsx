"use client";
import { useEffect,useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGridSecondDemo } from "@/components/BentoGrid";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import Loader from "@/components/Loader"; 
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const transitionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const easing = [0.5, 0, 0.5, 1];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 } }
            transition={{ duration: 0.5, ease: easing }}
            exit={{  
              y: -1000, 
              transition: { duration: 1, ease: easing }
            }}
          >
            <Loader />
          </motion.div>
        ) : (
          <SmoothScrolling key="smooth-scrolling">
            <motion.div
              key="content"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={transitionVariants}
              transition={{ duration: 1.5, ease: easing }}
            >
              <Navbar />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easing, delay: 0.2 }}
              >
              <Hero />
              </motion.div>
              {/* <BentoGridSecondDemo /> */}
              {/* <Services /> */}
              <Contact />
              <Footer />
            </motion.div>
          </SmoothScrolling>
        )}
      </AnimatePresence>
  );
}
