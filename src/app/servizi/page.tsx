const services = [
  {
    title: "Check-up del portafoglio",
    description:
      "Analisi dettagliata di asset, rischi e allineamento agli obiettivi.",
  },
  {
    title: "Strategia di lungo periodo",
    description:
      "Costruiamo un piano coerente con reddito, tempo e tolleranza al rischio.",
  },
  {
    title: "Piani di accumulo",
    description:
      "Percorsi progressivi per crescere il capitale senza stress operativo.",
  },
  {
    title: "Gestione liquidita",
    description:
      "Equilibrio tra disponibilita immediata e opportunita di rendimento.",
  },
  {
    title: "Tutela patrimonio",
    description:
      "Protezione da volatilita, errori comportamentali e concentrazione eccessiva.",
  },
  {
    title: "Report e monitoring",
    description:
      "Sintesi mensili, KPI e ribilanciamenti guidati.",
  },
];

export default function ServiziPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Servizi</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Un percorso modulare, adattato al tuo momento finanziario.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Scegli il livello di supporto che ti serve oggi e cresci con noi nel
            tempo. Ogni servizio e pensato per essere chiaro, misurabile e
            replicabile.
          </p>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-line bg-white p-10 md:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="eyebrow">Percorso consigliato</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Check-up iniziale + strategia dedicata
                </h2>
                <p className="mt-4 text-base text-muted md:text-lg">
                  Iniziamo con un audit completo, poi definiamo un piano operativo
                  e un calendario di revisioni.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <a href="/contatti" className="btn-primary">
                  Prenota la call
                </a>
                <p className="text-xs text-muted">
                  Placeholder: aggiornare con prezzi o pacchetti reali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
