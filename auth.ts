import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db.server";
import { passkey } from "better-auth/plugins/passkey";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  appName: "mundo-tours",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    passkey({
      rpID: "localhost",
      rpName: "mundo-tours",
      origin: process.env.NEXT_PUBLIC_APP_URL,
    }),
  ],
});
