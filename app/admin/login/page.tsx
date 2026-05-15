"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { OtpVerification } from "@/components/auth/OtpVerification";
import { motion, AnimatePresence } from "framer-motion";

type AuthStage = "login" | "otp";

export default function AdminLoginPage() {
  const [stage, setStage] = useState<AuthStage>("login");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Determine API URL for OTP sending
  const getApiUrl = (endpoint: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
                   (process.env.NODE_ENV === 'development' 
                     ? 'http://127.0.0.1:5001/isnapwebsite-71163/us-central1' 
                     : 'https://us-central1-isnapwebsite-71163.cloudfunctions.net');
    return `${baseUrl}/${endpoint}`;
  };

  const handleLoginSuccess = async (userEmail: string) => {
    setEmail(userEmail);
    
    // Trigger OTP sending on the backend
    try {
      await fetch(getApiUrl("sendOtp"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });
      setStage("otp");
    } catch (error) {
      console.error("Failed to trigger OTP:", error);
      // We still move to OTP stage to show the UI, but it might fail there
      setStage("otp");
    }
  };

  const handleOtpSuccess = () => {
    // Final redirect to the admin dashboard
    router.push("/admin");
  };

  return (
    <AuthLayout 
      title={stage === "login" ? "Enterprise Terminal" : "Security Gateway"}
      subtitle={stage === "login" 
        ? "Institutional-grade access protocol. Please authenticate to continue." 
        : "Two-step verification enabled. Enter the secure code dispatched to your identity."
      }
    >
      <AnimatePresence mode="wait">
        {stage === "login" ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <LoginForm onSuccess={handleLoginSuccess} />
          </motion.div>
        ) : (
          <motion.div
            key="otp"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <OtpVerification 
              email={email} 
              onBack={() => setStage("login")} 
              onSuccess={handleOtpSuccess} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
