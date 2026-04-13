"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface ScrollFadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollFadeInSection({ children, delay = 0 }: ScrollFadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
