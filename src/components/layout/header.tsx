import Link from "next/link";
import { AuthButton } from "../auth/auth-button";
import { ModeToggle } from "../theme/theme-mode-toggle";

export function Header() {
  return (
    <header className="border-b">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          App Name
        </Link>
        <div className="flex items-center gap-4">
          <AuthButton />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
