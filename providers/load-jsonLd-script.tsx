import React, { use } from "react";

export default function LoadJsonLdScript({
  dataPromise,
}: {
  dataPromise: Promise<string | null>;
}) {
  const jsonLd = use(dataPromise);

  if (jsonLd)
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    );
}
