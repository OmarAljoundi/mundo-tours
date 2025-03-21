import { isCreationPage } from "@/lib/utils";
import ContentWrapper from "@/components/admin-panel/contet-wrapper";
import { CreateOffice } from "../components/create";
import { UpdateOffice } from "../components/update";
import { updateOfficeSchema } from "@/schema";
import { notFound } from "next/navigation";
import { officeSingleQuery } from "@/server/office.server";
import { tourQuery } from "@/server/tours.server";

async function getOffice(id: string) {
  const office = await officeSingleQuery({
    where: { id: Number(id) },
  });

  if (!office) return notFound();

  const tours = await tourQuery({
    where: { id: { in: office.bestTours } },
    include: { tourType: true },
  });

  return await updateOfficeSchema.parseAsync({
    ...office,
    bestTours: tours.map(({ name, id, tourType }) => {
      return {
        name,
        id,
        tourType,
      };
    }),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: paramsId } = await params;
  const { isCreation, id } = isCreationPage(paramsId);
  const currentBreadcrumb = isCreation
    ? { item: "New Office" }
    : { item: `Edit Office ${id}` };

  if (isCreation) {
    return (
      <ContentWrapper
        breadcrumbs={[
          { item: "Dashboard", url: "/admin" },
          { item: "All Offices", url: "/admin/offices" },
          { ...currentBreadcrumb, currentPage: true },
        ]}
      >
        <CreateOffice />
      </ContentWrapper>
    );
  }

  const parsedOffice = await getOffice(id);

  return (
    <ContentWrapper
      breadcrumbs={[
        { item: "Dashboard", url: "/admin" },
        { item: "All Offices", url: "/admin/offices" },
        { ...currentBreadcrumb, currentPage: true },
      ]}
    >
      <UpdateOffice office={parsedOffice} />
    </ContentWrapper>
  );
}
