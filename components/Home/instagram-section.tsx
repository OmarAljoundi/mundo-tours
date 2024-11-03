'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function InstagramSection() {
  return (
    <div className="px-6 pb-6 bg-white flex flex-col justify-center items-center" dir="rtl">
      <motion.h2
        className="text-5xl md:text-7xl text-black text-center mb-8 font-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        لرحلات التي تشمل الطيران ، زورو صفحتنا على الانستجرام
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mx-auto max-w-5xl w-full">
        <InstagramBlock title="سلطة عمان" country={'OMAN'} link="https://www.instagram.com/mundo.oman/" index={1} />
        <InstagramBlock title="السعودية" country={'KSA'} link="https://www.instagram.com/mundo.saudi/" index={2} />
      </div>
    </div>
  )
}

function InstagramBlock({ title, link, index, country }: { title: string; link: string; index: number; country: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: index * 0.2 + 0.3 } },
  }

  const bannerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '16rem', opacity: 1, transition: { duration: 0.5, delay: index * 0.2 + 0.5 } },
  }

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover="hover"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
      tabIndex={0}
      role="link"
      aria-label={`Visit Instagram page for ${title}`}
    >
      <div className="relative flex items-center h-16">
        <motion.div
          className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-10"
          variants={circleVariants}
        >
          <motion.svg
            className="absolute inset-3 w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M17.5 6.51L17.51 6.49889" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>

        <motion.div
          className="ml-8 h-14 bg-white rounded-r-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] overflow-hidden relative"
          variants={bannerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-20"></div>
          <motion.div
            className="absolute inset-0 flex items-center justify-start pr-6"
            dir="rtl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            <span className="text-black text-xl font-bold font-primary">
              {title}
              {'  '} {country}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
