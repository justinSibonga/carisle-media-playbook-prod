export function RaciChartSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          RACI Chart
        </h1>
        <p className="text-muted-foreground">
          Responsibility assignment matrix designed with maximum delegation in
          mind
        </p>
      </div>

      {/* Delegation Philosophy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Delegation Philosophy
        </h2>

        <div className="bg-muted/50 p-6 rounded-lg my-6">
          <p className="text-sm my-0! mb-4!">
            This RACI chart is designed with{" "}
            <strong className="text-primary">MAXIMUM DELEGATION</strong> in
            mind.
          </p>

          <div className="mt-4">
            <p className="font-medium text-primary mb-2 my-0!">
              Founder&apos;s Role:
            </p>
            <ul className="text-sm space-y-1 my-0! list-disc pl-5">
              <li>Participates in weekly meetings (R)</li>
              <li>Updates own scorecard (R)</li>
              <li>
                Makes truly strategic decisions that cannot be delegated (A)
              </li>
              <li>Gets informed on key outcomes (I)</li>
              <li>Consulted only when founder input is truly needed (C)</li>
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-medium text-primary mb-2 my-0!">
              EVERYTHING ELSE IS DELEGATED TO ROLE OWNERS.
            </p>
            <p className="text-sm text-muted-foreground my-0! mb-2!">
              Each role OWNS their area completely:
            </p>
            <ul className="text-sm space-y-1 my-0! list-disc pl-5">
              <li>
                <strong>Operations Coordinator</strong> → Owns all client &
                project operations
              </li>
              <li>
                <strong>Marketing Specialist</strong> → Owns all marketing
                activities
              </li>
              <li>
                <strong>HR & Admin Coordinator</strong> → Owns all people
                operations
              </li>
              <li>
                <strong>Web Developer</strong> → Owns all technical work
              </li>
              <li>
                <strong>Finance Coordinator</strong> → Owns all financial
                tracking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RACI Definitions */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          RACI Definitions
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Role</th>
                <th>Meaning</th>
                <th className="text-center">Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-responsible/20 text-raci-responsible font-bold text-sm">
                    R
                  </span>
                </td>
                <td className="font-medium">Responsible</td>
                <td>Does the work. Executes the task.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-responsible" />
                    <span className="text-sm">Green</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-sm">
                    A
                  </span>
                </td>
                <td className="font-medium">Accountable</td>
                <td>
                  Owns it. Makes sure it gets done. Final decision maker.
                </td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-accountable" />
                    <span className="text-sm">Blue</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-sm">
                    A/R
                  </span>
                </td>
                <td className="font-medium">Accountable + Responsible</td>
                <td>Owns it AND does the work (common for role owners)</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-accountable" />
                    <span className="text-sm">Blue</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-sm">
                    C
                  </span>
                </td>
                <td className="font-medium">Consulted</td>
                <td>Provides input BEFORE the decision or action.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-consulted" />
                    <span className="text-sm">Yellow</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-sm">
                    I
                  </span>
                </td>
                <td className="font-medium">Informed</td>
                <td>Kept in the loop AFTER the decision or action.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-informed" />
                    <span className="text-sm">Gray</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-card border border-border text-muted-foreground font-bold text-sm">
                    —
                  </span>
                </td>
                <td className="font-medium text-muted-foreground">
                  Not Involved
                </td>
                <td className="text-muted-foreground">
                  No role in this activity.
                </td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-card border border-border" />
                    <span className="text-sm">White</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Founder's Limited Involvement */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Founder&apos;s Limited Involvement
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Founder Role</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Daily Operations</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Not involved / Informed
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Fully delegated to Ops Coordinator
                </td>
              </tr>
              <tr>
                <td className="font-medium">Weekly Meetings</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-responsible/20 text-raci-responsible font-bold text-xs">
                      R
                    </span>
                    <span>Participates (R)</span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Attends and updates own scorecard only
                </td>
              </tr>
              <tr>
                <td className="font-medium">Client Management</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-xs">
                      C
                    </span>
                    <span className="text-muted-foreground">
                      Informed / Consulted if escalated
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Ops Coordinator owns client relationships
                </td>
              </tr>
              <tr>
                <td className="font-medium">Marketing</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on results
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Marketing Specialist owns all campaigns
                </td>
              </tr>
              <tr>
                <td className="font-medium">Technical</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on major issues
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Web Developer owns all technical work
                </td>
              </tr>
              <tr>
                <td className="font-medium">HR & Admin</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-xs">
                      C
                    </span>
                    <span className="text-muted-foreground">
                      Informed / Consulted on policy
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  HR Coordinator owns people operations
                </td>
              </tr>
              <tr>
                <td className="font-medium">Finance</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on reports
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Finance Coordinator owns all tracking
                </td>
              </tr>
              <tr>
                <td className="font-medium">Strategic Decisions</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-xs">
                      A
                    </span>
                    <span>Accountable (A)</span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Only area Founder must own
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
