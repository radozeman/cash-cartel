"use client";

import { signInGithub } from "@/modules/auth/github";

const SignIn = () => {
  return <button onClick={signInGithub}>Sign In with Github</button>;
};

export { SignIn };
