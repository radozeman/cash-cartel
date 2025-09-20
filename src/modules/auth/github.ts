import { authClient } from "@/modules/auth/auth-client";

const signInGithub = async () => {
  try {
    const response = await authClient.signIn.social({
      callbackURL: "/",
      provider: "github",
    });
    console.log("GitHub Sign-In Response:", JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error("GitHub Sign-In Error:", error);
    throw error;
  }
};

export { signInGithub };
