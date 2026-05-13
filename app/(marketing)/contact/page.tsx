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

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50/50">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-black blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-black blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Contact Information Card */}
          <motion.div
            {...({
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              className: "lg:col-span-5 space-y-12"
            } as any)}
          >
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-1.5 group">
                <span className="font-heading text-2xl font-black tracking-tighter text-black uppercase">IS</span>
                <span className="font-heading text-2xl font-black tracking-tighter text-slate-400 uppercase group-hover:text-black transition-colors">NAP</span>
              </Link>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[0.95]">
                Let&apos;s talk <br />
                <span className="text-slate-400 italic">growth.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                Ready to scale your marketplace presence? Reach out to our experts for a personalized acceleration strategy.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                { icon: MapPin, title: "Headquarters", content: "HiTech City, Plot no. 90/3, Kavurihills, Madhapur, Hyderabad 500081" },
                { icon: Phone, title: "Phone", content: "+91 90526 40916" },
                { icon: Mail, title: "Email", content: "support@isnap.in" },
                { icon: Clock, title: "Business Hours", content: "Mon - Sat, 10:00 AM - 7:00 PM IST" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.title}</p>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex items-center gap-4">
              {[
                { icon: Share2, href: "#", label: "LinkedIn" },
                { icon: Send, href: "#", label: "Twitter" },
                { icon: Camera, href: "#", label: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-black hover:text-black hover:shadow-lg active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            {...({
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
              className: "lg:col-span-7"
            } as any)}
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-white to-slate-200 shadow-2xl">
              <div className="bg-white rounded-[2.25rem] p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Share your details</h2>
                <p className="mt-2 text-slate-500 mb-10 leading-relaxed">Our strategists will analyze your profile and get back to you within 24 hours.</p>

                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
                  {isSuccess ? (
                    <motion.div 
                      {...({
                        initial: { opacity: 0, scale: 0.95 },
                        animate: { opacity: 1, scale: 1 },
                        className: "flex flex-col items-center justify-center py-12 text-center space-y-4 bg-slate-50 rounded-3xl border border-slate-100"
                      } as any)}
                    >
                      <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center text-white">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                        <p className="text-slate-500">We&apos;ll be in touch very soon.</p>
                      </div>
                      <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">Send another message</Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name*</label>
                          <Input 
                            {...register("fullName")} 
                            placeholder="Enter name" 
                            className="bg-slate-50/50 border-transparent focus:bg-white focus:border-slate-200 h-14 rounded-2xl px-6"
                          />
                          {errors.fullName && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.fullName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Company Name*</label>
                          <Input 
                            {...register("companyName")} 
                            placeholder="Enter company" 
                            className="bg-slate-50/50 border-transparent focus:bg-white focus:border-slate-200 h-14 rounded-2xl px-6"
                          />
                          {errors.companyName && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.companyName.message}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number*</label>
                          <Input 
                            {...register("phone")} 
                            placeholder="+91..." 
                            className="bg-slate-50/50 border-transparent focus:bg-white focus:border-slate-200 h-14 rounded-2xl px-6"
                          />
                          {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email*</label>
                          <Input 
                            {...register("email")} 
                            type="email" 
                            placeholder="email@company.com" 
                            className="bg-slate-50/50 border-transparent focus:bg-white focus:border-slate-200 h-14 rounded-2xl px-6"
                          />
                          {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Platforms of Interest*</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {PLATFORM_OPTIONS.map((platform) => {
                            const checked = selectedPlatforms.includes(platform);
                            return (
                              <label
                                key={platform}
                                className={cn(
                                  "group flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all duration-200",
                                  checked 
                                    ? "bg-black border-black text-white shadow-lg shadow-black/5" 
                                    : "bg-slate-50/50 border-transparent hover:border-slate-200 hover:bg-white"
                                )}
                              >
                                <span className="text-sm font-semibold">{platform}</span>
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
                                    "h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center",
                                    checked ? "bg-white border-white" : "border-slate-300 group-hover:border-slate-400"
                                  )}>
                                    {checked && <div className="h-2 w-2 rounded-full bg-black" />}
                                  </div>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                        {errors.platformInterest && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.platformInterest.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                        <Textarea 
                          {...register("message")} 
                          placeholder="Tell us about your goals..." 
                          className="bg-slate-50/50 border-transparent focus:bg-white focus:border-slate-200 rounded-2xl p-6 min-h-[120px] resize-none"
                        />
                        {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 ml-1">{errors.message.message}</p>}
                      </div>

                      {submitError && <p className="text-sm font-bold text-red-500 bg-red-50 p-4 rounded-xl border border-red-100">{submitError}</p>}

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full h-16 rounded-2xl bg-black text-white text-base font-bold hover:bg-slate-800 transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
                      >
                        {isSubmitting ? "Processing..." : "Send Message"}
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
