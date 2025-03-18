import Link from "next/link";
import { ModeToggle } from "../theme/theme-mode-toggle";
import { AuthButton } from "../auth/auth-button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold text-xl">
          TabloVisual
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Fonctionnalités
          </Link>
          <Link
            href="#use-cases"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Cas d'usage
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Tarifs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <AuthButton />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
