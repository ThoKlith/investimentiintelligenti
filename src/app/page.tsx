export default function Home() {
  const services = [
    {
      title: "Strategia personalizzata",
      description:
        "Analisi del profilo, obiettivi chiari e un piano operativo con tempi e priorita.",
    },
    {
      title: "Asset allocation e rischio",
      description:
        "Scelte misurate, diversificazione reale e stress test per ogni scenario.",
    },
    {
      title: "Monitoraggio continuo",
      description:
        "Revisioni periodiche, report leggibili e ottimizzazioni mirate.",
    },
  ];

  const steps = [
    {
      title: "Scopriamo il tuo profilo",
      detail:
        "Call iniziale e questionario per comprendere obiettivi, orizzonte e vincoli.",
    },
    {
      title: "Disegniamo la strategia",
      detail:
        "Modello di portafoglio, rischio atteso e mappa delle opportunita.",
    },
    {
      title: "Accompagniamo nel tempo",
      detail:
        "Aggiornamenti trimestrali, ribilanciamenti e supporto dedicato.",
    },
  ];

  const insights = [
    {
      title: "Dal rumore al metodo: come evitare scelte impulsive",
      tag: "Psicologia finanziaria",
    },
    {
      title: "Portafogli resilienti in fasi di inflazione",
      tag: "Strategia",
    },
    {
      title: "Obiettivi di lungo periodo e liquidita intelligente",
      tag: "Pianificazione",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-10 top-24 h-64 w-64 rounded-full bg-accent-2/20 blur-[120px]" />

      <section className="section">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="eyebrow">Investimenti con metodo</p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Strategie di investimento chiare, misurabili e costruite intorno
                a te.
              </h1>
              <p className="text-lg text-muted md:text-xl">
                Ti aiutiamo a trasformare obiettivi finanziari in un piano
                operativo solido. Niente rumore, solo decisioni consapevoli.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/contatti" className="btn-primary">
                Richiedi un check-up
              </a>
              <a href="/servizi" className="btn-secondary">
                Scopri il metodo
              </a>
            </div>
            <div className="grid gap-6 text-sm text-muted sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-foreground">12+ anni</p>
                <p>Esperienza e strumenti proprietari</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">4 step</p>
                <p>Processo chiaro e ripetibile</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">100%</p>
                <p>Focus su obiettivi reali</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel animate-float">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Portafoglio modello
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Equilibrio tra crescita e protezione
              </h3>
              <p className="mt-2 text-sm text-muted">
                Asset bilanciati con focus su resilienza, liquidita e opportunita.
              </p>
              <div className="mt-6 grid gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Rendimento atteso</span>
                  <span className="font-semibold text-foreground">5.2%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                  <div className="h-full w-3/5 rounded-full bg-accent" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Volatilita target</span>
                  <span className="font-semibold text-foreground">Moderata</span>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="eyebrow">Focus del mese</p>
              <h3 className="mt-3 text-xl font-semibold">
                Proteggere il capitale senza rinunciare alla crescita
              </h3>
              <p className="mt-2 text-sm text-muted">
                Strumenti flessibili, coperture leggere e tattiche di ribilanciamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <p className="eyebrow">Cosa facciamo</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Un team che unisce analisi, disciplina e visione.
              </h2>
              <p className="text-base text-muted md:text-lg">
                Lavoriamo su strategie personalizzate, con una comunicazione
                trasparente e dati che puoi leggere e usare.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="card">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="eyebrow">Metodo</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Percorso chiaro in tre momenti, dalla diagnosi alla crescita.
              </h2>
              <p className="text-base text-muted md:text-lg">
                Ogni fase e misurata con indicatori, checklist e report
                trasparenti. Tu sai sempre dove siamo.
              </p>
            </div>
            <div className="grid gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="card">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="eyebrow">Insight</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Contenuti per chi vuole capire prima di investire.
              </h2>
            </div>
            <a href="/blog" className="btn-secondary">
              Vai al blog
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <div key={item.title} className="card">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">
                  Lettura rapida, esempi pratici e indicazioni operative.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-10 md:p-14">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-[70px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <p className="eyebrow">Primo passo</p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Pronto a costruire un piano di investimento su misura?
                </h2>
                <p className="text-base text-muted md:text-lg">
                  Prenota una call conoscitiva e ricevi una prima diagnosi
                  gratuita sul tuo portafoglio.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <a href="/contatti" className="btn-primary">
                  Prenota ora
                </a>
                <p className="text-xs text-muted">
                  Placeholder: sostituire testi e numeri con quelli reali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
