"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "./common";
import { Building2 } from "lucide-react";
import { content } from "./content";
import BlurImage from "@/components/shared/blur-image";

export default function AboutMundo() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
          contentObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
      observers.push(headerObserver);
    }
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
      observers.push(contentObserver);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-20 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-primary">
            {content.aboutUs.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-primary">
            {content.aboutUs.subtitle}
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
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

              <div
                className={`absolute right-0 -top-8 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-border/50 transition-all duration-700 delay-500 hover:scale-105 hover:rotate-2 ${
                  contentVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
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
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <p
                className={`text-base md:text-xl leading-relaxed text-foreground/90 font-primary transition-all duration-1000 delay-[400ms] ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                {content.aboutUs.mainText}
              </p>
              <p
                className={`text-base md:text-xl leading-relaxed text-foreground/90 font-primary transition-all duration-1000 delay-[600ms] ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                {content.aboutUs.sloganText}
              </p>
            </div>

            <div
              className={`grid grid-cols-2 gap-6 pt-8 transition-all duration-1000 delay-[800ms] ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {content.aboutUs.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted/80 transition-colors duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-primary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
