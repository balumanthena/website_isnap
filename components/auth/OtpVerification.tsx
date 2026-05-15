"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  RotateCcw, 
  ArrowLeft,
  Timer,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OtpVerificationProps {
  email: string;
  onBack: () => void;
  onSuccess: () => void;
}

const MotionDiv = motion.div as any;

export function OtpVerification({ email, onBack, onSuccess }: OtpVerificationProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown Timer Logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only numbers
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next field
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) return;

    setIsLoading(true);
    setError("");

    try {
      // Determine API URL for verification
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
                     (process.env.NODE_ENV === 'development' 
                       ? 'http://127.0.0.1:5001/isnapwebsite-71163/us-central1' 
                       : 'https://us-central1-isnapwebsite-71163.cloudfunctions.net');
      
      const response = await fetch(`${baseUrl}/verifyOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: fullOtp }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => onSuccess(), 1500);
      } else {
        setError(result.message || "Invalid verification code.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError("Network error. Could not verify OTP.");
      setIsLoading(false);
    }
  };

  // Auto-submit when all 6 digits are filled
  useEffect(() => {
    if (otp.join("").length === 6) {
      handleVerify();
    }
  }, [otp]);

  const handleResend = async () => {
    if (!canResend) return;
    setIsLoading(true);
    setError("");
    
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
                     (process.env.NODE_ENV === 'development' 
                       ? 'http://127.0.0.1:5001/isnapwebsite-71163/us-central1' 
                       : 'https://us-central1-isnapwebsite-71163.cloudfunctions.net');
                       
      await fetch(`${baseUrl}/sendOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setTimer(300);
      setCanResend(false);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to resend code.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-white font-bold text-lg">Verification Required</h3>
        <p className="text-[#666] text-sm">
          A secure access code has been dispatched to: <br/>
          <span className="text-[#aaa] font-medium">{email}</span>
        </p>
      </div>

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

      <div className="flex justify-center gap-2.5">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={cn(
              "w-12 h-16 bg-[#050505] border-white/5 text-white text-center text-2xl font-bold rounded-xl focus:border-white/30 focus:bg-white/5 outline-none transition-all duration-300",
              digit && "border-white/20 bg-white/5",
              isSuccess && "border-emerald-500/50 bg-emerald-500/10 text-emerald-500"
            )}
            disabled={isLoading || isSuccess}
          />
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#444] uppercase tracking-widest">
            <Timer className="h-3 w-3" />
            Code Expires In: <span className={cn("text-white", timer < 60 && "text-red-500")}>{formatTime(timer)}</span>
          </div>
          <button
            onClick={handleResend}
            disabled={!canResend || isLoading}
            className={cn(
              "flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors",
              canResend ? "text-[#888] hover:text-white" : "text-[#222] cursor-not-allowed"
            )}
          >
            <RotateCcw className="h-3 w-3" />
            Resend Security Code
          </button>
        </div>

        <div className="pt-2 flex flex-col gap-4">
          <Button 
            onClick={() => handleVerify()}
            disabled={isLoading || isSuccess || otp.join("").length < 6}
            className={cn(
              "w-full h-14 rounded-xl font-bold text-[14px] transition-all duration-500 flex items-center justify-center gap-2",
              isSuccess ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Identity Verified
              </>
            ) : (
              <>
                <ShieldCheck className="h-4 w-4" />
                Finalize Authentication
              </>
            )}
          </Button>

          <button
            onClick={onBack}
            className="text-[11px] font-bold text-[#444] hover:text-white transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Identity Check
          </button>
        </div>
      </div>
    </div>
  );
}
