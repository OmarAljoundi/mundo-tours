"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconParagraph, Section } from "./common";
import { content } from "./content";

export default function AboutUs() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      ref.current?.classList.add("in-view");
    }
  }, [isInView]);

  return (
    <Section>
      <motion.h1
        className="text-4xl font-bold mb-8 text-center animate-pulse-scale text-primary font-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.aboutUs.title}
      </motion.h1>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up "
      >
        {content.aboutUs.paragraphs.map((paragraph, index) => (
          <div key={index} className="space-y-4 font-primary">
            <IconParagraph
              icon={
                <paragraph.icon className="w-6 h-6 text-primary animate-float" />
              }
            >
              <span className="font-primary">{paragraph.text}</span>
            </IconParagraph>
          </div>
        ))}
      </div>
    </Section>
  );
}
