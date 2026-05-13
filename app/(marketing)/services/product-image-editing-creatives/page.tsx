"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { CatalogIntelligenceUI, OnboardingStatusUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function ProductImageEditingPage() {
  return (
    <SolutionArchitectureLayout
      label="High-Fidelity Visuals"
      title="Cinematic Product Imagery for Global Commerce."
      description="We transform raw product shots into institutional-grade marketing assets. Our creative engines ensure 100% marketplace compliance while delivering high-impact storytelling that drives conversion velocity."
      heroImage="/catalog_intelligence_mapping_ui_1778574843703.png"
      metrics={[
        { label: "CTR Increase", value: "3.5x", trend: "High Impact" },
        { label: "Compliance Rate", value: "100%", trend: "Verified" },
        { label: "Return Rate", value: "-12%", trend: "Accuracy" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Visual Brand Audit", 
          text: "Analyzing your current creative assets against marketplace standards and competitor benchmarks to define a high-performance visual roadmap." 
        },
        { 
          step: "02", 
          title: "Automated Post-Production", 
          text: "Execution of high-fidelity image editing, including background removal, color correction, and semantic retouching at enterprise scale." 
        },
        { 
          step: "03", 
          title: "A+ Content Orchestration", 
          text: "Development of premium storytelling layouts for Amazon Brand Stores and Flipkart Brand Hubs designed to build authority." 
        },
        { 
          step: "04", 
          title: "Multi-Channel Asset Sync", 
          text: "Automated distribution of marketplace-compliant visuals across all connected channels through ISNAP's central orchestrator." 
        }
      ]}
      features={[
        {
          title: "Visual Intelligence Engine",
          description: "Our AI-powered mapping ensures every product image meets the specific technical requirements of global marketplaces automatically.",
          visual: <CatalogIntelligenceUI />
        },
        {
          title: "Compliance Governance",
          description: "Maintain 100% listing health through automated validation of image quality, aspect ratios, and background compliance.",
          visual: <OnboardingStatusUI />
        }
      ]}
    />
  );
}
