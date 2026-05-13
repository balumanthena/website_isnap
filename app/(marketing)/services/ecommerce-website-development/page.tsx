"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { PerformancePulseUI, CatalogIntelligenceUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function EcommerceDevPage() {
  return (
    <SolutionArchitectureLayout
      label="Technical Infrastructure"
      title="High-Performance Stores Engineered for Revenue."
      description="We build more than just websites. We engineer high-velocity commerce engines on Shopify Plus and custom headless stacks designed for global scale, speed, and conversion dominance."
      heroImage="/ecommerce_architecture_mockup_1778575044965.png"
      metrics={[
        { label: "Lighthouse Score", value: "99+", trend: "Performance" },
        { label: "Conversion Lift", value: "+45%", trend: "Optimized" },
        { label: "Load Velocity", value: "<1.2s", trend: "Sub-Second" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Technical Discovery & UX Audit", 
          text: "Deep-dive analysis of your brand's technical requirements, conversion bottlenecks, and operational workflows to define a high-performance roadmap." 
        },
        { 
          step: "02", 
          title: "Architecture & Headless Design", 
          text: "Development of a scalable architecture using Shopify Plus or custom headless frameworks for maximum speed and creative flexibility." 
        },
        { 
          step: "03", 
          title: "Revenue-First Engineering", 
          text: "Execution of a high-conversion frontend designed for mobile-first shoppers and integrated with enterprise-grade backend systems." 
        },
        { 
          step: "04", 
          title: "Ecosystem Synchronization", 
          text: "Integration with ISNAP's central orchestrator to ensure seamless inventory, order, and catalog sync across all commerce nodes." 
        }
      ]}
      features={[
        {
          title: "Enterprise Growth Terminal",
          description: "Real-time visibility into your store's conversion velocity and revenue performance, integrated directly with your marketing and logistics stack.",
          visual: <PerformancePulseUI />
        },
        {
          title: "Catalog Orchestration",
          description: "Seamlessly synchronize your product data across your brand store and global marketplaces with 100% technical accuracy.",
          visual: <CatalogIntelligenceUI />
        }
      ]}
    />
  );
}
