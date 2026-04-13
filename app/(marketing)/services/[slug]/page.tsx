import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePremiumLayout, type ProcessStep } from "@/components/services/ServicePremiumLayout";
import { closingPositioningStatement, servicesContent, type ServiceContent } from "../services-data";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

/** Exact copy from spec for Catalogue Listing Automation — wording unchanged. */
const catalogueListingPremiumExact = {
  processSteps: [
    { step: "01", text: "Data collection and structuring" },
    { step: "02", text: "Category mapping" },
    { step: "03", text: "Automated onboarding workflows" },
    { step: "04", text: "Compliance verification and approvals" },
    { step: "05", text: "Account activation and initial setup" }
  ] satisfies ProcessStep[],
  benefits: [
    "Faster go-live timelines",
    "Error-free onboarding",
    "Compliance-ready setup",
    "Multi-marketplace scalability"
  ],
  results: [
    "70% faster onboarding timelines",
    "98% approval success rate",
    "Reduced manual dependency by 60%"
  ],
  tools: [
    "Amazon Seller Central",
    "Flipkart Seller Hub",
    "API-based onboarding tools",
    "Internal automation dashboards"
  ],
  benefitsSupportingText:
    "We streamline product catalog creation and listing through automation, ensuring accuracy, speed, and marketplace compliance."
} as const;

function processStepsFromService(service: ServiceContent): ProcessStep[] {
  return service.process.map((text, index) => ({
    step: String(index + 1).padStart(2, "0"),
    text
  }));
}

export function generateStaticParams() {
  return servicesContent.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesContent.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "Service not found | ISNAP"
    };
  }

  return {
    title: `${service.title} | ISNAP Services`,
    description: service.overview
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesContent.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const isCatalogueListing = service.slug === "catalogue-listing-automation";

  const processSteps = isCatalogueListing
    ? [...catalogueListingPremiumExact.processSteps]
    : processStepsFromService(service);
  const benefits = isCatalogueListing ? [...catalogueListingPremiumExact.benefits] : [...service.benefits];
  const results = isCatalogueListing ? [...catalogueListingPremiumExact.results] : [...service.results];
  const tools = isCatalogueListing ? [...catalogueListingPremiumExact.tools] : [...service.tools];
  const benefitsSupportingText = isCatalogueListing
    ? catalogueListingPremiumExact.benefitsSupportingText
    : service.overview;

  return (
    <ServicePremiumLayout
      serviceLabel={`SERVICE ${service.number}`}
      title={service.title}
      overview={service.overview}
      processSteps={processSteps}
      benefits={benefits}
      benefitsSupportingText={benefitsSupportingText}
      results={results}
      tools={tools}
      closingStatement={closingPositioningStatement}
    />
  );
}
