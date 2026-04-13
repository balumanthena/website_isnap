import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { HumanTrustSection } from "@/components/sections/HumanTrustSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ScrollFadeInSection } from "@/components/sections/ScrollFadeInSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpotlightGridSection } from "@/components/sections/SpotlightGridSection";
import { ProductIntelligenceSection } from "@/components/sections/ProductIntelligenceSection";
import SmartCommerceShowcase from "@/components/sections/SmartCommerceShowcase";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import StripeSessionsBanner from "@/components/sections/StripeSessionsBanner";

export default function HomePage() {
  return (
    <>
      <ScrollFadeInSection>
        <HeroSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <SmartCommerceShowcase />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <ProductIntelligenceSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <HowItWorksSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <ServicesSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <IndustriesSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <StatsSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <HumanTrustSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <TestimonialsSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <SpotlightGridSection />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <StripeSessionsBanner />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <CTASection />
      </ScrollFadeInSection>
    </>
  );
}
