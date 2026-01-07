"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

type ChecklistType = "landing-page" | "email" | "sms" | "workflow" | "go-live" | "handoff";

const checklists: Record<ChecklistType, { title: string; description: string; sections: { title: string; items: string[] }[] }> = {
  "landing-page": {
    title: "Landing Page Checklist",
    description: "Quality assurance for landing pages and funnels (Week 2 deliverables)",
    sections: [
      {
        title: "Design & Layout",
        items: [
          "Page loads correctly on desktop",
          "Page loads correctly on mobile (responsive)",
          "Page loads correctly on tablet",
          "All images display properly and are optimized",
          "Brand colors match client brand guidelines",
          "Logo is properly sized and positioned",
          "Typography is consistent throughout",
          "Proper spacing and whitespace",
          "Visual hierarchy is clear (headline → subhead → body → CTA)"
        ]
      },
      {
        title: "Content & Copy",
        items: [
          "Headline is clear and compelling",
          "Subheadline supports the main message",
          "Body copy is error-free (spelling, grammar)",
          "Benefits are clearly communicated",
          "Social proof/testimonials are included (if applicable)",
          "Call-to-action is clear and prominent",
          "All placeholder text has been replaced"
        ]
      },
      {
        title: "Forms & Functionality",
        items: [
          "Form fields are correctly labeled",
          "Form validation works (required fields)",
          "Form submission works correctly",
          "Form data maps to correct GHL fields",
          "Success/thank you message displays after submission",
          "Redirect to thank you page works (if applicable)",
          "All buttons and links work"
        ]
      },
      {
        title: "Technical & SEO",
        items: [
          "Page title is set correctly",
          "Meta description is set",
          "Favicon displays correctly",
          "Page URL is clean and descriptive",
          "SSL certificate is active (https)",
          "Page load speed is acceptable (<3 seconds)",
          "No broken links or 404 errors",
          "Tracking pixels installed (if required)"
        ]
      },
      {
        title: "GHL Integration",
        items: [
          "Form connected to correct pipeline",
          "Tags applied on form submission",
          "Workflow trigger connected",
          "Contact created in correct location"
        ]
      }
    ]
  },
  "email": {
    title: "Email Sequence Checklist",
    description: "Quality assurance for email automation sequences (Week 3 deliverables)",
    sections: [
      {
        title: "Content & Copy",
        items: [
          "Subject lines are compelling and under 50 characters",
          "Preview text is set for each email",
          "From name is correct",
          "Reply-to address is correct",
          "All copy is error-free (spelling, grammar)",
          "Personalization tags work correctly ({{first_name}}, etc.)",
          "All placeholder text has been replaced",
          "Tone matches client brand voice"
        ]
      },
      {
        title: "Design & Formatting",
        items: [
          "Email renders correctly on desktop",
          "Email renders correctly on mobile",
          "Images display properly with alt text",
          "Brand colors and fonts are consistent",
          "Logo is included and sized correctly",
          "CTAs are prominent and clickable",
          "Unsubscribe link is present and working",
          "Footer includes required business information"
        ]
      },
      {
        title: "Links & Functionality",
        items: [
          "All links work correctly",
          "CTA buttons link to correct pages",
          "Calendar/booking links work",
          "Social media links work",
          "No broken images or links"
        ]
      },
      {
        title: "Sequence Logic",
        items: [
          "Email timing/delays are correct",
          "Sequence order is logical",
          "Entry trigger is configured correctly",
          "Exit conditions are set (if applicable)",
          "Goal/conversion tracking is set up",
          "Stop conditions prevent over-sending"
        ]
      },
      {
        title: "Compliance",
        items: [
          "CAN-SPAM compliant (unsubscribe, physical address)",
          "No misleading subject lines",
          "Sender identity is clear"
        ]
      }
    ]
  },
  "sms": {
    title: "SMS Sequence Checklist",
    description: "Quality assurance for SMS automation sequences (Week 3 deliverables)",
    sections: [
      {
        title: "Content",
        items: [
          "Messages are under 160 characters (or intentionally multi-part)",
          "Language is conversational and appropriate",
          "All copy is error-free",
          "Personalization tags work correctly",
          "Business name is identified in message",
          "Clear call-to-action included",
          "Opt-out instructions included (STOP to unsubscribe)"
        ]
      },
      {
        title: "Links",
        items: [
          "All links work correctly",
          "Links are shortened (if needed)",
          "Links track correctly"
        ]
      },
      {
        title: "Timing & Logic",
        items: [
          "Send times are appropriate (business hours)",
          "Time delays between messages are appropriate",
          "Sequence order makes sense",
          "Entry trigger is configured correctly",
          "Stop conditions prevent spam"
        ]
      },
      {
        title: "Compliance",
        items: [
          "Recipient has opted in to SMS",
          "TCPA compliant",
          "Opt-out mechanism works",
          "Sending from approved number"
        ]
      }
    ]
  },
  "workflow": {
    title: "Workflow Checklist",
    description: "Quality assurance for automation workflows (Week 4 deliverables)",
    sections: [
      {
        title: "Trigger Setup",
        items: [
          "Trigger event is correctly configured",
          "Trigger filters are set (if needed)",
          "Trigger fires only for intended contacts",
          "No duplicate triggers causing issues"
        ]
      },
      {
        title: "Workflow Logic",
        items: [
          "Flow logic is correct (if/then branches)",
          "Wait steps have appropriate timing",
          "All branches lead to valid endpoints",
          "No infinite loops exist",
          "Exit conditions are properly set"
        ]
      },
      {
        title: "Actions",
        items: [
          "All actions are configured correctly",
          "Tags are applied/removed as intended",
          "Pipeline stage changes work correctly",
          "Task assignments work (if applicable)",
          "Notifications send to correct people",
          "Custom field updates work"
        ]
      },
      {
        title: "Email/SMS Actions",
        items: [
          "Correct email templates are selected",
          "Correct SMS templates are selected",
          "Sender information is correct",
          "Delay timing is appropriate"
        ]
      },
      {
        title: "Integrations",
        items: [
          "Calendar booking integration works",
          "Payment integration works (if applicable)",
          "Third-party webhooks fire correctly",
          "Zapier/API connections work (if applicable)"
        ]
      },
      {
        title: "Testing",
        items: [
          "Workflow tested with test contact",
          "All paths tested (success, failure, conditions)",
          "No errors in workflow execution",
          "Expected outcomes confirmed"
        ]
      }
    ]
  },
  "go-live": {
    title: "Go-Live Checklist",
    description: "Final checks before launching the system (Week 5 deliverables)",
    sections: [
      {
        title: "Pre-Launch Verification",
        items: [
          "All landing pages are live and accessible",
          "All forms are working correctly",
          "All email sequences are active",
          "All SMS sequences are active",
          "All workflows are published and active",
          "Calendar/booking system is working",
          "Pipeline stages are correctly configured",
          "All integrations are connected and working"
        ]
      },
      {
        title: "End-to-End Testing",
        items: [
          "Test lead submission → contact created",
          "Test email sequence triggered",
          "Test SMS sequence triggered",
          "Test appointment booking flow",
          "Test all workflow paths",
          "Verify all notifications work",
          "Test on multiple devices (desktop, mobile)"
        ]
      },
      {
        title: "Client Handoff",
        items: [
          "Training call scheduled and completed",
          "Training recording provided to client",
          "Documentation delivered",
          "Login credentials shared securely",
          "Support process explained",
          "Go-live date confirmed"
        ]
      }
    ]
  },
  "handoff": {
    title: "Client Handoff Checklist",
    description: "Project completion and client handoff",
    sections: [
      {
        title: "Documentation",
        items: [
          "User guide document completed",
          "Workflow documentation provided",
          "Login credentials documented",
          "Integration details documented",
          "Troubleshooting guide provided"
        ]
      },
      {
        title: "Training",
        items: [
          "Training call completed",
          "Training recording uploaded and shared",
          "Client Q&A addressed",
          "Key features demonstrated",
          "Best practices reviewed"
        ]
      },
      {
        title: "Sign-off",
        items: [
          "Client approved all deliverables",
          "Final sign-off received",
          "Project marked complete in system",
          "Retainer discussion (if applicable)",
          "Follow-up call scheduled (30 days)"
        ]
      }
    ]
  }
};

function QualityChecklistsSection() {
  const tabs = (Object.keys(checklists) as ChecklistType[]).map((key) => {
    const checklist = checklists[key];
    
    return {
      key: key,
      label: checklist.title.replace(" Checklist", ""),
      title: checklist.title,
      description: checklist.description,
      content: (
        <div>
          {checklist.sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-6 last:mb-0">
              <h3 className="font-semibold text-primary mb-3 pb-2 border-b border-border/60">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
      footer: (
        <div className="flex flex-wrap gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">Total Items: </span>
            <span className="font-medium text-foreground">
              {checklist.sections.reduce((acc, s) => acc + s.items.length, 0)}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Sign-off: </span>
            <span className="font-medium text-foreground">_________________</span>
          </div>
          <div>
            <span className="text-muted-foreground">Date: </span>
            <span className="font-medium text-foreground">_________________</span>
          </div>
        </div>
      )
    };
  });

  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Quality Checklists
        </h1>
        <p className="text-muted-foreground">
          Ensure every deliverable meets Carisle Media quality standards before client delivery.
        </p>
      </div>

      {/* Checklist Purpose */}
      <div className="bg-muted p-6 rounded-lg mb-8 shadow-sm border border-border">
        <h3 className="font-semibold text-primary mb-3 !mt-0">How to Use</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-foreground/80">
          <li>Select the appropriate checklist for the deliverable type</li>
          <li>Complete all items before marking deliverable as &quot;ready for review&quot;</li>
          <li>Get sign-off from QA reviewer (Operations Coordinator or Web Developer lead)</li>
          <li>Attach completed checklist to client delivery</li>
        </ol>
        <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-sm font-medium text-primary">Definition of Done:</p>
          <p className="text-sm text-muted-foreground">
            A deliverable is only &quot;done&quot; when all checklist items are marked complete, 
            QA reviewer has signed off, and client has approved (where applicable).
          </p>
        </div>
      </div>

      {/* Reusable FolderTabs Component */}
      <FolderTabs tabs={tabs} defaultTab="landing-page" />
    </div>
  );
}

export default function QualityChecklistsPage() {
  return (
    <PlaybookPageLayout>
      <QualityChecklistsSection />
    </PlaybookPageLayout>
  );
}
