"use client";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export default function NextUiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
