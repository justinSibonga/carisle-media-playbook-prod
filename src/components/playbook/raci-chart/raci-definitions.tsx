interface DefinitionRow {
  letter: string;
  badgeClass: string;
  role: string;
  meaning: string;
  swatchClass: string;
  swatchLabel: string;
  mutedRole?: boolean;
  mutedMeaning?: boolean;
}

const DEFINITIONS: DefinitionRow[] = [
  {
    letter: "R",
    badgeClass: "bg-raci-responsible/20 text-raci-responsible",
    role: "Responsible",
    meaning: "Does the work. Executes the task.",
    swatchClass: "bg-raci-responsible",
    swatchLabel: "Green",
  },
  {
    letter: "A",
    badgeClass: "bg-raci-accountable/20 text-raci-accountable",
    role: "Accountable",
    meaning: "Owns it. Makes sure it gets done. Final decision maker.",
    swatchClass: "bg-raci-accountable",
    swatchLabel: "Blue",
  },
  {
    letter: "A/R",
    badgeClass: "bg-raci-accountable/20 text-raci-accountable",
    role: "Accountable + Responsible",
    meaning: "Owns it AND does the work (common for role owners)",
    swatchClass: "bg-raci-accountable",
    swatchLabel: "Blue",
  },
  {
    letter: "C",
    badgeClass: "bg-raci-consulted/20 text-raci-consulted",
    role: "Consulted",
    meaning: "Provides input BEFORE the decision or action.",
    swatchClass: "bg-raci-consulted",
    swatchLabel: "Yellow",
  },
  {
    letter: "I",
    badgeClass: "bg-raci-informed/20 text-raci-informed",
    role: "Informed",
    meaning: "Kept in the loop AFTER the decision or action.",
    swatchClass: "bg-raci-informed",
    swatchLabel: "Gray",
  },
  {
    letter: "—",
    badgeClass: "bg-card border border-border text-muted-foreground",
    role: "Not Involved",
    meaning: "No role in this activity.",
    swatchClass: "bg-card border border-border",
    swatchLabel: "White",
    mutedRole: true,
    mutedMeaning: true,
  },
];

export function RaciDefinitions() {
  return (
    <section id="raci-definitions">
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
            {DEFINITIONS.map((def) => (
              <tr key={def.letter}>
                <td>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${def.badgeClass}`}>
                    {def.letter}
                  </span>
                </td>
                <td className={def.mutedRole ? "font-medium text-muted-foreground" : "font-medium"}>
                  {def.role}
                </td>
                <td className={def.mutedMeaning ? "text-muted-foreground" : undefined}>{def.meaning}</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className={`inline-block w-5 h-5 rounded ${def.swatchClass}`} />
                    <span className="text-sm">{def.swatchLabel}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
