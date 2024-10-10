'use client'
import { useMemo } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { useCookies } from 'next-client-cookies'
import { useRouter } from 'next/navigation'

export default function CurrencySwitcher() {
  const cookies = useCookies()
  const route = useRouter()
  const currencies: Record<string, { name: string; flag: string }> = {
    SAR: {
      name: 'ريال سعودي',
      flag: '/imgs/saudi-arabia.png',
    },
    OMR: {
      name: 'ريال عماني',
      flag: '/imgs/oman.png',
    },
  }

  const onValueChange = (value: string) => {
    cookies.set('currency', value)
    route.refresh()
  }

  const currency = useMemo(() => {
    return cookies.get('currency') ?? 'SAR'
  }, [cookies.get('currency')])

  return (
    <Select value={currency} onValueChange={onValueChange}>
      <SelectTrigger className="w-28 text-xs h-10 font-primary">
        <SelectValue placeholder="Select currency" className="font-primary text-xs" />
      </SelectTrigger>
      <SelectContent className="text-xs">
        {Object.entries(currencies).map(([code, { name, flag }]) => (
          <SelectItem key={code} value={code}>
            <div className="flex items-center gap-x-1">
              {/* <div className="w-6 h-6 overflow-hidden rounded transition-transform duration-200 ease-in-out transform hover:scale-110">
                <Image src={flag} alt={`${name}flag`} width={24} height={16} className="object-cover" />
              </div> */}
              <span className="text-xs">{name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
