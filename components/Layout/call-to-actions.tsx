'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'

const offices = [
  { title: 'سلطنة عمان', link: 'https://api.whatsapp.com/send/?phone=%2B96895929251&text&type=phone_number&app_absent=0', phoneNumber: '79667679' },
  { title: 'السعودية', link: 'https://api.whatsapp.com/send/?phone=%2B966507158137&text&type=phone_number&app_absent=0', phoneNumber: '920031910' },
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
          className="w-9 h-9 bg-green-500 hover:bg-green-500/50 hover:text-white text-white  p-1.5 shadow-md"
          tabIndex={0}
          role="link"
          aria-label={`Visit Whatsapp page`}
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 grid divide-y-1 divide-border">
          {offices.map(({ link, title }) => (
            <Link href={link} target="_blank" className="text-xs font-bold py-2 first:pt-0 last:pb-0 flex gap-x-2 " key={title}>
              <h1 className="font-primary">{title}</h1>
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
      <PopoverContent>
        <div className="px-1 py-2 grid divide-y-1 divide-border">
          {offices.map(({ link, title, phoneNumber }) => (
            <Link href={link} target="_blank" className="text-xs font-bold py-2 first:pt-0 last:pb-0 flex gap-x-2 " key={title}>
              <h1 className="font-primary">{title}</h1>
              <span>{phoneNumber}</span>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
