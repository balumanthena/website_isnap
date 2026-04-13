"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>AI Growth Engine</Badge>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            ISNAP turns eCommerce data into predictable growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            We combine AI strategy, experimentation, and automation to improve acquisition, conversion, and retention for modern brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg">
              Get Growth Audit
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">View Services</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-3xl border border-primary-100 bg-white p-8 shadow-soft"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Live Performance Snapshot</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary-50 p-4">
                <p className="text-sm text-slate-600">Revenue Lift</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">+42%</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">CAC Reduction</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">-27%</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">Conversion Rate</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">5.6%</p>
              </div>
              <div className="rounded-xl bg-primary-50 p-4">
                <p className="text-sm text-slate-600">ROAS</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">4.8x</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
