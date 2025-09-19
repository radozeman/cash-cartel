import { signIn } from "@/modules/auth/auth-client";

const signInGithub = async () => {
  await signIn.social({
    provider: "github",
  });
};

export { signInGithub };
