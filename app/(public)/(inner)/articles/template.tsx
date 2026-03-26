import RegisterBreadcrumbClient from "@/store/register-breadcrumb-client";
import React, { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <RegisterBreadcrumbClient
        breadcrumb={{ href: "/articles", label: "المقالات" }}
      />
      {children}
    </React.Fragment>
  );
}
