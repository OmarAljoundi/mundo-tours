"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { QueryLocationSchema } from "@/schema";
import Link from "next/link";
import { getDestinationNextRoute } from "@/lib/utils";

const DestinationDropdown = ({
  destinations,
}: {
  destinations: QueryLocationSchema[];
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-left w-full shadow-none  cursor-pointer col-span-2 lg:col-span-1  font-primary rounded-full flex justify-between flex-row-reverse  border-0"
        >
          <ChevronDown className="ml-2 h-4 w-4" />
          الوجهات
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty className="font-primary">لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {destinations.map((option) => {
                return (
                  <Link key={option.id} href={getDestinationNextRoute(option)}>
                    <CommandItem>
                      <span className="font-primary">{option.name}</span>
                    </CommandItem>
                  </Link>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DestinationDropdown;
