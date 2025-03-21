"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 ${className} px-1.5`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

export function IconParagraph({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start space-x-4 rtl:space-x-reverse">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <p className="font-primary">{children}</p>
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white text-secondary p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105
       hover:bg-secondary 
      hover:text-white hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4 text-primary ">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-center font-primary">
        {title}
      </h3>
      <p className="text-center text-sm font-primary">{description}</p>
    </motion.div>
  );
}
