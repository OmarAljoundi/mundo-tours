import { InnerBreadcrumb } from "./components/inner-breadcrumb";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <InnerBreadcrumb />
      {children}
    </section>
  );
}
