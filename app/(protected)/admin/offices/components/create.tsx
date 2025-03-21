"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createOfficeSchema, CreateOfficeSchema } from "@/schema";
import { officeCreate } from "@/server/office.server";
import { OfficeForm } from "./form";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { revalidateOffice } from "@/server/revalidation.server";

export function CreateOffice({ office }: { office?: CreateOfficeSchema }) {
  const form = useForm<CreateOfficeSchema>({
    resolver: zodResolver(createOfficeSchema),
    defaultValues: office ?? { bestTours: [] },
  });

  const route = useRouter();

  async function onSubmit(body: CreateOfficeSchema) {
    const result = await officeCreate({
      data: { ...body, bestTours: body.bestTours.map((o) => o.id) },
    });
    if (result.id) {
      revalidateOffice();
      toast.success("Office created successfully");
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
            Create New
          </Button>
        </div>
        <OfficeForm />
      </form>
    </Form>
  );
}
