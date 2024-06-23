import { authentication, AuthenticationStorage } from "@directus/sdk";
import { options } from "../auth/options";
import { getSession } from "next-auth/react";
import { createDefaultDirectusInstance, directusUrl } from "./share";

if ((process.env as any).NEXT_RUNTIME! === "edge") {
  throw new Error("The module is not compatible with the runtime");
}

class DirectusStore implements AuthenticationStorage {
  async get() {
    const getServerSession = await import("next-auth").then(
      (m) => m.getServerSession,
    );
    const session = await (typeof window === "undefined"
      ? getServerSession(options)
      : getSession());
    return (
      session && {
        access_token: session.access_token ?? null,
        refresh_token: session.refresh_token ?? null,
        expires: session.expires_at
          ? new Date(session.expires_at).getTime() - Date.now()
          : null,
        expires_at: session.expires_at ?? null,
      }
    );
  }
  set() {}
}

const directusStore = new DirectusStore();

export const createDirectusInstance = (url: string) => {
  const directusInstance = createDefaultDirectusInstance(url);
  return directusInstance.with(
    authentication("cookie", {
      credentials: "include",
      autoRefresh: true,
      storage: directusStore,
    }),
  );
};

export const createDirectusWithDefaultUrl = () => {
  return createDirectusInstance(directusUrl!);
};

const directus = createDirectusWithDefaultUrl();

export default directus;
