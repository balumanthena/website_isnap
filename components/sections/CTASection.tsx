import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-600 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:22px_22px]" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Ready to take your brand online?</h2>
          <p className="mt-4 text-lg text-primary-50">
            Partner with ISNAP to launch faster, sell smarter, and build sustained marketplace momentum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="secondary" size="lg" className="border-white bg-white text-primary-600 hover:bg-primary-50">
              Get Started Free
            </Button>
            <Button size="lg" className="border border-white bg-transparent text-white hover:bg-white/10">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
