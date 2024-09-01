'use client'
import { Instagram } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { motion, useInView } from 'framer-motion'

export default function InstagramSection() {
  return (
    <div className="p-6 bg-[#223d49] ">
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6  mx-auto max-w-5xl">
        <InstagramBlock title="تابعونا على الانستغرام ( سلطنة عمان )" link="https://www.instagram.com/mundo.oman/" index={1} />
        <InstagramBlock title="تابعونا على الانستغرام ( السعوديــــة )" link="https://www.instagram.com/mundo.saudi/" index={2} />
      </div>
    </div>
  )
}

function InstagramBlock({ title, link, index }: { title: string; link: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    >
      <div className="p-6 flex flex-col items-center text-center h-full">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
          className="text-2xl font-bold mb-4 text-[#223d49]"
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex-grow flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 + index * 0.2 }}
        >
          <Instagram className="w-24 h-24 text-[#ff2a00] animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
        >
          <Button asChild className="mt-4 bg-[#ff2a00] hover:bg-[#223d49] transition-colors duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              تابعنا على انستغرام
              <Instagram className="mr-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
