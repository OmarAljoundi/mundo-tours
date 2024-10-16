import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import CurrencySwitcher from './currency-switcher'
import { PhoneAction, WhatsappAction } from './call-to-actions'
import { ReactNode } from 'react'

export const MenuItems = [
  {
    title: 'الرئيسية',
    link: '/',
  },
  {
    title: 'جميع الرحلات',
    link: '/tour-listing',
  },
  {
    title: 'التأشيرات',
    link: '/visa',
  },
  {
    title: 'آراء العملاء',
    link: 'https://www.instagram.com/p/B2Gr4omDs0y/',
  },
  {
    title: 'عن موندو',
    link: '/about-us',
  },
]

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <nav
        className="z-40 w-full h-auto  data-[menu-open=true]:border-none border-border border-b-1 sticky top-0 inset-x-0 backdrop-blur-lg
         data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
      >
        <header className="bg-white ">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-1 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={'/imgs/mundo-logo.png'} width={80} height={0} alt="موندو تورز" />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {MenuItems.map((item) => (
                    <li key={item.title}>
                      <Link className="text-secondary transition hover:text-gray-500/75 font-primary font-semibold" href={item.link}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-1">
                <CurrencySwitcher />
                <PhoneAction />
                <WhatsappAction />
                <MobileMenu />
              </div>
            </div>
          </div>
        </header>
      </nav>
      {children}
    </div>
  )
}

export default Header
