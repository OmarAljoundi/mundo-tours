'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

export function CallToAction() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div dir="rtl" className="p-4">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300"
        onClick={() => setIsOpen(true)}
      >
        <AiOutlineWhatsApp className="text-white text-xl" />
        <span className="sr-only">افتح قائمة الاتصال بواتساب</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side={'top'}>
          <SheetHeader>
            <SheetTitle className="text-center text-2xl font-bold">اختر مكتب الاتصال</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button
              variant="outline"
              className="flex items-center justify-center font-primary gap-x-2"
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=%2B96895929251&text&type=phone_number&app_absent=0', '_blank')
              }}
            >
              <span className="rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300">
                <AiOutlineWhatsApp className="text-white text-xl" />
                <span className="sr-only">افتح قائمة الاتصال بواتساب</span>
              </span>
              <span className="text-xs"> فرع سلطنة عمان </span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center font-primary gap-x-2"
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=%2B966507158137&text&type=phone_number&app_absent=0', '_blank')
              }}
            >
              <span className="rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300">
                <AiOutlineWhatsApp className="text-white text-xl" />
                <span className="sr-only">افتح قائمة الاتصال بواتساب</span>
              </span>
              <span className="text-xs"> فرع السعودية </span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
