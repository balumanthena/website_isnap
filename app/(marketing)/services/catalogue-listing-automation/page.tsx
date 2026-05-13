"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { CatalogIntelligenceUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function CatalogueListingPage() {
  return (
    <SolutionArchitectureLayout
      label="Data Orchestration"
      title="High-Fidelity Catalogue Intelligence & Mapping."
      description="We evolve product data into strategic assets. Our AI-powered catalog engines synchronize your product attributes across global marketplaces with sub-second accuracy and semantic precision."
      heroImage="/catalog_intelligence_mapping_ui_1778574843703.png"
      metrics={[
        { label: "Attribute Accuracy", value: "99.9%", trend: "Verified" },
        { label: "Time to Market", value: "-70%", trend: "Optimized" },
        { label: "Listing Health", value: "Premium", trend: "Stable" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Product Data Ingestion", 
          text: "Standardization of raw product data from your internal systems into a unified, marketplace-agnostic data model." 
        },
        { 
          step: "02", 
          title: "AI Attribute Mapping", 
          text: "Automated mapping of product attributes to specific marketplace requirements using our proprietary semantic intelligence engine." 
        },
        { 
          step: "03", 
          title: "High-Fidelity Listing Sync", 
          text: "Real-time synchronization of rich media, optimized copy, and technical specs across all connected commerce nodes." 
        },
        { 
          step: "04", 
          title: "Continuous Data Governance", 
          text: "Automated monitoring for catalog drift or marketplace compliance updates, ensuring your listings remain 100% active." 
        }
      ]}
      features={[
        {
          title: "Catalog Intelligence Mapping",
          description: "Our UI provides real-time visibility into how your product data is mapped and synchronized across global channels.",
          visual: <CatalogIntelligenceUI />
        },
        {
          title: "Data Velocity Dashboard",
          description: "Monitor the speed and accuracy of your catalog operations through a high-performance executive terminal.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
