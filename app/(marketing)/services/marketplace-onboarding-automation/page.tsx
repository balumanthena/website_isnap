"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { OnboardingStatusUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function MarketplaceOnboardingPage() {
  return (
    <SolutionArchitectureLayout
      label="Institutional Infrastructure"
      title="Global Marketplace Onboarding & Protocol Activation."
      description="We replace manual account setup with a high-fidelity onboarding framework. Our systems ensure your brand is activated across Amazon, Flipkart, and global networks with 100% compliance and operational speed."
      heroImage="/marketplace_orchestration_dashboard_1778574819567.png"
      metrics={[
        { label: "Go-Live Speed", value: "48h", trend: "Accelerated" },
        { label: "Compliance Score", value: "100%", trend: "Verified" },
        { label: "Account Health", value: "Premium", trend: "Stable" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Technical Infrastructure Audit", 
          text: "Comprehensive review of your brand's current marketplace footprint and identification of compliance gaps or operational bottlenecks." 
        },
        { 
          step: "02", 
          title: "Account Protocol Activation", 
          text: "Execution of account creation and multi-channel verification using ISNAP's standardized institutional protocols." 
        },
        { 
          step: "03", 
          title: "Operational Sync", 
          text: "Synchronization of your internal ERP/WMS with marketplace nodes for real-time inventory and order orchestration." 
        },
        { 
          step: "04", 
          title: "Governance Handover", 
          text: "Activation of continuous monitoring and governance systems to maintain long-term account health and performance." 
        }
      ]}
      features={[
        {
          title: "Onboarding Governance Terminal",
          description: "Real-time visibility into your onboarding progress across multiple marketplaces, with automated status tracking and compliance validation.",
          visual: <OnboardingStatusUI />
        },
        {
          title: "Operational Growth Terminal",
          description: "Once live, monitor your brand's performance velocity through a single centralized hub designed for executive oversight.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
