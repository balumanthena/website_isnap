import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl bg-primary-600 p-10 text-white md:p-14">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Ready to scale with AI-first growth systems?</h2>
          <p className="mt-4 max-w-2xl text-primary-50">
            Partner with ISNAP to turn your eCommerce data into repeatable revenue gains.
          </p>
          <div className="mt-8">
            <Button variant="outline" className="border-white bg-white text-primary-700 hover:bg-primary-50">
              Talk to ISNAP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
