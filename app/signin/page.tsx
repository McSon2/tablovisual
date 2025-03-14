import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { providerMap, signIn } from "@/lib/auth";
import { auth } from "@/lib/auth-helper";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }> | { callbackUrl?: string };
}) {
  const user = await auth();
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl ?? "";

  if (user) {
    redirect("/");
  }

  return (
    <div className="container max-w-md mx-auto">
      <div className="flex flex-col gap-6 py-6 px-4">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            try {
              await signIn("resend", formData);
            } catch (error) {
              if (error instanceof AuthError) {
                // Rien faire
              }
              throw error;
            }
          }}
        >
          <div className="space-y-2">
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button
            type="submit"
            className="w-full font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            Sign In with Email
          </Button>
        </form>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-4 text-muted-foreground font-medium">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-3">
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                try {
                  await signIn(provider.id, {
                    redirectTo: callbackUrl,
                  });
                } catch (error) {
                  if (error instanceof AuthError) {
                    // Rien faire
                  }
                  throw error;
                }
              }}
            >
              <Button
                type="submit"
                variant="outline"
                className="w-full font-medium hover:bg-accent/10 transition-colors duration-200"
              >
                Sign in with {provider.name}
              </Button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
