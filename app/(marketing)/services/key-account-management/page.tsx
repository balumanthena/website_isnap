"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { OnboardingStatusUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function KAMPage() {
  return (
    <SolutionArchitectureLayout
      label="Institutional Governance"
      title="Strategic Multi-Channel Leadership & Governance."
      description="ISNAP provides end-to-end account leadership through an automated governance framework. We manage the complexity of global marketplaces so you can focus on core brand innovation."
      heroImage="/marketplace_orchestration_dashboard_1778574819567.png"
      metrics={[
        { label: "Account Health", value: "99.9%", trend: "Stable" },
        { label: "Revenue Growth", value: "2x-5x", trend: "Accelerated" },
        { label: "SLA Compliance", value: "100%", trend: "Verified" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Operational Health Audit", 
          text: "Continuous monitoring of account health, seller ratings, and compliance metrics across all connected marketplaces." 
        },
        { 
          step: "02", 
          title: "Strategic Growth Roadmap", 
          text: "Data-driven quarterly planning to identify expansion opportunities and optimize existing marketplace nodes." 
        },
        { 
          step: "03", 
          title: "Automated Issue Resolution", 
          text: "Proprietary systems that identify and resolve listing suppressions or account flags before they impact revenue." 
        },
        { 
          step: "04", 
          title: "Unified Performance Reporting", 
          text: "Institutional-grade visibility into cross-channel performance through a single centralized intelligence hub." 
        }
      ]}
      features={[
        {
          title: "Marketplace Governance Dashboard",
          description: "Real-time visibility into account health and operational performance across Amazon, Flipkart, and global networks.",
          visual: <OnboardingStatusUI />
        },
        {
          title: "Revenue Velocity Engine",
          description: "Execution of high-impact growth strategies backed by real-time data and institutional-grade scaling protocols.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
