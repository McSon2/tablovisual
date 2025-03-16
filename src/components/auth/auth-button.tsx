import { getAuth } from "@/lib/auth-helper";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignoutButton } from "./signout-button";

interface User {
  name?: string;
  email?: string;
}

export async function AuthButton() {
  const user = (await getAuth()) as User;

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link className={buttonVariants({ variant: "ghost" })} href="/signin">
          Sign In
        </Link>
        <Link className={buttonVariants({ variant: "default" })} href="/signup">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          {user.name ?? user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <SignoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
