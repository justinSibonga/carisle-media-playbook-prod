export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <p className="text-sm text-muted-foreground">
      © {currentYear} Carisle Media. Internal use only.
    </p>
  );
}

