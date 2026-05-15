"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { 
  BuildingOfficeIcon, 
  EnvelopeIcon, 
  UserIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

export function GetStartedForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    brandName: "",
    monthlyVolume: "",
    marketplaces: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Starting Protocol Activation...", formData);
    setLoading(true);
    
    try {
      // 1. Save to Firestore for Admin Dashboard
      await addDoc(collection(db, "onboarding_requests"), {
        ...formData,
        status: "new",
        type: "onboarding",
        createdAt: serverTimestamp()
      });

      // 2. Trigger Email Notification (existing API)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `NEW ONBOARDING: ${formData.brandName}`
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  const MotionDiv = motion.div as any;

  if (submitted) {
    return (
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-6"
      >
        <div className="text-center mb-12">
          <div className="h-24 w-24 rounded-full bg-enterprise-green/10 flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-enterprise-green/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <CheckCircleIcon className="h-12 w-12 text-enterprise-green relative z-10" />
          </div>
          <h2 className="text-3xl font-bold text-enterprise-text mb-4 tracking-tight">Onboarding Initiated.</h2>
          <p className="text-enterprise-text-muted text-[15px] leading-relaxed max-w-[340px] mx-auto">
            Your protocol request for <span className="font-bold text-enterprise-text">{formData.brandName}</span> has been securely logged into the ISNAP ecosystem.
          </p>
        </div>

        {/* Next Steps Roadmap */}
        <div className="bg-enterprise-bg/20 rounded-[32px] p-8 border border-enterprise-border mb-12">
           <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-[0.2em] mb-8 text-center">Next Steps Roadmap</p>
           <div className="space-y-8 relative">
              {/* Connector Line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-enterprise-border" />
              
              {[
                { title: "Protocol Audit", desc: "Our architects review your marketplace footprint.", status: "In Progress" },
                { title: "Consultation Call", desc: "Strategy session with an enterprise account executive.", status: "Pending" },
                { title: "Global Activation", desc: "Deployment across India's commerce networks.", status: "Pending" }
              ].map((step, i) => (
                <div key={step.title} className="flex gap-6 relative z-10">
                   <div className={cn(
                     "h-8 w-8 rounded-full flex items-center justify-center border-2 text-[12px] font-bold transition-all duration-500",
                     i === 0 ? "bg-enterprise-green border-enterprise-green text-enterprise-text" : "bg-white border-enterprise-border text-enterprise-text/30"
                   )}>
                      {i + 1}
                   </div>
                   <div>
                      <h4 className={cn("text-[14px] font-bold tracking-tight", i === 0 ? "text-enterprise-text" : "text-enterprise-text/40")}>{step.title}</h4>
                      <p className="text-[12px] text-enterprise-text-muted mt-1 leading-snug">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            className="bg-enterprise-text text-white hover:bg-enterprise-green hover:text-enterprise-text rounded-2xl h-14 w-full uppercase font-bold tracking-widest transition-all shadow-xl shadow-enterprise-text/10"
            onClick={() => window.location.href = "/"}
          >
            Return to Terminal
          </Button>
          <p className="text-[9px] text-enterprise-text-muted font-bold uppercase tracking-[0.2em] text-center">Ref ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
        </div>
      </MotionDiv>
    );
  }

  function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <MotionDiv
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <label className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-[0.2em] ml-1">Identity & Channel</label>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-enterprise-text/20 group-focus-within:text-enterprise-green transition-colors">
                  <UserIcon className="h-5 w-5" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-enterprise-bg/20 border border-enterprise-border rounded-2xl py-4 pl-12 pr-4 text-enterprise-text placeholder:text-enterprise-text/30 focus:outline-none focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 focus:bg-white transition-all"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-enterprise-text/20 group-focus-within:text-enterprise-green transition-colors">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Business Email"
                  className="w-full bg-enterprise-bg/20 border border-enterprise-border rounded-2xl py-4 pl-12 pr-4 text-enterprise-text placeholder:text-enterprise-text/30 focus:outline-none focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 focus:bg-white transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-enterprise-text/20 group-focus-within:text-enterprise-green transition-colors">
                  <BuildingOfficeIcon className="h-5 w-5" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Brand Name"
                  className="w-full bg-enterprise-bg/20 border border-enterprise-border rounded-2xl py-4 pl-12 pr-4 text-enterprise-text placeholder:text-enterprise-text/30 focus:outline-none focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 focus:bg-white transition-all"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                />
              </div>
            </div>

            <Button 
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.fullName || !formData.email || !formData.brandName}
              className="w-full h-14 rounded-2xl bg-enterprise-text text-white font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all group shadow-xl shadow-enterprise-text/10"
            >
              Requirements Audit <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MotionDiv>
        ) : (
          <MotionDiv
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <label className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-[0.2em] ml-1">Scale & Strategy</label>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-enterprise-text/20 group-focus-within:text-enterprise-green transition-colors z-10">
                  <ChartBarIcon className="h-5 w-5" />
                </div>
                <select
                  required
                  className="w-full bg-enterprise-bg/20 border border-enterprise-border rounded-2xl py-4 pl-12 pr-4 text-enterprise-text appearance-none focus:outline-none focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 focus:bg-white transition-all"
                  value={formData.monthlyVolume}
                  onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                >
                  <option value="">Current Monthly Revenue</option>
                  <option value="0-10L">₹0 - ₹10 Lakhs</option>
                  <option value="10-50L">₹10 - ₹50 Lakhs</option>
                  <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1Cr+">₹1 Crore +</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-enterprise-text/20">
                  <ChevronDownIcon className="h-4 w-4" />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-4 text-enterprise-text/20 group-focus-within:text-enterprise-green transition-colors">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                <textarea
                  placeholder="Tell us about your marketplace goals..."
                  rows={4}
                  className="w-full bg-enterprise-bg/20 border border-enterprise-border rounded-2xl py-4 pl-12 pr-4 text-enterprise-text placeholder:text-enterprise-text/30 focus:outline-none focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 focus:bg-white transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                className="h-14 border-enterprise-border text-enterprise-text hover:bg-enterprise-bg rounded-2xl px-6 font-bold uppercase tracking-widest text-[11px]"
              >
                Back
              </Button>
              <Button 
                type="submit"
                disabled={loading || !formData.monthlyVolume}
                className="flex-1 h-14 rounded-2xl bg-enterprise-green text-enterprise-text font-bold uppercase tracking-widest hover:bg-enterprise-text hover:text-white transition-all shadow-xl shadow-enterprise-green/20"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-enterprise-text/20 border-t-enterprise-text rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : "Activate Onboarding"}
              </Button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </form>
  );
}
