"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "./common";
import { content } from "./content";

function ServiceCard({ service, index }: { service: any; index: number }) {
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
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-cyan-200 h-full">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-200 transition-all duration-300">
              <service.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-secondary transition-colors duration-300 font-primary">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm font-primary">
              {service.description}
            </p>
            <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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
    <Section className="bg-gradient-to-br from-slate-50 via-white to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-secondary bg-clip-text text-transparent font-primary">
            {content.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-primary">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.services.items.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
