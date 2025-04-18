"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useId } from "react";

export function DatePicker({
  onChange,
  value,
  label,
}: {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  label?: string;
}) {
  const id = useId();

  return (
    <div>
      <div>
        {label && (
          <Label
            htmlFor={id}
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block text-sm font-medium rtl:text-right text-gray-700 dark:text-white"
          >
            {label}
          </Label>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "group w-full justify-between bg-input px-3 font-normal outline-offset-0 h-9 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20",
                !value && "text-muted-foreground"
              )}
            >
              <span
                className={cn("truncate", !value && "text-muted-foreground")}
              >
                {value ? format(value, "PPP") : "Pick a value"}
              </span>
              <CalendarIcon
                size={16}
                strokeWidth={2}
                className="shrink-0 text-muted-foreground/80 transition-colors group-hover:text-foreground"
                aria-hidden="true"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <Calendar mode="single" selected={value} onSelect={onChange} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
