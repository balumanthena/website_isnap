"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { CatalogIntelligenceUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function ProductContentPage() {
  return (
    <SolutionArchitectureLayout
      label="High-Conversion Storytelling"
      title="Strategic Copywriting for the Global Marketplace."
      description="We replace generic descriptions with semantic content architecture. Our copywriters and AI engines generate high-impact product narratives designed specifically to drive marketplace conversions and brand authority."
      heroImage="/catalog_intelligence_mapping_ui_1778574843703.png"
      metrics={[
        { label: "Conversion Lift", value: "+45%", trend: "Optimized" },
        { label: "Click-Through", value: "3.2x", trend: "High Velocity" },
        { label: "Search Ranking", value: "Top 10", trend: "Semantic" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Brand Voice & Psychology Audit", 
          text: "Analyzing your brand DNA and customer psychology to define a high-fidelity narrative framework for every product category." 
        },
        { 
          step: "02", 
          title: "Semantic Keyword Integration", 
          text: "Mapping marketplace search intents (Amazon, Flipkart, Google) into the product narrative without compromising readability or brand authority." 
        },
        { 
          step: "03", 
          title: "Multi-Platform Content Sync", 
          text: "Execution of tailored content variants for every marketplace, ensuring 100% compliance with platform-specific character limits and logic." 
        },
        { 
          step: "04", 
          title: "Conversion Velocity Analysis", 
          text: "Continuous A/B testing and optimization of product titles, bullets, and descriptions based on real-world performance data." 
        }
      ]}
      features={[
        {
          title: "AI Semantic Orchestration",
          description: "Our content engines generate marketplace-specific product data that ranks higher and converts faster than traditional copywriting.",
          visual: <CatalogIntelligenceUI />
        },
        {
          title: "Performance Content Terminal",
          description: "Track the impact of your product narratives on conversion velocity and organic search share through an institutional dashboard.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
