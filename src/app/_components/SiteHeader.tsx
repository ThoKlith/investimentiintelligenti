import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Sono?", href: "/chi-siamo" },
  { label: "Educazione Finanziaria", href: "/educazione-finanziaria" },
  { label: "Domande Frequenti", href: "/domande-frequenti" },
  { label: "Contatti", href: "/contatti" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-accent/15" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Investimenti Intelligenti
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contatti" className="btn-secondary hidden sm:inline-flex">
            Contattaci
          </Link>
          <Link href="/contatti" className="btn-primary">
            Prenota una call
          </Link>
        </div>
      </div>
    </header>
  );
}
