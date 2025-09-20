"use client";

import { TRPCReactProvider } from "@/modules/backend/trpc/client";
import { useEffect, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <TRPCReactProvider>{children}</TRPCReactProvider>;
};

export { Providers };
