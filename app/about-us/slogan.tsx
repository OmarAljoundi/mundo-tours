'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from './common'
import { content } from './content'

export default function Slogan() {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      ref.current?.classList.add('in-view')
    }
  }, [isInView])

  return (
    <Section className="bg-gray-100 text-accent-foreground">
      <motion.h2
        className="text-3xl font-bold mb-4 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.slogan.title}
      </motion.h2>
      <motion.p
        className="text-5xl font-semibold mb-4 text-center animate-wave text-secondary font-secondary"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {content.slogan.mainSlogan}
      </motion.p>
      <motion.p
        ref={ref}
        className="mt-4 max-w-2xl mx-auto text-center animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {content.slogan.description}
      </motion.p>
    </Section>
  )
}
