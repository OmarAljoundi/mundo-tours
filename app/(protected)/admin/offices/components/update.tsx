"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { updateOfficeSchema, UpdateOfficeSchema } from "@/schema";
import { OfficeForm } from "./form";
import { officeUpdate } from "@/server/office.server";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { revalidateOffice } from "@/server/revalidation.server";

export function UpdateOffice({ office }: { office: UpdateOfficeSchema }) {
  const { id } = useParams();

  const form = useForm<UpdateOfficeSchema>({
    resolver: zodResolver(updateOfficeSchema),
    defaultValues: office,
  });

  const route = useRouter();

  async function onSubmit(body: UpdateOfficeSchema) {
    const result = await officeUpdate({
      data: { ...body, bestTours: body.bestTours.map((o) => o.id) },
      where: { id: Number(id) },
    });
    if (result.id) {
      revalidateOffice();

      toast.success("Office update successfully");
      route.replace(`/admin/offices`);
      route.refresh();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-end">
          <Button
            isLoading={form.formState.isSubmitting}
            leadingIcon={<Save />}
          >
            Save
          </Button>
        </div>
        <OfficeForm />
      </form>
    </Form>
  );
}
