'use client'
import { FC, useEffect, useMemo, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Banknote } from 'lucide-react'
import { Button } from '../ui/button'
import qs from 'query-string'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter } from 'next/navigation'
import { cn, QueryString } from '@/lib/utils'
import { useCookies } from 'next-client-cookies'

const PriceDropdown: FC<{
  onChange: boolean
  setSearch: (QueryString: QueryString) => void
  search: QueryString
  min: number
  max: number
}> = ({ onChange, search, setSearch, max, min }) => {
  const pathname = usePathname()
  const [value, setValue] = useState<number>(900)
  const debouncedValue = useDebounce<number>(value, onChange ? 250 : 0)
  const router = useRouter()

  useEffect(() => {
    const query = qs.parseUrl(window.location.href, {
      arrayFormat: 'comma',
      decode: true,
    }).query

    if (query.maxprice) {
      setValue(Number(query.maxprice))
    }
  }, [])

  useEffect(() => {
    const query = {
      ...qs.parseUrl(window.location.href, {
        arrayFormat: 'comma',
        decode: true,
      }).query,
      maxprice: value,
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: 'comma',
        encode: true,
      },
    )

    if (onChange) {
      router.push(url)
    } else {
      //@ts-ignore
      setSearch({
        ...search,
        maxprice: debouncedValue,
      })
    }
  }, [debouncedValue, router])

  const cookies = useCookies()

  const isOman = useMemo(() => cookies.get('currency') == 'OMR', [cookies.get('currency')])

  return (
    <Button variant="outline" size="sm" className="text-left w-full cursor-pointer relative block">
      <div className="sm:px-6 focus:shadow-xl  gap-3 items-center sm:text-sm ">
        <div className="w-full py-1 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <Banknote />
            السعر
          </span>
          <span className="absolute top-[-14px] bg-white rounded-2xl py-1 px-5 right-4 shadow text-primary text-[10px]">
            {isOman ? 'ريال عماني' : 'ريال سعودي'}
          </span>
          {/* <Slider
            handleStyle={{
              backgroundColor: 'var(--primary)',
              borderColor: 'var(--primary)',
            }}
            min={min}
            max={max}
            trackStyle={{ backgroundColor: 'var(--primary)' }}
            value={value}
            onChange={(value) => setValue(value as number)}
          /> */}

          <Slider
            min={min}
            max={max}
            step={1}
            value={value}
            onChange={(value) => setValue(value as number)}
            className={''}
            handleStyle={{
              backgroundColor: 'black',
              borderColor: 'white',
              height: '18px',
              width: '18px',
            }}
            trackStyle={{ backgroundColor: 'black', height: '8px' }}
          />
        </div>
      </div>
    </Button>
  )
}

export default PriceDropdown
