"use client";

import React from "react";
import { UIProvider } from "@repo/ui/components/providers";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <UIProvider>{children}</UIProvider>;
};

export default Providers;
