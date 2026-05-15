"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const MotionDiv = motion.div as any;

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center p-6 relative overflow-hidden font-sans">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, 
            backgroundSize: "40px 40px" 
          }} 
        />
        
        {/* Radial Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Animated Gradient Beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />
      </div>

      <MotionDiv 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[440px] z-10"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <LogoMark light className="h-10 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          {title && (
            <h1 className="text-[28px] font-bold text-white tracking-tight text-center">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-[#888] text-[14px] mt-2 text-center max-w-[320px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Card (Glassmorphism) */}
        <div className="relative group">
          {/* Animated Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 rounded-[28px] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-[#0d0d0d]/80 backdrop-blur-2xl border border-white/10 rounded-[28px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {children}
          </div>
        </div>

        {/* System Footer */}
        <div className="mt-8 flex flex-col items-center gap-4">
           <div className="flex items-center gap-6 opacity-40">
             <div className="h-[1px] w-12 bg-white" />
             <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
                Secure Protocol v4.0
             </p>
             <div className="h-[1px] w-12 bg-white" />
           </div>
           <p className="text-[9px] text-[#444] font-medium uppercase tracking-[0.1em] text-center">
              ISNAP Operating Systems • Distributed Ledger Auth • Protected Terminal
           </p>
        </div>
      </MotionDiv>
    </div>
  );
}
