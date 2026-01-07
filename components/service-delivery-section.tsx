"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import { StepProcess } from "@/components/ui/step-process";

function OverviewContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">What We Deliver</h3>
        <p className="text-base text-foreground/80 leading-relaxed">
          Carisle Media specializes in complete GHL (GoHighLevel) automation workflow setups. 
          We build done-for-you systems that handle lead capture, nurturing, appointment booking, 
          and follow-up automation.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Core Deliverables</h3>
        <ul className="space-y-2">
          {[
            "Landing pages and funnels optimized for conversion",
            "Email and SMS automation sequences",
            "Workflow automations and triggers",
            "Calendar and booking integrations",
            "Pipeline and CRM setup",
            "Client training and documentation"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Service Phases</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Phase</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { phase: "Phase 1: Sales", desc: "Lead → Discovery → Strategy → Proposal → Close" },
              { phase: "Phase 2: Onboarding", desc: "Kick-off call, asset collection, project setup" },
              { phase: "Phase 3: Delivery", desc: "5-week build cycle with weekly milestones" },
              { phase: "Phase 4: Handoff", desc: "Training, documentation, go-live" },
              { phase: "Phase 5: Retainer", desc: "Monthly optimization and support" }
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-muted/30' : ''}`}>
                <td className="px-4 py-3 font-medium">{row.phase}</td>
                <td className="px-4 py-3 text-foreground/80">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Phase1Content() {
  const steps = [
    {
      title: "Discovery Call",
      badges: [
        { text: "15-30 min", variant: "secondary" as const },
        { text: "Operations Coordinator", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Qualify lead and understand needs</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Discovery notes, qualification status</span>
          </div>
        </div>
      )
    },
    {
      title: "Strategy Call",
      badges: [
        { text: "30-45 min", variant: "secondary" as const },
        { text: "Founder", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Deep dive, present solution, establish trust</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Strategy notes, solution scope, go/no-go</span>
          </div>
        </div>
      )
    },
    {
      title: "Proposal",
      badges: [
        { text: "24-48 hours", variant: "secondary" as const },
        { text: "Founder", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Send comprehensive proposal</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Solution, deliverables, timeline, investment</span>
          </div>
        </div>
      )
    },
    {
      title: "Close",
      badges: [
        { text: "Same day", variant: "secondary" as const },
        { text: "Operations Coordinator", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Contract, payment, onboarding setup</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Signed contract, deposit, kick-off scheduled</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Lead Sources</h3>
        <ul className="space-y-2">
          {["Paid advertising (Facebook, Google)", "Website inquiries", "Referrals"].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-6 pb-2 border-b border-border/60">Sales Process</h3>
        <StepProcess steps={steps} />
      </div>
    </div>
  );
}

function Phase2Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Kick-off Call</h3>
        <div className="text-base text-foreground/80 space-y-2 mb-4">
          <p><span className="font-medium text-foreground">Duration:</span> 45-60 minutes</p>
          <p><span className="font-medium text-foreground">Attendees:</span> Operations Coordinator, Web Developer, Client</p>
        </div>
        
        <p className="text-base font-medium text-foreground mb-2">Agenda:</p>
        <ul className="space-y-2">
          {[
            "Introductions and roles",
            "Review project scope and deliverables",
            "Walk through 5-week timeline",
            "Explain client responsibilities and deadlines",
            "Review onboarding form requirements",
            "Set communication expectations",
            "Schedule weekly check-in calls"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-foreground flex items-center justify-center text-sm font-medium shrink-0">{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Onboarding Form</h3>
        <p className="text-base text-foreground/80 mb-3">
          <span className="font-medium text-foreground">Deadline:</span> Within 3 business days of kick-off call
        </p>
        <div className="bg-destructive/10 border-l-4 border-destructive px-4 py-3 rounded-r">
          <p className="text-base font-medium text-destructive">
            ⚠️ Project timeline does not start until onboarding form is complete.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Required Client Inputs</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Item</th>
              <th className="px-4 py-3 text-left font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Brand Assets", details: "Logo (PNG/SVG), brand colors (hex), fonts" },
              { item: "Business Info", details: "Company name, tagline, contact details" },
              { item: "Offer Details", details: "Services, pricing, packages, lead magnet" },
              { item: "Target Audience", details: "Ideal client profile, demographics, pain points" },
              { item: "Access Credentials", details: "Domain registrar, hosting, existing tools" }
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-muted/30' : ''}`}>
                <td className="px-4 py-3 font-medium">{row.item}</td>
                <td className="px-4 py-3 text-foreground/80">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function Phase3Content() {
  const weeks = [
    {
      title: "Foundation & Strategy",
      week: "Week 1",
      delivers: ["GHL account setup and configuration", "Pipeline structure and stages", "Funnel strategy map", "Custom fields and tags structure"],
      clientProvides: ["All brand assets", "Business information", "Offer details and pricing", "Target audience profile"],
      milestone: "Client approves funnel strategy before Week 2"
    },
    {
      title: "Landing Pages & Funnels",
      week: "Week 2",
      delivers: ["Landing pages built in GHL", "Thank you / confirmation pages", "Opt-in forms with field mapping", "Mobile-responsive design"],
      clientProvides: ["Testimonials and social proof", "Product/service images", "Approved copy or inputs", "Team photos (if applicable)"],
      milestone: "Client approves design and copy before Week 3"
    },
    {
      title: "Email & SMS Automation",
      week: "Week 3",
      delivers: ["Lead nurture sequence (5-7 emails)", "Appointment reminder sequence", "No-show follow-up sequences", "Email and SMS templates"],
      clientProvides: ["FAQs for email content", "Case studies / success stories", "Sequence review and approval"],
      milestone: "Client approves all sequences before Week 4"
    },
    {
      title: "Workflows & Integrations",
      week: "Week 4",
      delivers: ["Calendar/booking setup", "Workflow automations", "Pipeline automation rules", "Third-party integrations"],
      clientProvides: ["Workflow logic review and approval"],
      milestone: "Client approves workflow logic before Week 5"
    },
    {
      title: "Testing & Launch",
      week: "Week 5",
      delivers: ["End-to-end system testing", "Bug fixes and refinements", "Training call (recorded)", "Documentation and user guide"],
      clientProvides: ["Training call attendance", "Final sign-off and approval", "Go-live confirmation"],
      milestone: "Final sign-off = Project Complete"
    }
  ];

  const steps = weeks.map(week => ({
    title: week.title,
    badges: [{ text: week.week, variant: "accent" as const }],
    content: (
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">We Deliver</p>
            <ul className="space-y-2">
              {week.delivers.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Client Provides</p>
            <ul className="space-y-2">
              {week.clientProvides.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 mt-4 pt-4 border-t border-dashed border-border">
            <div className="flex items-center gap-2 text-sm">
                <span className="uppercase text-xs font-bold text-accent tracking-wider">Milestone Gate:</span>
                <span className="font-medium">{week.milestone}</span>
            </div>
          </div>
        </div>
    )
  }));

  return (
    <div className="space-y-6">
        <h3 className="font-semibold text-foreground mb-6 pb-2 border-b border-border/60">5-Week Build Method</h3>
        <StepProcess steps={steps} />
    </div>
  );
}

function Phase4Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Training Call</h3>
        <div className="text-base text-foreground/80 space-y-2 mb-4">
          <p><span className="font-medium text-foreground">Duration:</span> 60-90 minutes</p>
          <p><span className="font-medium text-foreground">Recording:</span> Provided to client for reference</p>
        </div>
        
        <p className="text-base font-medium text-foreground mb-2">Training Covers:</p>
        <ul className="space-y-2">
          {[
            "GHL dashboard navigation",
            "Managing contacts and pipelines",
            "Editing landing pages and emails",
            "Monitoring workflows and automations",
            "Viewing reports and analytics",
            "Common troubleshooting"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Documentation Delivered</h3>
        <ul className="space-y-2">
          {[
            "User guide document",
            "Workflow documentation",
            "Login credentials (securely shared)",
            "Integration details",
            "Troubleshooting guide"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Sign-off Checklist</h3>
        <div className="space-y-2">
          {[
            "Client approved all deliverables",
            "Final sign-off received",
            "Project marked complete in system",
            "Retainer discussion (if applicable)",
            "30-day follow-up scheduled"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 group-hover:border-primary transition-colors bg-background" />
              <span className="text-base text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phase5Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Retainer Services</h3>
        <p className="text-base text-foreground/80 mb-4">
          Optional ongoing support and optimization services available after project completion.
        </p>
        
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Service</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: "Ad Management", desc: "Facebook/Google ad campaign management" },
              { service: "Lead Generation", desc: "Ongoing lead gen and funnel optimization" },
              { service: "System Updates", desc: "Workflow tweaks, new sequences, page updates" },
              { service: "Priority Support", desc: "Fast response times and troubleshooting" }
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-muted/30' : ''}`}>
                <td className="px-4 py-3 font-medium">{row.service}</td>
                <td className="px-4 py-3 text-foreground/80">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Communication SLAs</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Type</th>
              <th className="px-4 py-3 text-left font-semibold">Response Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: "Client messages", time: "Same business day" },
              { type: "Urgent issues", time: "Within 4 hours", urgent: true },
              { type: "Review feedback", time: "48 hours maximum" },
              { type: "Weekly status update", time: "Every Friday by 5 PM" }
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-muted/30' : ''}`}>
                <td className={`px-4 py-3 font-medium ${row.urgent ? 'text-destructive' : ''}`}>{row.type}</td>
                <td className="px-4 py-3 text-foreground/80">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Communication Channels</h3>
        <ul className="space-y-2">
          {[
            { label: "Primary", value: "Email / Lark" },
            { label: "Urgent", value: "Messenger / Phone", urgent: true },
            { label: "Project Updates", value: "Client portal" },
            { label: "Meetings", value: "Zoom / Google Meet" }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><span className={`font-medium ${item.urgent ? 'text-destructive' : 'text-foreground'}`}>{item.label}:</span> {item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServiceDeliverySection() {
  const tabs = [
    {
      key: "overview",
      label: "Overview",
      title: "Service Overview",
      description: "What we deliver and our complete service structure",
      content: <OverviewContent />
    },
    {
      key: "phase1",
      label: "Phase 1: Sales",
      title: "Phase 1: Lead to Close",
      description: "Sales journey from initial lead to signed contract",
      content: <Phase1Content />
    },
    {
      key: "phase2",
      label: "Phase 2: Onboard",
      title: "Phase 2: Client Onboarding",
      description: "Week 0 - Kick-off call and asset collection",
      content: <Phase2Content />
    },
    {
      key: "phase3",
      label: "Phase 3: Delivery",
      title: "Phase 3: 5-Week Delivery",
      description: "Weekly deliverables and milestone gates",
      content: <Phase3Content />
    },
    {
      key: "phase4",
      label: "Phase 4: Handoff",
      title: "Phase 4: Client Handoff",
      description: "Training, documentation, and go-live",
      content: <Phase4Content />
    },
    {
      key: "phase5",
      label: "Phase 5: Retainer",
      title: "Phase 5: Retainer & Support",
      description: "Ongoing optimization and support services",
      content: <Phase5Content />
    }
  ];

  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
          Service Delivery SOP
        </h1>
        <p className="text-muted-foreground">
          End-to-End Service Delivery for GHL / Automation Workflow Setup
        </p>
      </div>

      <FolderTabs tabs={tabs} defaultTab="overview" />
    </div>
  );
}
