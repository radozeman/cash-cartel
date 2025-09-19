import auth from "@/modules/auth/auth";
import { SignIn } from "@/modules/ui/auth/sign-in";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <p>Landing</p>
      <SignIn />
      {JSON.stringify(session)}
    </>
  );
}
