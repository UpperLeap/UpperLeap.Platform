"use client";
import { ReactLenis } from "lenis/react";

export default function LenisScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
  // return <ReactLenis root>{children}</ReactLenis>;
}
