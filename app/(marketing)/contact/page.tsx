"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/Textarea";
import { addLead, PLATFORM_OPTIONS } from "@/lib/leads";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, Share2, Send, Camera, CheckCircle2 } from "lucide-react";

const leadSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().min(2, "Company Name is required"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  platformInterest: z.array(z.enum(PLATFORM_OPTIONS)).min(1, "Select at least one platform"),
  message: z.string().min(10, "Message should be at least 10 characters")
});

type LeadFormValues = z.infer<typeof leadSchema>;

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      platformInterest: [],
      message: ""
    }
  });

  const selectedPlatforms = watch("platformInterest");

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError(null);

    try {
      await addLead({
        ...values,
        source: "contact_page"
      });
      setIsSuccess(true);
      reset();
    } catch (_error) {
      setSubmitError("Something went wrong while sending your message. Please try again.");
    }
  };

  const MotionDiv = motion.div as any;

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT: Strategic Positioning */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5"
          >
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Strategic Partnerships</p>
                </div>
                <h1 className="section-heading mb-8">
                  Let&apos;s talk <br />
                  <span className="text-enterprise-green">growth velocity.</span>
                </h1>
                <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-md">
                  Ready to activate your brand&apos;s marketplace infrastructure? Reach out to our strategists for an institutional audit.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Headquarters", content: "HiTech City, Plot no. 90/3, Kavurihills, Hyderabad 500081" },
                  { icon: Phone, title: "Operations", content: "+91 90526 40916" },
                  { icon: Mail, title: "Governance", content: "support@isnap.in" },
                  { icon: Clock, title: "Uptime", content: "Mon - Sat, 10:00 AM - 7:00 PM IST" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl border border-enterprise-border bg-enterprise-bg group-hover:bg-enterprise-text group-hover:text-white transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted mb-1">{item.title}</p>
                      <p className="text-[15px] font-bold text-enterprise-text leading-tight">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {[Share2, Send].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-enterprise-border bg-white text-enterprise-text hover:bg-enterprise-text hover:text-white transition-all shadow-sm"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* RIGHT: High-Fidelity Lead Form */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-enterprise-border rounded-[40px] p-8 md:p-12 shadow-premium relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-enterprise-green rounded-t-[40px]" />
              
              <h2 className="text-3xl font-bold text-enterprise-text tracking-tight mb-4">Inquiry Terminal</h2>
              <p className="text-enterprise-text-muted mb-10 leading-relaxed max-w-lg">Our architects will analyze your brand profile and initiate a protocol review within 24 hours.</p>

              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
                {isSuccess ? (
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-6 bg-enterprise-bg/20 rounded-[32px] border border-enterprise-border"
                  >
                    <div className="h-20 w-20 rounded-full bg-enterprise-green flex items-center justify-center text-enterprise-text shadow-xl shadow-enterprise-green/20">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-enterprise-text">Inquiry Logged</h3>
                      <p className="text-enterprise-text-muted">Your message has been transmitted to our strategic hub.</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-2xl border-enterprise-border hover:bg-white transition-all h-12 px-8">Send New Message</Button>
                  </MotionDiv>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Full Name*</label>
                        <Input 
                          {...register("fullName")} 
                          placeholder="Enter name" 
                          className="bg-enterprise-bg/20 border-transparent focus:bg-white focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 h-14 rounded-2xl px-6 transition-all"
                        />
                        {errors.fullName && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.fullName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Company Name*</label>
                        <Input 
                          {...register("companyName")} 
                          placeholder="Enter company" 
                          className="bg-enterprise-bg/20 border-transparent focus:bg-white focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 h-14 rounded-2xl px-6 transition-all"
                        />
                        {errors.companyName && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.companyName.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Phone Number*</label>
                        <Input 
                          {...register("phone")} 
                          placeholder="+91..." 
                          className="bg-enterprise-bg/20 border-transparent focus:bg-white focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 h-14 rounded-2xl px-6 transition-all"
                        />
                        {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Work Email*</label>
                        <Input 
                          {...register("email")} 
                          type="email" 
                          placeholder="email@company.com" 
                          className="bg-enterprise-bg/20 border-transparent focus:bg-white focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 h-14 rounded-2xl px-6 transition-all"
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Platforms of Interest*</p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {PLATFORM_OPTIONS.map((platform) => {
                          const checked = selectedPlatforms.includes(platform);
                          return (
                            <label
                              key={platform}
                              className={cn(
                                "group flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all duration-300",
                                checked 
                                  ? "bg-enterprise-text border-enterprise-text text-white" 
                                  : "bg-enterprise-bg/20 border-transparent hover:border-enterprise-green/30 hover:bg-white"
                              )}
                            >
                              <span className="text-[11px] font-bold uppercase tracking-tight">{platform}</span>
                              <div className="relative flex h-5 w-5 items-center justify-center">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={(event) => {
                                    const nextValues = event.target.checked
                                      ? [...selectedPlatforms, platform]
                                      : selectedPlatforms.filter((item) => item !== platform);
                                    setValue("platformInterest", nextValues, { shouldValidate: true });
                                  }}
                                  className="peer h-5 w-5 cursor-pointer opacity-0 absolute z-10"
                                />
                                <div className={cn(
                                  "h-4 w-4 rounded-full border-2 transition-all flex items-center justify-center",
                                  checked ? "bg-enterprise-green border-enterprise-green" : "border-enterprise-border group-hover:border-enterprise-green/50"
                                )}>
                                  {checked && <div className="h-1.5 w-1.5 rounded-full bg-enterprise-text" />}
                                </div>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                      {errors.platformInterest && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.platformInterest.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted ml-1">Strategic Goals</label>
                      <Textarea 
                        {...register("message")} 
                        placeholder="Tell us about your brand vision..." 
                        className="bg-enterprise-bg/20 border-transparent focus:bg-white focus:border-enterprise-green/50 focus:ring-4 focus:ring-enterprise-green/5 rounded-2xl p-6 min-h-[140px] resize-none transition-all"
                      />
                      {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.message.message}</p>}
                    </div>

                    {submitError && <p className="text-[10px] font-bold text-red-500 bg-red-50 p-4 rounded-2xl border border-red-100 uppercase tracking-widest">{submitError}</p>}

                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full h-16 rounded-2xl bg-enterprise-text text-white text-[13px] font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all shadow-xl shadow-enterprise-text/10 active:scale-[0.98]"
                    >
                      {isSubmitting ? "Transmitting..." : "Send Strategic Inquiry"}
                    </Button>
                  </>
                )}
              </form>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
