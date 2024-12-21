'use client'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { Location } from '@/types/custom'

const DestinationDropdown = ({ destinations }: { destinations: any[] }) => {
  const router = useRouter()

  const getNextRoute = useCallback(
    (destination: Location) => {
      var baseUrl = `/tour-listing/${destination.slug}`
      if (destination.location_attributes && destination.location_attributes?.length >= 1) {
        var locationTabSlug = destination.location_attributes[0].title?.replaceAll(' ', '-') ?? ''
        baseUrl += `/${locationTabSlug}`
      }

      return baseUrl
    },
    [destinations],
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-left w-full  cursor-pointer col-span-2 lg:col-span-1  font-primary rounded-full flex justify-between flex-row-reverse  border-0"
        >
          <ChevronDown className="ml-2 h-4 w-4" />
          الوجهات
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {destinations
                ?.filter((x) => x.is_active)
                .map((option) => {
                  return (
                    <CommandItem
                      key={option.id}
                      onSelect={() => {
                        router.push(getNextRoute(option))
                      }}
                    >
                      <span>{option.name}</span>
                    </CommandItem>
                  )
                })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default DestinationDropdown
