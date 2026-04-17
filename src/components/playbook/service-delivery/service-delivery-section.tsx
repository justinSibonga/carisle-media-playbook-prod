"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import { OverviewContent } from "./overview";
import { Phase1Content } from "./phase-1-sales";
import { Phase2Content } from "./phase-2-onboarding";
import { Phase3Content } from "./phase-3-delivery";
import { Phase4Content } from "./phase-4-handoff";
import { Phase5Content } from "./phase-5-retainer";

const SERVICE_DELIVERY_TABS = [
  {
    key: "overview",
    label: "Overview",
    title: "Service Overview",
    description: "What we deliver and our complete service structure",
    content: <OverviewContent />,
  },
  {
    key: "phase1",
    label: "Phase 1: Sales",
    title: "Phase 1: Lead to Close",
    description: "Sales journey from initial lead to signed contract",
    content: <Phase1Content />,
  },
  {
    key: "phase2",
    label: "Phase 2: Onboard",
    title: "Phase 2: Client Onboarding",
    description: "Week 0 - Kick-off call and asset collection",
    content: <Phase2Content />,
  },
  {
    key: "phase3",
    label: "Phase 3: Delivery",
    title: "Phase 3: 5-Week Delivery",
    description: "Weekly deliverables and milestone gates",
    content: <Phase3Content />,
  },
  {
    key: "phase4",
    label: "Phase 4: Handoff",
    title: "Phase 4: Client Handoff",
    description: "Training, documentation, and go-live",
    content: <Phase4Content />,
  },
  {
    key: "phase5",
    label: "Phase 5: Retainer",
    title: "Phase 5: Retainer & Support",
    description: "Ongoing optimization and support services",
    content: <Phase5Content />,
  },
];

export function ServiceDeliverySection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">Operations Playbook</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">Service Delivery SOP</h1>
        <p className="text-muted-foreground">End-to-End Service Delivery for GHL / Automation Workflow Setup</p>
      </div>

      <FolderTabs tabs={SERVICE_DELIVERY_TABS} defaultTab="overview" />
    </div>
  );
}
