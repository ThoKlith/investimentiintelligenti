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
            Strada vecchia di san giovanni 129, 10062 Luserna San Giovanni (TO)
          </p>
          <p className="text-sm text-muted">Email: segreteria@investimentiamine.it</p>
          <p className="text-sm text-muted">Pec: aminealahiyane@pec.it</p>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Pagine
          </p>
          <Link href="/chi-siamo" className="block hover:text-foreground">
            Chi Sono?
          </Link>
          <Link
            href="/educazione-finanziaria"
            className="block hover:text-foreground"
          >
            Educazione Finanziaria
          </Link>
          <Link
            href="/domande-frequenti"
            className="block hover:text-foreground"
          >
            Domande Frequenti
          </Link>
          <Link href="/contatti" className="block hover:text-foreground">
            Contatti
          </Link>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground">
            Contatti
          </p>
          <p>+39 351 897 1482</p>
          <p>P. IVA 12679780010</p>
        </div>
      </div>
      <div className="border-t border-line/60 py-6 text-center text-xs text-muted">
        Copyright (c) 2023 Amine Alahiyane
      </div>
    </footer>
  );
}
