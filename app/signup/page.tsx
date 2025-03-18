import { getAuth } from "@/lib/auth-helper";
import { redirect } from "next/navigation";
import { SignupForm } from "./signup-form";

export default async function Signup() {
  const user = await getAuth();

  if (user) {
    redirect("/profile");
  }

  return (
    <div>
      <SignupForm />
    </div>
  );
}
