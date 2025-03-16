import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { auth } from "./auth";

export const getAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
};

export const authRequired = async () => {
  const user = await getAuth();
  if (!user) {
    unauthorized();
  }

  return user;
};
