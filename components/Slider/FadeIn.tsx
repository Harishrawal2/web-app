"use client"
// framer motion
import { Variants, motion, useAnimation, useInView } from "framer-motion";

// react
import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay: number;
  direction: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  padding?: boolean;
}
const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay,
  direction,
  fullWidth = false,
  padding = false,
}) => {
  const ref = useRef(null);


  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : "w-auto"
        } ${padding ? "px-10" : "px-0"}  flex items-center justify-center`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1.25,
          type: "tween",
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className="w-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
