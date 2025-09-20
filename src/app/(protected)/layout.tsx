// app/(protected)/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/auth";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  return <>{children}</>;
};

export { ProtectedLayout };
