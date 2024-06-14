"use client";
import { BadgeInfoProvider } from "@/context";
import { ThemeProvider } from "@/context/ThemeContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <BadgeInfoProvider>{children}</BadgeInfoProvider>
    </ThemeProvider>
  );
};
