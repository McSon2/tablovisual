import { auth } from "@/lib/auth-helper";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignOutButton } from "./sign-out-button";

export async function AuthButtonServer() {
  const user = await auth();

  if (!user) {
    return (
      <Link className={buttonVariants({ variant: "outline" })} href="/signin">
        Sign In
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{user.email}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
