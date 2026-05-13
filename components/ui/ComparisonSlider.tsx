"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function ComparisonSlider({ beforeImage, afterImage }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full rounded-[40px] overflow-hidden cursor-ew-resize shadow-2xl select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="Optimized Catalog"
        fill
        className="object-cover"
        priority
      />

      {/* Before Image (Foreground Clip) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Raw Marketplace Listing"
          fill
          className="object-cover"
          priority
        />
        {/* Label Before */}
        <div className="absolute top-8 left-8 z-20 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
          Raw Listing
        </div>
      </div>

      {/* Label After */}
      <div className="absolute top-8 right-8 z-20 px-4 py-2 rounded-full bg-enterprise-green backdrop-blur-md border border-black/10 text-[10px] font-bold text-enterprise-text uppercase tracking-widest">
        ISNAP Optimized
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-enterprise-green flex items-center justify-center shadow-2xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-enterprise-text">
            <path d="M7 12L2 12M2 12L5 9M2 12L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 12L22 12M22 12L19 9M22 12L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
