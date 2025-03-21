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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QueryOfficeSchema } from "@/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/image-upload";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export function GeneralInfo() {
  const { control } = useFormContext<QueryOfficeSchema>();

  return (
    <div className="flex justify-start items-start gap-x-4">
      <div className="flex flex-col gap-4 flex-1 h-min">
        <Card>
          <CardHeader>
            <CardTitle>Office theme opptions</CardTitle>
            <CardDescription>
              Fill the office theme options colors, fonts and image
            </CardDescription>
          </CardHeader>
          <Separator className="my-2" />

          <CardContent className="pt-6">
            <div className="flex justify-between gap-x-4">
              <div className="flex-1">
                <div className="flex justify-between gap-x-2">
                  <FormField
                    control={control}
                    name={`primaryColor`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Primary Color</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Primary Color`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name={`secondaryColor`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Secondary Color</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Secondary Color`}
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
                    name={`bgPrimaryColor`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Bg Primary Color</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Bg Primary Color`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name={`bgSecondaryColor`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Bg Secondary Color</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Bg Secondary Color`}
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
                    name={`slug`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Slug</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter a slug`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="primaryFont"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Font</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ? String(field.value) : undefined}
                        >
                          <FormControl ltr>
                            <SelectTrigger className="bg-input">
                              <SelectValue placeholder="Select a font" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["font-kufi", "font-naskh", "font-sans"].map(
                              (p) => (
                                <SelectItem value={String(p)} key={p}>
                                  {p}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Currency</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ? String(field.value) : undefined}
                        >
                          <FormControl ltr>
                            <SelectTrigger className="bg-input">
                              <SelectValue placeholder="Select a currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["SAR", "OMR"].map((p) => (
                              <SelectItem value={String(p)} key={p}>
                                {p}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className="my-4" />
                <div className="flex flex-col">
                  <FormField
                    control={control}
                    name={`name`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Office name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter office name`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`email`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Office Email</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Office Email`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`contactNumber`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Office Contact Number</FormLabel>
                        <FormControl ltr>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Office Contact Number`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`address`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Office Address</FormLabel>
                        <FormControl ltr>
                          <Textarea
                            rows={4}
                            {...field}
                            value={field.value ?? ""}
                            placeholder={`Enter Office Address`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-72 border-l pl-4">
                <FormField
                  control={control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormControl ltr>
                        <ImageUpload
                          bucketName="mundo_tours"
                          folderPath="tour_images"
                          maxSizeMB={5}
                          showExistingFiles={true}
                          value={field.value ?? ""}
                          onChange={(e) => field.onChange(e)}
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
