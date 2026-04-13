import { BoltIcon, ChartBarIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "AI-Powered CRO",
    description: "Deploy data-driven experiments that increase checkout and repeat purchase conversion.",
    icon: ChartBarIcon
  },
  {
    title: "Acquisition Intelligence",
    description: "Optimize paid and organic channels with predictive targeting and creative testing.",
    icon: CpuChipIcon
  },
  {
    title: "Lifecycle Automation",
    description: "Build personalized retention flows that drive higher LTV with less manual effort.",
    icon: BoltIcon
  }
];

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Services built for high-growth eCommerce teams
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Every engagement combines strategy, execution, and rapid feedback loops to deliver measurable business impact.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <service.icon className="h-7 w-7 text-primary-600" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
