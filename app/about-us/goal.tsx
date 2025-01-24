'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from './common'
import { content } from './content'

export default function Goal() {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      ref.current?.classList?.add('in-view')
    }
  }, [isInView])

  return (
    <Section>
      <motion.h2
        className="text-3xl font-bold mb-4 text-center animate-pulse-scale text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.goal.title}
      </motion.h2>
      <motion.p
        ref={ref}
        className="max-w-2xl mx-auto text-center animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {content.goal.description}
      </motion.p>
    </Section>
  )
}
