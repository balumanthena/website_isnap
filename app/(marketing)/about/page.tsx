import { Card } from "@/components/ui/card";

const principles = [
  "Own outcomes, not outputs",
  "Move quickly with disciplined experimentation",
  "Build systems that scale beyond manual effort"
];

export default function AboutPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">About ISNAP</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          ISNAP is an AI-powered eCommerce growth partner focused on helping brands accelerate revenue with intelligent strategy, automation, and rapid experimentation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle} className="bg-slate-50">
              <p className="font-medium text-slate-800">{principle}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
