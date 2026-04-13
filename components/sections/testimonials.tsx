import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "ISNAP helped us uncover hidden conversion blockers and increase monthly revenue by 38% in under one quarter.",
    name: "Ava Morgan",
    role: "Head of Growth, NORA Essentials"
  },
  {
    quote: "The team combines strategic thinking with fast execution. Their AI workflows became part of our core growth stack.",
    name: "Noah Patel",
    role: "Founder, Urban Loom"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Trusted by scaling brands</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-slate-50">
              <p className="text-base leading-relaxed text-slate-700">“{item.quote}”</p>
              <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-600">{item.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
