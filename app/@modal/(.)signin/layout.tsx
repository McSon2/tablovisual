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
      <DialogContent className="border-none p-0 bg-transparent shadow-none">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <VisuallyHidden>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              Please sign in to access your account
            </DialogDescription>
          </VisuallyHidden>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
