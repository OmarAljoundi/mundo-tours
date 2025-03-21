import RegisterBreadcrumbClient from "@/store/register-breadcrumb-client";
import React, { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <RegisterBreadcrumbClient
        breadcrumb={{ href: "/about-us", label: "عن موندو" }}
      />
      {children}
    </React.Fragment>
  );
}
