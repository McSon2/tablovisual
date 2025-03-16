"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";

type SignoutButtonProps = {
  redirectPath?: string;
};

export function SignoutButton(props: SignoutButtonProps) {
  const { redirectPath = "/signin" } = props;
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Effectuer la déconnexion
      await authClient.signOut();

      // Forcer un rechargement complet de la page pour effacer tout état côté client
      // et rediriger vers la page de connexion
      window.location.href = redirectPath;
    } catch (error) {
      console.error("Error during sign out:", error);
      // Fallback en cas d'erreur
      router.refresh();
      router.push(redirectPath);
    }
  };

  return <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>;
}
