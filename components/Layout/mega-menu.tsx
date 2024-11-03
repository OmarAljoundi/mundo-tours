import { REVALIDATE_LOCATION_LIST } from '@/lib/keys'
import { getDestination } from '@/lib/operations'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { ArrowDown } from 'lucide-react'
import { FunctionComponent, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface MegaMenuProps {
  items: { url: string; name: string; description?: string }[]
  group: string
}

const MegaMenu = ({ group, items }: MegaMenuProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Dropdown
      isOpen={open}
      onOpenChange={(e) => setOpen(e)}
      showArrow
      className="py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200"
      classNames={{
        base: 'before:bg-default-200 max-h-56',
      }}
      closeOnSelect={true}
    >
      <DropdownTrigger>
        <div className="text-secondary transition  hover:text-gray-500/75 font-primary font-semibold flex items-center  gap-x-2 cursor-pointer">
          <span>{group}</span>
          <ArrowDown className={cn('w-4 h-4 duration-300 transition-all', open ? 'rotate-180' : 'rotate-0')} />
        </div>
      </DropdownTrigger>

      <DropdownMenu
        as={ScrollArea}
        className="w-[250px] max-h-64"
        itemClasses={{
          base: 'gap-4',
          wrapper: 'items-end text-right',
        }}
      >
        {items?.map((item, index) => (
          <DropdownItem
            className="text-right font-primary"
            classNames={{ title: 'text-right' }}
            as={Link}
            href={item.url}
            key={index}
            description={item.description}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default MegaMenu
