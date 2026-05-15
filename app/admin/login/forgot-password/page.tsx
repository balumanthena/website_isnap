"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  KeyRound
} from "lucide-react";
import Link from "next/link";

const MotionDiv = motion.div as any;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Password reset error:", err);
      // For security, we show success even if user not found, 
      // but for admin terminals we can be a bit more specific if preferred.
      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid administrative email address.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many requests. Please try again later.");
      } else {
        // Generic success for security or error depending on preference
        // Letting the user know we've processed the request regardless
        setIsSubmitted(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Identity Recovery" 
      subtitle="Enter your verified administrator email to receive a secure password reset link."
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <MotionDiv
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-start gap-3 text-sm">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#666] ml-1">
                  Administrator Email
                </label>
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

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-14 rounded-xl bg-white text-black font-bold text-[14px] hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <KeyRound className="h-4 w-4" />
                    Dispatch Reset Link
                  </>
                )}
              </Button>
            </form>

            <Link 
              href="/admin/login" 
              className="flex items-center justify-center gap-2 text-[11px] font-bold text-[#444] hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return to Login
            </Link>
          </MotionDiv>
        ) : (
          <MotionDiv
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-bold text-lg">Recovery Dispatched</h3>
                <p className="text-[#666] text-sm max-w-[280px] mx-auto">
                  A secure reset link has been transmitted to <br/>
                  <span className="text-[#aaa] font-medium">{email}</span>
                </p>
              </div>
            </div>

            <div className="bg-[#050505] p-6 rounded-2xl border border-white/5 space-y-4">
              <p className="text-[12px] text-[#444] leading-relaxed">
                Please check your inbox (and spam folder). Reset links are valid for 60 minutes for security purposes.
              </p>
              <Link href="/admin/login" className="block w-full">
                <Button 
                  className="w-full h-12 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10"
                >
                  Back to Terminal
                </Button>
              </Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
