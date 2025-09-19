import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function Page({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.main
      className={cn(className)}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
