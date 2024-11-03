'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuItems } from './header'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { AtSign, Phone } from 'lucide-react'
import { Separator } from '../ui/separator'
import { useMemo, useState } from 'react'
const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const menu = useMemo(() => {
    return MenuItems.flatMap((item) => {
      if (item.allowMobile && item.subMenus.length > 0) {
        const subMenuItems = item.subMenus.map((subMenu) => ({
          title: subMenu.name,
          link: subMenu.url,
          allowMobile: true,
          subMenus: [],
        }))
        return [item, ...subMenuItems]
      }
      return [item]
    })
  }, [])
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden h-9">
        <span className="sr-only">Toggle menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <nav aria-label="Global ">
          <ul className="flex items-center gap-6 text-sm flex-wrap pt-8 justify-center">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  className="text-secondary transition hover:text-gray-500/75 font-primary font-semibold"
                  href={item.link}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Separator className="my-4" />

        <h1 className="font-primary text-center pb-4">تواصل معنا</h1>
        <div className="container">
          <div className="flex justify-center flex-wrap flex-1">
            <div className="flex justify-center">
              <div className="contact-info flex justify-center gap-4 ">
                <AiOutlineWhatsApp className="text-secondary text-2xl" />
                <AiOutlineInstagram className="text-secondary text-2xl" />
                <HiOutlineMapPin className="text-secondary text-2xl" />
              </div>
            </div>
            <Separator className="my-4" />
            <div className="contact-info grid gap-2 justify-items-center ">
              <div className="flex gap-3 items-center">
                <span className="text-secondary font-bold " dir="ltr">
                  +968 95 9292 10
                </span>
                <Phone className="text-primary" />
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-secondary font-bold font-english">sales@mundo-tours.com</span>
                <AtSign className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
