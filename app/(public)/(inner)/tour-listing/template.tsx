import RegisterBreadcrumbClient from "@/store/register-breadcrumb-client";
import React, { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <RegisterBreadcrumbClient
        breadcrumb={{ href: "/tour-listing", label: "جميع الرحلات" }}
      />
      <div className="container">{children}</div>
    </React.Fragment>
  );
}
