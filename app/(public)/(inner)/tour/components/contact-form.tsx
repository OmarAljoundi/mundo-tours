"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";

import { createCustomerSchema, CreateCustomerSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitForm } from "@/server/public-query.server";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { submitEventForm } from "@/lib/gtm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export function ContactForm({ tourId }: { tourId: number }) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const form = useForm<CreateCustomerSchema>({
    resolver: zodResolver(createCustomerSchema),
    defaultValues: {
      tourId,
      contactMethod: "Call",
      name: "",
      notes: "",
      phoneNumber: "",
    },
  });

  const handleSubmitForm = async (data: CreateCustomerSchema) => {
    data.phoneNumber = String(data.phoneNumber);
    if (date) {
      data.notes += `(التاريخ المتوقع للسفر ${format(date, "PPP")})`;
    }

    try {
      await submitForm(data);
      toast.success("سنقوم بالتواصل معك قريباَ");
      if (process.env.NODE_ENV == "production") submitEventForm(pathname);
      setOpen(false);
    } catch (ex) {
      console.log("Error while submiting the form", ex);
      toast.error(
        "حدث خطأ ما ، الرجاء التواصل معنا عن طريق الإيميل اذا تكررت المشكلة"
      );
    }
  };

  return (
    <Dialog
      onOpenChange={() => {
        setOpen(!open);
      }}
      open={open}
    >
      <DialogTrigger asChild>
        <Button size={"sm"} variant={"secondary"} className="font-primary">
          طريقة الحجز
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-right mb-4 mt-8">
          <DialogTitle className="text-center font-primary">
            أترك معلوماتك ليتم التواصل معك
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="grid gap-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-white"
                      {...field}
                      placeholder="الإسم الكريم"
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="h-auto mt-0" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl ltr>
                    <Input
                      className="bg-white placeholder:font-primary"
                      {...field}
                      placeholder="رقم التواصل"
                      disabled={form.formState.isSubmitting}
                      inputMode="tel"
                    />
                  </FormControl>
                  <FormMessage className="h-auto mt-0" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={form.formState.isSubmitting}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        dir="rtl"
                        className="font-primary placeholder:font-primary  w-full  [&>span]:font-primary"
                      >
                        <SelectValue
                          placeholder="طريقة التواصل"
                          className="placeholder:text-muted-foreground"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="!font-primary">
                      <SelectItem value="Whatsapp" dir="rtl">
                        <span className="font-primary">واتس اب</span>
                      </SelectItem>
                      <SelectItem
                        value="Call"
                        dir="rtl"
                        className="font-primary"
                      >
                        <span className="font-primary">تلفون</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="h-auto mt-0" />
                </FormItem>
              )}
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  isLoading={form.formState.isSubmitting}
                  variant={"outline"}
                  size={"sm"}
                  className={cn(
                    "w-full justify-start text-right font-normal",
                    !date && "text-muted-foreground"
                  )}
                  dir="rtl"
                >
                  <CalendarIcon className="ml-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="font-primary">التاريخ التقريبي للسفر</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-white"
                      {...field}
                      value={field.value ?? ""}
                      placeholder="ملاحظات اخرى"
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="h-auto mt-0" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              isLoading={form.formState.isSubmitting}
              className="font-primary"
            >
              إرســال
            </Button>
          </form>
        </Form>
        <span className="font-primary">
          {" "}
          او يمكنكم التواصل مباشره على هذا الرقم{" "}
          <a className="bold underline font-english" href="tel:95929210">
            95929210
          </a>{" "}
        </span>
      </DialogContent>
    </Dialog>
  );
}
