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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 6.75h4V21h-4V10.25ZM10 10.25h3.83v1.47h.06c.53-1.01 1.84-2.07 3.8-2.07 4.06 0 4.81 2.48 4.81 5.71V21h-4v-4.95c0-1.18-.03-2.7-1.78-2.7s-2.05 1.29-2.05 2.62V21h-4V10.25Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.901 3H21l-4.584 5.238L21.8 21h-4.22l-3.305-4.283L10.45 21H8.35l4.903-5.605L2.2 3h4.33l2.987 3.93L12.948 3h1.997l-4.49 5.157 3.998 5.255L18.9 3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CheckmarkSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-xl border border-primary-100 bg-primary-50 p-4"
    >
      <div className="flex items-center gap-3">
        <motion.svg
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          viewBox="0 0 24 24"
          className="h-6 w-6 text-primary-600"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12.5l2.6 2.6L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        <p className="text-sm font-medium text-primary-700">We'll be in touch within 24 hours.</p>
      </div>
    </motion.div>
  );
}

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
    <section className="py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-5">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2"
        >
          <Link href="/" className="inline-flex items-center gap-1">
            <span className="font-heading text-xl font-bold tracking-tight text-primary-600">IS</span>
            <span className="font-heading text-xl font-bold tracking-tight text-slate-900">NAP</span>
          </Link>
          <h1 className="mt-6 font-heading text-3xl font-bold text-slate-900">Let's talk growth</h1>

          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-900">Address:</span> Hitech City, Hyderabad
            </p>
            <p>
              <span className="font-medium text-slate-900">Phone:</span> +91 9052640916
            </p>
            <p>
              <span className="font-medium text-slate-900">Email:</span> support@isnap.in
            </p>
            <p>
              <span className="font-medium text-slate-900">Office Hours:</span> Mon-Sat, 10:00 AM - 7:00 PM IST
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 text-slate-600">
            <a
              href="https://www.linkedin.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-400">Office Location</p>
            <div className="mt-3 rounded-md border border-slate-200 bg-white p-4">
              <p className="text-sm font-medium text-slate-900">Hitech City, Hyderabad</p>
              <p className="mt-1 text-xs text-slate-500">Map placeholder - embed Google Maps iframe here when API key is configured.</p>
            </div>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-3"
        >
          <h2 className="font-heading text-2xl font-bold text-slate-900">Tell us about your growth goals</h2>
          <p className="mt-2 text-sm text-slate-600">Share a few details and our team will reach out with the right next steps.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Full Name*</label>
                <Input {...register("fullName")} placeholder="Enter your full name" />
                {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Company Name*</label>
                <Input {...register("companyName")} placeholder="Enter company name" />
                {errors.companyName ? <p className="mt-1 text-xs text-red-600">{errors.companyName.message}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Phone*</label>
                <Input {...register("phone")} placeholder="Enter phone number" />
                {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email*</label>
                <Input {...register("email")} type="email" placeholder="Enter email address" />
                {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">Platform Interest*</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {PLATFORM_OPTIONS.map((platform) => {
                  const checked = selectedPlatforms.includes(platform);

                  return (
                    <label
                      key={platform}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) => {
                          const nextValues = event.target.checked
                            ? [...selectedPlatforms, platform]
                            : selectedPlatforms.filter((item) => item !== platform);

                          setValue("platformInterest", nextValues, { shouldValidate: true });
                        }}
                        className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600"
                      />
                      <span>{platform}</span>
                    </label>
                  );
                })}
              </div>
              {errors.platformInterest ? <p className="mt-1 text-xs text-red-600">{errors.platformInterest.message}</p> : null}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <Textarea {...register("message")} placeholder="Tell us about your products, channels, and growth goals." />
              {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
            </div>

            {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
            {isSuccess ? <CheckmarkSuccess /> : null}

            <Button type="submit" loading={isSubmitting} className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
