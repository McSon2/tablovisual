"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      className="w-full text-left"
      onClick={async () => {
        await signOut();
      }}
    >
      Sign Out
    </button>
  );
}
