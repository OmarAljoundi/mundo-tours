"use client";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { QueryTourTypeSchema } from "@/schema";

const TypeDropdown = ({ types }: { types: QueryTourTypeSchema[] }) => {
  const [selected, setSelected] = useState<QueryTourTypeSchema[]>([]);
  const [tourType, setTourType] = useQueryState(
    "type",
    parseAsArrayOf(parseAsString)
      .withDefault(selected.map((x) => x.name ?? "") ?? [])
      .withOptions({
        clearOnDefault: true,
        scroll: false,
        throttleMs: 1000,
        history: "push",
      })
  );

  useEffect(() => {
    if (tourType && tourType.length > 0) {
      const labelSet = new Set(tourType);
      const filteredObjects =
        types?.filter((obj) => labelSet.has(obj.name!)) ?? [];
      setSelected(filteredObjects ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-left w-full font-primary  cursor-pointer rounded-full flex justify-between flex-row-reverse  border-0"
        >
          <ChevronDown className="ml-2 h-4 w-4" />
          {selected.length > 0 ? (
            <React.Fragment>
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden font-primary"
                onClick={() => {
                  setSelected([]);
                  setTourType([]);
                }}
              >
                {selected.length} مختارة
                <X className="border  rounded-lg w-4 h-4 mr-2 text-white bg-red-500/70" />
              </Badge>
              <div className="hidden lg:flex gap-2">
                {selected.length > 3 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal font-primary"
                    onClick={() => {
                      setSelected([]);
                      setTourType([]);
                    }}
                  >
                    {selected.length} مختارة
                    <X className="border  rounded-lg w-4 h-4 mr-2 text-white bg-red-500/70" />
                  </Badge>
                ) : (
                  types
                    ?.filter((option) => selected.includes(option))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.name}
                        className="rounded-sm px-1 font-normal font-primary"
                        onClick={() => {
                          const newData = [
                            ...selected.filter((x) => x != option),
                          ];
                          setSelected(newData);
                          setTourType(newData.map((x) => x.name!));
                        }}
                      >
                        {option.name}
                        <X className="border  rounded-lg w-4 h-4 mr-2 text-white bg-red-500/70" />
                      </Badge>
                    ))
                )}
              </div>
            </React.Fragment>
          ) : (
            <span className="font-primary text-sm"> طريقة الرحلة</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>لاتوجد نتائج</CommandEmpty>
            <CommandGroup>
              {types?.map((option) => {
                return (
                  <CommandItem
                    key={option.name}
                    onSelect={() => {
                      if (selected.includes(option)) {
                        const newData = selected.filter((x) => x != option);
                        setSelected(newData);
                        setTourType(newData.map((x) => x.name!));
                      } else {
                        const newData = [...selected, option];
                        setSelected(newData);
                        setTourType(newData.map((x) => x.name!));
                      }
                    }}
                  >
                    <Check
                      className={cn(
                        "ml-2 text-green-600 flex h-4 w-4 items-center justify-center opacity-0 transition-all duration-500",
                        selected.includes(option) ? "opacity-100" : "opacity-0"
                      )}
                    />

                    <span className="font-primary">{option.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selected.length > 0 && (
              <React.Fragment>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => {
                      setSelected([]);
                      setTourType([]);
                    }}
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </React.Fragment>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TypeDropdown;
