"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { PerformancePulseUI, OnboardingStatusUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function DigitalMarketingPage() {
  return (
    <SolutionArchitectureLayout
      label="Strategic Growth Engine"
      title="Dominant Revenue Velocity Across Global Channels."
      description="We move beyond basic ad placement into full-funnel revenue orchestration. Our performance teams deploy institutional-grade capital strategies across Meta, Google, and YouTube to maximize your marketplace share."
      heroImage="/brand_growth_performance_analytics_1778574866416.png"
      metrics={[
        { label: "Average ROAS", value: "5.8x", trend: "High Velocity" },
        { label: "CPA Reduction", value: "50%", trend: "Optimized" },
        { label: "Market Share", value: "+32%", trend: "Dominant" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Market share & Competitor Analysis", 
          text: "Mapping the digital landscape to identify high-velocity growth pockets and competitor vulnerabilities in your specific marketplace segment." 
        },
        { 
          step: "02", 
          title: "Full-Funnel Campaign Architecture", 
          text: "Development of a unified ad strategy that synchronizes awareness, consideration, and conversion across Meta, Google, and YouTube." 
        },
        { 
          step: "03", 
          title: "Creative Intelligence Deployment", 
          text: "Execution of high-fidelity, marketplace-compliant creative assets designed specifically for conversion and brand authority." 
        },
        { 
          step: "04", 
          title: "Real-Time ROI Governance", 
          text: "Continuous capital optimization through real-time performance tracking and automated budget re-allocation to highest-performing nodes." 
        }
      ]}
      features={[
        {
          title: "Institutional Performance Analytics",
          description: "Our growth terminals provide real-time visibility into every rupee spent, mapped directly to revenue velocity and marketplace share growth.",
          visual: <PerformancePulseUI />
        },
        {
          title: "Ecosystem Integration",
          description: "Seamlessly connect your ad performance with inventory states and marketplace health to ensure sustainable, profitable scaling.",
          visual: <OnboardingStatusUI />
        }
      ]}
    />
  );
}
