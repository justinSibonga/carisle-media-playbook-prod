interface SeverityBadgeProps {
  level: string;
  colorClassName: string;
}

export function SeverityBadge({ level, colorClassName }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-1 text-xs font-semibold ${colorClassName}`}
    >
      {level}
    </span>
  );
}
