import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">404 - Page non trouvée</h1>
      <p className="text-muted-foreground">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link href="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </main>
  );
}
