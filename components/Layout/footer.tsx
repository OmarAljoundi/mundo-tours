'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

const companyName = 'موندو للسياحة'
const mainParagraph = `
موندو للسياحة هي واحدة من أكبر الشركات المتخصصة بالسفر والسياحة التي تعمل تحت شعار ( انت اختار ) نقدم مئات البرامج 
أسبوعيا و يوميا الكثر من 50 دولة حول العالم مع تقديم خيار االختيار للمسافر لمدة و تاريخ و طريقة الرحلة. 
`

const dammamTitle = 'عنوان فرع الدمام'
const dammamLines = ['حي المنار - شارع ابو بكر الصديق', 'مبني الناصر للأعمال', 'الطابق الرابع مكتب 402']
const dammamPhone = '920031910'
const dammamMapUrl = 'https://maps.app.goo.gl/rHjqMPCcoSSbCoUh6?g_st=ic'

const muscatTitle = 'عنوان فرع مسقط'
const muscatLines = ['العذيبة - شارع 18 نوفمبر', 'بناية بيت الموسيقي', 'الطابق الرابع مكتب 402']
const muscatMapUrl = 'https://g.co/kgs/NqucyEZ'
const muscatPhone = '79667679'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <motion.footer
      // Animation only starts when in view
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      dir="rtl"
      className="bg-gray-100 pt-8 pb-6 font-primary"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <motion.div className="mb-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Image
              src="/imgs/mundo_logo.png"
              alt={companyName}
              width={200}
              height={50}
              sizes="(max-width: 640px) 256px, 256px"
              className="h-[110px] w-[200px]"
            />
          </motion.div>

          <p className="text-right text-gray-600 leading-relaxed">{mainParagraph}</p>
        </div>

        <div className="flex w-full flex-col  gap-6 md:w-1/2 lg:flex-row">
          <LocationCard address={dammamLines} name={dammamTitle} phone={dammamPhone} url={dammamMapUrl} />
          <LocationCard address={muscatLines} name={muscatTitle} phone={muscatPhone} url={muscatMapUrl} />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © <span className="font-english">{currentYear}</span> {companyName}. جميع الحقوق محفوظة.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

function LocationCard({ name, address, phone, url }: { name: string; address: string[]; phone: string; url: string }) {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full w-full flex-1 rounded-md bg-white p-4 shadow-sm border border-gray-200"
    >
      <h2 className="mb-2 text-lg font-bold text-gray-800">{name}</h2>
      {address.map((line, idx) => (
        <p key={idx} className="text-gray-700 text-sm leading-6">
          {line}
        </p>
      ))}

      <p className="text-gray-700 text-sm leading-6 ">
        هاتف:{' '}
        <a href={`tel:${phone}`} className="text-blue-600 underline font-english">
          {phone}
        </a>
      </p>

      <div className="mt-auto pt-1.5">
        <Button variant="link" onClick={() => window.open(url, '_blank')} className="px-0 py-2 text-sm font-semibold">
          عرض الموقع
        </Button>
      </div>
    </motion.div>
  )
}
