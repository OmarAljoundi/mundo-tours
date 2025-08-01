import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { SlugInput } from "@/components/ui/slug-input";
import { QueryTourSchema } from "@/schema";
import MultipleSelector from "@/components/ui/multiselect";
import { COUNTRIESASOPTIONS, DAYSASOPTIONS } from "@/lib/constants";
import { CurrencyNumber } from "@/components/ui/currency-number";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { tourTypeQuery } from "@/server/tour-types.server";
import { ImageUpload } from "@/components/image-upload";
export function GeneralInfo() {
  const { data } = useQuery({
    queryKey: ["tour-types"],
    queryFn: async () => {
      const result = await tourTypeQuery({ select: { name: true, id: true } });
      return result;
    },
  });
  const { control } = useFormContext<QueryTourSchema>();

  return (
    <div className="flex justify-start items-start gap-x-4">
      <div className="flex flex-col gap-4 flex-1 h-min">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between gap-x-4">
              <div className="flex-1">
                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name={`name`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Tour name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value}
                            placeholder={`Enter Tour name`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name={`code`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Tour code</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Tour code`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name="tourCountries"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Countries</FormLabel>
                        <FormControl>
                          <MultipleSelector
                            value={COUNTRIESASOPTIONS.filter((c) =>
                              field.value.includes(c.label)
                            )}
                            options={COUNTRIESASOPTIONS}
                            placeholder="Select tour countries"
                            commandProps={{
                              label: "Select countries",
                            }}
                            hideClearAllButton
                            hidePlaceholderWhenSelected
                            emptyIndicator={
                              <p className="text-center text-sm">
                                No results found!
                              </p>
                            }
                            onChange={(options) => {
                              field.onChange(
                                options.map((option) => option.value)
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="startDay"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Start days</FormLabel>

                        <FormControl>
                          <MultipleSelector
                            value={DAYSASOPTIONS.filter((c) =>
                              field.value.includes(c.label)
                            )}
                            options={DAYSASOPTIONS}
                            placeholder="Select starting days"
                            commandProps={{
                              label: "Select starting days",
                            }}
                            hideClearAllButton
                            hidePlaceholderWhenSelected
                            emptyIndicator={
                              <p className="text-center text-sm">
                                No results found!
                              </p>
                            }
                            onChange={(options) => {
                              field.onChange(
                                options.map((option) => option.value)
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name="priceSingle"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            formatOptions={{
                              style: "currency",
                              currency: "OMR",
                              currencySign: "accounting",
                            }}
                            label="Single price in OMR"
                            defaultValue={0}
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                            minValue={0}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="priceDouble"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            defaultValue={0}
                            formatOptions={{
                              style: "currency",
                              currency: "OMR",
                              currencySign: "accounting",
                            }}
                            minValue={0}
                            label="Double price in OMR"
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="priceSingleSa"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            defaultValue={0}
                            formatOptions={{
                              style: "currency",
                              currency: "SAR",
                              currencySign: "accounting",
                            }}
                            minValue={0}
                            label="Single price in SAR"
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="priceDoubleSa"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            defaultValue={0}
                            formatOptions={{
                              style: "currency",
                              currency: "SAR",
                              currencySign: "accounting",
                            }}
                            label="Double price in SAR"
                            {...field}
                            minValue={0}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name="priceSingleJo"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            formatOptions={{
                              style: "currency",
                              currency: "JOR",
                              currencySign: "accounting",
                            }}
                            label="Single price in JOR"
                            defaultValue={0}
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                            minValue={0}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="priceDoubleJo"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            defaultValue={0}
                            formatOptions={{
                              style: "currency",
                              currency: "JOR",
                              currencySign: "accounting",
                            }}
                            minValue={0}
                            label="Double price in JOR"
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={control}
                  name={`slug`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Slug url</FormLabel>
                      <FormControl ltr>
                        <SlugInput
                          firstText="/tours/"
                          {...field}
                          value={field.value ?? ""}
                          placeholder={`Enter a slug`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name="typeId"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Tour type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ? String(field.value) : undefined}
                        >
                          <FormControl ltr>
                            <SelectTrigger className="bg-input">
                              <SelectValue placeholder="Select a tour type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {data?.map((p) => (
                              <SelectItem value={String(p.id)} key={p.id}>
                                {p.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="numberOfDays"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl ltr>
                          <CurrencyNumber
                            defaultValue={0}
                            formatOptions={{
                              style: "decimal",
                            }}
                            minValue={0}
                            label="Number of days"
                            {...field}
                            value={field.value ?? undefined}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-56 border-l pl-4">
                <FormField
                  control={control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormControl ltr>
                        <ImageUpload
                          bucketName="mundo_tours"
                          folderPath="tour_images"
                          maxSizeMB={5}
                          showExistingFiles={true}
                          value={field.value?.[0]}
                          onChange={(e) => field.onChange([e])}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
