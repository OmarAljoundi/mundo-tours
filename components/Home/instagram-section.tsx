'use client'
import { ArrowUpLeft, ArrowUpRight, Instagram } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { motion, useInView } from 'framer-motion'
import ImInstagram from '../svg/ImInstagram'
import { Card } from '@nextui-org/react'

export default function InstagramSection() {
  return (
    <div className="px-6 pb-6 bg-white  flex flex-col justify-center items-center" dir="rtl">
      <motion.h2
        className="text-2xl md:text-7xl  text-black text-center mb-8 font-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        لرحلات التي تشمل الطيران ، زورو صفحتنا على الانستجرام
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mx-auto max-w-5xl w-full">
        <InstagramBlock title="سلطة عمان" link="https://www.instagram.com/mundo.oman/" index={1} />
        <InstagramBlock title="السعودية" link="https://www.instagram.com/mundo.saudi/" index={2} />
      </div>
    </div>
  )
}

function InstagramBlock({ title, link, index }: { title: string; link: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
      className="w-full md:w-64"
    >
      <Card className="h-full bg-white/10 backdrop-blur-md border-none shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-6 flex flex-col items-center text-center h-full">
          <motion.div
            className="flex-grow flex items-center justify-center text-white"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 + index * 0.2 }}
          >
            <ImInstagram />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            className="mt-4"
          >
            <Button
              asChild
              variant="secondary"
              className="bg-white border text-secondary hover:bg-primary hover:text-white transition-all duration-300 text-lg font-semibold rounded-full px-6 py-2"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {title}
                <ArrowUpLeft className="w-5 h-5 mr-2 " />
              </a>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
