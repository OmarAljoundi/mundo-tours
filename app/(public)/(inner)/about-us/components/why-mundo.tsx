"use client";

import { useEffect, useRef, useState } from "react";
import { Section, FeatureCard } from "./common";
import { content } from "./content";

function AnimatedFeatureCard({
  feature,
  index,
}: {
  feature: any;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <FeatureCard
        icon={<feature.icon className="w-8 h-8 animate-float" />}
        title={feature.title}
        description={feature.description}
      />
    </div>
  );
}

export default function WhyMondo() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-muted/50 text-primary-foreground">
      <h2
        ref={headerRef}
        className={`text-3xl font-bold mb-8 text-center text-primary font-primary transition-all duration-700 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        {content.advantages.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-primary">
        {content.advantages.features.map((feature, index) => (
          <AnimatedFeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </Section>
  );
}
