interface RaciSectionHeaderProps {
  title: string;
  colSpan?: number;
}

export function RaciSectionHeader({ title, colSpan = 8 }: RaciSectionHeaderProps) {
  return (
    <tr>
      <td colSpan={colSpan} className="bg-primary text-white! font-bold text-center py-2 text-xs">
        {title}
      </td>
    </tr>
  );
}
