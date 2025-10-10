import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.plugins = [...config.plugins, new PrismaPlugin()];
  //   }
  //   return config;
  // },

  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "skkyjvdnikftxykbddoi.supabase.co",
      },
      {
        hostname: "flagcdn.com",
      },
    ],
    deviceSizes: [256, 384, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
    qualities: [25, 50, 70, 80, 100],

    dangerouslyAllowSVG: true,
  },
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: true },
    incomingRequests: true,
  },
  outputFileTracingIncludes: {
    "/*": [
      "./node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node",
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
