import auth from "@/modules/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

const { POST, GET } = toNextJsHandler(auth);

export { POST, GET };
