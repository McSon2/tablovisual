import { getAuth } from "@/lib/auth-helper";
import { redirect } from "next/navigation";
import { SigninForm } from "./signin-form";

export default async function Signin() {
  const user = await getAuth();

  if (user) {
    redirect("/profile");
  }

  return (
    <div>
      <SigninForm />
    </div>
  );
}
