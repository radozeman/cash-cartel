import auth from "@/modules/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

const { GET, POST } = toNextJsHandler(auth.handler);

export { GET, POST };
