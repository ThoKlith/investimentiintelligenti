import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-surface-muted">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-xl font-semibold text-foreground">
            Investimenti Intelligenti
          </p>
          <p className="text-sm text-muted">
            Strategie chiare e controllate per investire con metodo, tutelare il
            capitale e crescere nel tempo.
          </p>
          <p className="text-xs text-muted">Placeholder: sostituisci con i dati reali.</p>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Pagine
          </p>
          <Link href="/chi-siamo" className="block hover:text-foreground">
            Chi siamo
          </Link>
          <Link href="/servizi" className="block hover:text-foreground">
            Servizi
          </Link>
          <Link href="/blog" className="block hover:text-foreground">
            Blog
          </Link>
          <Link href="/contatti" className="block hover:text-foreground">
            Contatti
          </Link>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Contatti
          </p>
          <p>Milano, Italia</p>
          <p>info@investimentiintelligenti.it</p>
          <p>+39 02 0000 0000</p>
        </div>
      </div>
      <div className="border-t border-line/60 py-6 text-center text-xs text-muted">
        (c) 2026 Investimenti Intelligenti. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
