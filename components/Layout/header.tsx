import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import CurrencySwitcher from './currency-switcher'
import { PhoneAction, WhatsappAction } from './call-to-actions'
import { ReactNode, useMemo } from 'react'
import useLocations from '@/hooks/react-query/use-locations'
import { Location, TourType } from '@/types/custom'
import MegaMenu from './mega-menu'
import useTourTypes from '@/hooks/react-query/use-tour-types'

export const MenuItems = [
  {
    title: 'الرئيسية',
    link: '/',
    subMenus: [],
    allowMobile: true,
  },
  {
    title: 'سافر أوروبا',
    link: '/tour-listing',
    allowMobile: false,
    subMenus: [],
  },

  {
    title: 'خدماتنا السياحية',
    link: '/',
    allowMobile: true,
    subMenus: [], //{ name: 'إستخـراج تـأشيرات', url: '/visa' }
  },
  {
    title: 'عن موندو',
    link: '/about-us',
    allowMobile: true,
    subMenus: [
      { name: 'من نحن', url: '/about-us' },
      { name: 'آراء العملاء', url: 'https://www.instagram.com/p/B2Gr4omDs0y/' },
    ],
  },
]

const getDestinationSubMenus = (data: Location[]) => {
  return data
    .filter((x) => x.show_on_europe)
    .map((z) => {
      return {
        name: z.name!,
        url: `/tour-listing/${z.slug}`,
      }
    })
}
const getTypesSubMenus = (data: TourType[]) => {
  return data
    .filter((x) => x.show_on_europe)
    .map((z) => {
      return {
        name: z.name!,
        url: `/tour-listing?type=${z.name}`,
      }
    })
}

const getDestinationSubMenusForTourism = (data: Location[]) => {
  return data
    .filter((x) => x.show_on_service)
    .map((z) => {
      return {
        name: z.name!,
        url: `/tour-listing/${z.slug}`,
      }
    })
}

const Header = ({ children }: { children: ReactNode }) => {
  const { data } = useLocations()
  const { data: dataTypes } = useTourTypes()

  const laptopMenu = useMemo(() => {
    return MenuItems.map((o) => {
      if (o.title == 'سافر أوروبا') {
        return {
          ...o,
          subMenus: [...getDestinationSubMenus(data?.results ?? []), ...getTypesSubMenus(dataTypes?.results ?? [])],
        }
      }

      if (o.title == 'خدماتنا السياحية') {
        return {
          ...o,
          subMenus: [...o.subMenus, ...getDestinationSubMenusForTourism(data?.results ?? [])],
        }
      }
      return o
    })
  }, [data, dataTypes])

  return (
    <div className="flex flex-col ">
      <nav
        className="z-40 w-full h-auto  data-[menu-open=true]:border-none border-border border-b-1 sticky top-0 inset-x-0 backdrop-blur-lg
         data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70  "
      >
        <header className="bg-white py-2">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-1 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <Link className="block text-teal-600 w-[80px] lg:w-[100px]" href="/">
              <span className="sr-only">Home</span>
              <Image src={'/imgs/mundo_logo.png'} quality={100} width={1593} height={867} alt="موندو تورز" sizes="(max-width: 640px) 256px, 256px" />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {laptopMenu.map((item, key) => {
                    if (item.subMenus.length > 0) return <MegaMenu key={key} group={item.title} items={item.subMenus} />

                    return (
                      <li key={item.title}>
                        <Link className="text-secondary transition hover:text-gray-500/75 font-primary font-semibold" href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    )
                  })}
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
