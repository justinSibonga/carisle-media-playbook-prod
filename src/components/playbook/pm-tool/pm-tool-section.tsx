
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { FlowArrow } from "@/components/ui/flow-arrow";

export function PMToolSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          PM Tool Standard
        </h1>
        <p className="text-muted-foreground">
          Lark Tasks configuration and usage guidelines for project management
        </p>
      </div>

      {/* Lark Tasks - Kanban Board Rules */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Lark Tasks - Kanban Board Rules
        </h2>
        <p className="text-muted-foreground mb-6 font-medium flex items-center gap-1 flex-wrap">
          <span>ONE WORKSPACE</span> <FlowArrow /> <span>ALL CLIENTS</span> <FlowArrow /> <span>KANBAN VIEW</span> <FlowArrow /> <span>WEEKLY ORGANIZATION</span>
        </p>

        {/* What It Looks Like */}
        <div className="mb-8">
          <h3>What It Looks Like</h3>
          <div className="rounded-lg border border-border overflow-hidden mb-2">
            <Image 
              src="/cm-task.png" 
              alt="Lark Tasks Kanban Board Example" 
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground italic">
            ↑ Lark Tasks with Group by: Client • Week sections show project progress
          </p>
        </div>

        {/* 1. Workspace Structure */}
        <h3>Workspace Structure</h3>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Workspace</td>
              <td>ONE workspace for all client work</td>
            </tr>
            <tr>
              <td className="font-medium">View</td>
              <td>Kanban board</td>
            </tr>
            <tr>
              <td className="font-medium">Custom Field</td>
              <td>Create &quot;Client&quot; field (e.g., XBathrooms, ABC Coaching)</td>
            </tr>
            <tr>
              <td className="font-medium">Group By</td>
              <td>Group by: Client (each column = 1 client)</td>
            </tr>
            <tr>
              <td className="font-medium">Week Field</td>
              <td>Create &quot;Week&quot; field: Week 1, Week 2, Week 3, Week 4, Week 5, Go-Live, Retainer</td>
            </tr>
            <tr>
              <td className="font-medium">Sort By</td>
              <td>Sort by: Week (tasks appear in week order within each client)</td>
            </tr>
          </tbody>
        </table>

        {/* 2. Task Naming Convention */}
        <h3>Task Naming Convention</h3>
        <p>
          <strong>Format:</strong> [CLIENT] Task Name
        </p>

        <h4>Client Abbreviation Examples</h4>
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Abbreviation</th>
              <th>Example Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XBathrooms</td>
              <td className="font-medium">[XB]</td>
              <td>[XB] Homepage - Build</td>
            </tr>
            <tr>
              <td>ABC Coaching</td>
              <td className="font-medium">[ABC]</td>
              <td>[ABC] Email Sequence - Draft</td>
            </tr>
            <tr>
              <td>Sunrise Dental</td>
              <td className="font-medium">[SD]</td>
              <td>[SD] Workflow - Appointment Reminder</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-muted/50 p-4 rounded-lg my-6">
          <p className="text-sm my-0!">
            <strong className="text-primary">Abbreviation Rule:</strong>{" "}
            First letters of each word (2-3 letters). If already taken, add number.
          </p>
        </div>

        {/* 3. Task Requirements */}
        <h3>Task Requirements</h3>
        <p>Every task MUST have:</p>

        <div className="grid gap-3 sm:grid-cols-2 my-6">
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm my-0!">Client prefix</p>
              <p className="text-xs text-muted-foreground my-0!">[XB], [ABC], etc.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm my-0!">Owner</p>
              <p className="text-xs text-muted-foreground my-0!">One person assigned (not multiple)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm my-0!">Due date</p>
              <p className="text-xs text-muted-foreground my-0!">End of the week it&apos;s assigned to</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm my-0!">Column/Week</p>
              <p className="text-xs text-muted-foreground my-0!">Placed in correct weekly column</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
