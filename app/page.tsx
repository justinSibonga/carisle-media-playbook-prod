import { LoginForm } from "@/components/login-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type LoginPageProps = {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  const params = await searchParams;
  const callbackUrl = params.callbackUrl || "/home";
  const error = params.error;

  return <LoginForm callbackUrl={callbackUrl} error={error} />;
}
