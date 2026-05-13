"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { CatalogIntelligenceUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function SEOOptimizationPage() {
  return (
    <SolutionArchitectureLayout
      label="Organic Search Authority"
      title="Dominant Visibility for the AI Search Era."
      description="We evolve beyond traditional SEO into Generative Engine Optimization (GEO). Our frameworks ensure your brand remains authoritative and discoverable across Google Search, AI Overviews, and marketplace algorithms."
      heroImage="/catalog_intelligence_mapping_ui_1778574843703.png"
      metrics={[
        { label: "Search Visibility", value: "+140%", trend: "Dominant" },
        { label: "GEO Presence", value: "Verified", trend: "AI-Ready" },
        { label: "Organic Revenue", value: "3.2x", trend: "Growth" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Semantic Content Audit", 
          text: "Mapping your current catalog and site content against both traditional keywords and modern semantic search intents to identify authority gaps." 
        },
        { 
          step: "02", 
          title: "Generative Engine Calibration", 
          text: "Optimization of technical signals and content structures specifically for AI search engines (Perplexity, Google SGE, etc.) to ensure brand attribution." 
        },
        { 
          step: "03", 
          title: "Institutional Authority Building", 
          text: "Execution of a high-fidelity PR and technical backlink strategy designed to build long-term domain authority and search engine trust." 
        },
        { 
          step: "04", 
          title: "Real-Time Reach Governance", 
          text: "Continuous monitoring of keyword rankings and AI citation scores through our centralized organic growth terminal." 
        }
      ]}
      features={[
        {
          title: "AI Catalog Intelligence",
          description: "Optimize your product data for high-performance organic visibility across global marketplaces and generative search engines.",
          visual: <CatalogIntelligenceUI />
        },
        {
          title: "Organic Velocity Terminal",
          description: "Track your brand's organic growth trajectory and search share through an institutional-grade performance dashboard.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
