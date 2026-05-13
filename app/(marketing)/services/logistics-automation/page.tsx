"use client";

import { SolutionArchitectureLayout } from "@/components/services/SolutionArchitectureLayout";
import { OnboardingStatusUI, PerformancePulseUI } from "@/components/services/SolutionVisuals";
import { EcosystemArchitecture } from "@/components/services/EcosystemArchitecture";

export default function LogisticsPage() {
  return (
    <SolutionArchitectureLayout
      label="Operational Logistics"
      title="Unified Fulfillment Across India’s Largest Networks."
      description="We bridge the gap between digital sales and physical fulfillment. Our logistics automation engine synchronizes your inventory with global 3PL networks and last-mile providers for 100% operational precision."
      heroImage="/marketplace_orchestration_dashboard_1778574819567.png"
      metrics={[
        { label: "Fulfillment Accuracy", value: "99.9%", trend: "Institutional" },
        { label: "Delivery Velocity", value: "-25%", trend: "Faster" },
        { label: "Inventory Sync", value: "Real-Time", trend: "Verified" }
      ]}
      orchestrationVisual={<EcosystemArchitecture />}
      processSteps={[
        { 
          step: "01", 
          title: "Supply Chain Infrastructure Audit", 
          text: "Mapping your current fulfillment nodes, warehouse distribution, and last-mile capabilities to identify architectural bottlenecks." 
        },
        { 
          step: "02", 
          title: "3PL Ecosystem Integration", 
          text: "Seamless connection of your inventory with India's leading 3PL providers through ISNAP's unified operational hub." 
        },
        { 
          step: "03", 
          title: "Automated Order Orchestration", 
          text: "Deployment of intelligent routing logic that assigns orders to the optimal fulfillment node based on distance, stock, and priority." 
        },
        { 
          step: "04", 
          title: "Real-Time Velocity Monitoring", 
          text: "Institutional-grade visibility into every order state, from warehouse pick-and-pack to final last-mile confirmation." 
        }
      ]}
      features={[
        {
          title: "Inventory Command Center",
          description: "Real-time visibility into stock levels across all connected marketplaces and 3PL warehouses, ensuring zero overselling and maximum availability.",
          visual: <OnboardingStatusUI />
        },
        {
          title: "Fulfillment Performance Terminal",
          description: "Track delivery velocity and fulfillment accuracy through a high-performance growth terminal designed for supply chain leaders.",
          visual: <PerformancePulseUI />
        }
      ]}
    />
  );
}
