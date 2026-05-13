"use client";

import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "+", duration = 1.2, className }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [count, duration, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
