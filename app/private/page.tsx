import { authRequired } from "@/lib/auth-helper";

export default async function PrivatePage() {
  await authRequired();
  return <div>Only logged in users can see this page</div>;
}
