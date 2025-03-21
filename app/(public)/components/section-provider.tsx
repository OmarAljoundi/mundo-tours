"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SectionProvider: React.FC<{
  children: React.ReactNode;
  title?: string;
  sub?: string;
  className?: string;
}> = ({ children, title, sub, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate={controls}
      className={cn("my-2 lg:my-5 ", className)}
    >
      {title && (
        <div className="grid items-center justify-items-center">
          <h1 className="text-7xl font-secondary ">{title}</h1>
          {sub && <h3 className="font-primary font-bold text-4xl">{sub}</h3>}
        </div>
      )}

      {children}
    </motion.section>
  );
};

export default SectionProvider;
