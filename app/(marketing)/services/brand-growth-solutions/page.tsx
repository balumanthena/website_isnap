"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { PerformancePulseUI, OnboardingStatusUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function BrandGrowthSolutionsPage() {
  return (
    <SolutionArchitectureLayout
      label="Strategic Enterprise Growth"
      title="Scale Your Brand into a Global Leader."
      description="We replace fragmented growth experiments with a unified institutional scaling framework. Our growth architects deploy proprietary capital and operational strategies to maximize your revenue velocity across every commerce node."
      heroImage="/brand_growth_performance_analytics_1778574866416.png"
      metrics={[
        { label: "Revenue Growth", value: "3x-10x", trend: "High Velocity" },
        { label: "Market Share", value: "+42%", trend: "Dominant" },
        { label: "Brand Equity", value: "Premium", trend: "Institutional" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Enterprise Growth Audit", 
          text: "Deep-dive analysis of your current market positioning, unit economics, and operational infrastructure to identify high-velocity growth pockets." 
        },
        { 
          step: "02", 
          title: "Omnichannel Scaling Framework", 
          text: "Development of a unified growth protocol that synchronizes performance marketing, catalog optimization, and inventory states across global channels." 
        },
        { 
          step: "03", 
          title: "Creative Authority Alignment", 
          text: "Execution of high-fidelity brand assets and product narratives designed to build long-term authority and premium market positioning." 
        },
        { 
          step: "04", 
          title: "Continuous ROI Governance", 
          text: "Real-time capital optimization through ISNAP's centralized growth terminal, ensuring every rupee of investment drives maximum enterprise value." 
        }
      ]}
      features={[
        {
          title: "Growth Performance Terminal",
          description: "Maintain absolute visibility into your brand's growth trajectory and ROI velocity through a high-performance terminal designed for executive leadership.",
          visual: <PerformancePulseUI />
        },
        {
          title: "Operational Orchestration",
          description: "Seamlessly connect your growth strategies with physical fulfillment and marketplace health through our unified command hub.",
          visual: <OnboardingStatusUI />
        }
      ]}
    />
  );
}
