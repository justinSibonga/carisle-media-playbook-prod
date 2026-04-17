interface AuthorityLevel {
  label: string;
  badgeClass: string;
  symbol: string;
  meaning: string;
}

const AUTHORITY_LEVELS: AuthorityLevel[] = [
  {
    label: "GREEN - Decide Alone",
    badgeClass: "bg-green-100 text-green-700 border-green-500 dark:bg-green-900/30 dark:text-green-400",
    symbol: "✓",
    meaning: "Make the decision yourself, no approval needed",
  },
  {
    label: "YELLOW - Inform After",
    badgeClass: "bg-yellow-100 text-yellow-700 border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400",
    symbol: "→",
    meaning: "Decide yourself, but inform Founder afterward",
  },
  {
    label: "ORANGE - Recommend",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-900/30 dark:text-orange-400",
    symbol: "↑",
    meaning: "Make a recommendation, Founder decides",
  },
  {
    label: "RED - Must Escalate",
    badgeClass: "bg-red-100 text-red-700 border-red-500 dark:bg-red-900/30 dark:text-red-400",
    symbol: "✗",
    meaning: "Cannot proceed without Founder approval",
  },
];

export function AuthorityLevelsTable() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Level</th>
          <th className="text-center">Symbol</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        {AUTHORITY_LEVELS.map((level) => (
          <tr key={level.label}>
            <td>
              <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold border ${level.badgeClass}`}>
                {level.label}
              </span>
            </td>
            <td className="text-center font-bold text-foreground">{level.symbol}</td>
            <td className="text-foreground">{level.meaning}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
