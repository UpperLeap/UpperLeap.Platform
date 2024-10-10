"use client";

import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Fade({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: direction === "up" ? 25 : direction === "down" ? -25 : 0,
          x: direction === "left" ? 25 : direction === "right" ? -25 : 0,
        },
        visible: {
          opacity: 1,
          y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
          x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
