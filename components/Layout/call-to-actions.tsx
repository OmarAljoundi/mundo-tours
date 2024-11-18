'use client'
import { ReactNode, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import ImWhatsapp from '../svg/ImWhatsapp'
import { cn } from '@/lib/utils'

const offices = [
  { title: 'السعودية', link: 'https://api.whatsapp.com/send/?phone=%2B966507158137&text&type=phone_number&app_absent=0', phoneNumber: '920031910' },
  { title: 'سلطنة عمان', link: 'https://api.whatsapp.com/send/?phone=%2B96895929251&text&type=phone_number&app_absent=0', phoneNumber: '79667679' },
]

export function WhatsappAction() {
  const ref = useRef(null)

  return (
    <Popover placement="bottom" showArrow>
      <PopoverTrigger>
        <Button
          size={'icon'}
          variant={'outline'}
          ref={ref}
          className="w-9 h-9 bg-[#25D366] hover:bg-green-500/50 hover:text-white text-white  p-1.5 shadow-md"
          tabIndex={0}
          role="link"
          aria-label={`Visit Whatsapp page`}
        >
          <ImWhatsapp className="w-7 h-7 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div className="px-1 py-2 grid divide-y-1 divide-border">
          {offices.map(({ link, title }) => (
            <Link href={link} target="_blank" className="text-xs font-bold py-2 first:pt-0 last:pb-0 flex gap-x-2 " key={title}>
              <ButtonWithIcon text={title} className="bg-[#25D366] hover:bg-green-500/50 hover:text-white text-white">
                <div className="ml-0.5 flex aspect-square h-full p-2 border-r border-border">
                  <ImWhatsapp className="w-5 h-5 text-white" />
                </div>
              </ButtonWithIcon>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function PhoneAction() {
  const ref = useRef(null)

  return (
    <Popover placement="bottom" showArrow>
      <PopoverTrigger>
        <Button
          size={'icon'}
          variant={'outline'}
          ref={ref}
          className="w-9 h-9 bg-primary hover:bg-primary/50 hover:text-white text-white   p-1.5 shadow-md"
          tabIndex={0}
          role="link"
          aria-label={`Visit Whatsapp page`}
        >
          <Phone className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div className="px-1 py-2 grid divide-y-1 divide-border">
          {offices.map(({ link, title, phoneNumber }) => (
            <Link href={`tel:${phoneNumber}`} target="_blank" className="text-xs font-bold py-2 first:pt-0 last:pb-0 flex gap-x-2" key={title}>
              <ButtonWithIcon text={title} className="bg-primary hover:bg-primary/50 hover:text-white text-white items-center">
                <div className="ml-0.5 flex aspect-square h-full p-2 border-r border-border">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </ButtonWithIcon>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function ButtonWithIcon({ text, className, children }: { text: string; className: string; children: ReactNode }) {
  return (
    <Button className={cn('rounded-full py-0 pe-0  w-full justify-between', className)} size={'sm'}>
      <span className="pe-2">{text}</span>
      {children}
    </Button>
  )
}
