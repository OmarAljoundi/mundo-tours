'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, FeatureCard } from './common'
import { content } from './content'

export default function WhyMondo() {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      ref.current?.classList.add('in-view')
    }
  }, [isInView])

  return (
    <Section className="bg-primary/10 text-primary-foreground">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-primary animate-pulse-scale"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.whyMundo.title}
      </motion.h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        {content.whyMundo.features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<feature.icon className="w-8 h-8 animate-float" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  )
}
