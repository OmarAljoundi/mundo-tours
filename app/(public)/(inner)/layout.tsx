import { Suspense } from "react";
import { InnerBreadcrumb } from "./components/inner-breadcrumb";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <section>
        <InnerBreadcrumb />
        {children}
      </section>
    </Suspense>
  );
}
