"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  Keyboard
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onSuccess: (email: string) => void;
}

const MotionDiv = motion.div as any;

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Caps Lock Detection
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.getModifierState && e.getModifierState("CapsLock")) {
        setCapsLock(true);
      } else {
        setCapsLock(false);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  // Simple Password Strength Logic
  useEffect(() => {
    let strength = 0;
    if (password.length > 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  }, [password]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1. Authenticate with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      
      // 2. If successful, notify parent to move to OTP stage
      onSuccess(email);
    } catch (err: any) {
      console.error("Login failed:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Access denied.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Security alert: Too many attempts. Locked.");
      } else {
        setError("Authentication terminal error. Try again.");
      }
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <AnimatePresence mode="wait">
        {error && (
          <MotionDiv 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-start gap-3 text-sm"
          >
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <p>{error}</p>
          </MotionDiv>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {/* Email Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#666]">
              Administrator Identity
            </label>
          </div>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#444] group-focus-within:text-white transition-colors">
              <Mail className="h-4 w-4" />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@isnap.in"
              required
              className="bg-[#050505] border-white/5 text-white focus:border-white/20 h-14 rounded-xl pl-12 transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#666]">
              Secure Passkey
            </label>
            {capsLock && (
              <span className="flex items-center gap-1 text-[9px] font-bold text-amber-500 uppercase tracking-wider animate-pulse">
                <Keyboard className="h-3 w-3" /> Caps Lock On
              </span>
            )}
          </div>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#444] group-focus-within:text-white transition-colors">
              <Lock className="h-4 w-4" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="bg-[#050505] border-white/5 text-white focus:border-white/20 h-14 rounded-xl pl-12 pr-12 transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#444] hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {password.length > 0 && (
            <div className="px-1 pt-1">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <MotionDiv 
                  initial={{ width: 0 }}
                  animate={{ width: `${passwordStrength}%` }}
                  className={cn(
                    "h-full transition-colors duration-500",
                    passwordStrength <= 25 ? "bg-red-500" :
                    passwordStrength <= 50 ? "bg-amber-500" :
                    passwordStrength <= 75 ? "bg-blue-500" : "bg-emerald-500"
                  )}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <p className="text-[9px] text-[#444] font-bold uppercase tracking-widest">Entropy Check</p>
                <p className={cn(
                  "text-[9px] font-bold uppercase tracking-widest",
                  passwordStrength <= 25 ? "text-red-500" :
                  passwordStrength <= 50 ? "text-amber-500" :
                  passwordStrength <= 75 ? "text-blue-500" : "text-emerald-500"
                )}>
                  {passwordStrength <= 25 ? "Weak" :
                   passwordStrength <= 50 ? "Medium" :
                   passwordStrength <= 75 ? "Strong" : "Institutional"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-14 rounded-xl bg-white text-black font-bold text-[14px] hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden relative"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <span className="relative z-10">Initiate Secure Login</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              {/* Button Ripple Effect Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </>
          )}
        </Button>

        <div className="flex justify-between items-center px-1">
          <Link 
            href="/admin/login/forgot-password" 
            className="text-[11px] font-bold text-[#444] hover:text-white transition-colors uppercase tracking-widest"
          >
            Identity Recovery
          </Link>
          <div className="flex items-center gap-1.5 opacity-40">
            <ShieldCheck className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">E2E Encrypted</span>
          </div>
        </div>
      </div>
    </form>
  );
}
