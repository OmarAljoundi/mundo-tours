"use client";

import { motion } from "framer-motion";
import { Section } from "./common";
import { Building2 } from "lucide-react";
import { content } from "./content";
import BlurImage from "@/components/shared/blur-image";

export default function AboutMundo() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-primary">
            {content.aboutUs.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-primary">
            {content.aboutUs.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <BlurImage
                  src="/images/modern-travel-agency-office-interior-with-world-ma-v2.jpg"
                  alt="مكتب موندو للسياحة"
                  width={1000}
                  height={1000}
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>

              <motion.div
                className="absolute  right-0 -top-8 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-border/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary font-english">
                      2017
                    </div>
                    <div className="text-sm text-muted-foreground font-primary">
                      سنة التأسيس
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-base md:text-xl leading-relaxed text-foreground/90 font-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {content.aboutUs.mainText}
              </motion.p>

              <motion.p
                className="text-base md:text-xl leading-relaxed text-foreground/90 font-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {content.aboutUs.sloganText}
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {content.aboutUs.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted/80 transition-colors duration-300"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-primary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
