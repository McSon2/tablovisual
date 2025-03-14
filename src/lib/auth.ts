import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";
import { prisma } from "./prisma";

const providers: Provider[] = [
  Resend({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
  }),
  GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "resend");

export const {
  handlers,
  signIn,
  signOut,
  auth: baseAuth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers,
  pages: {
    signIn: "/signin",
  },
});
