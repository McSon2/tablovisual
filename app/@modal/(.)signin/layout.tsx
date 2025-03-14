"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useRouter } from "next/navigation";

export default function SignInModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Please sign in to access your account
          </DialogDescription>
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
}
