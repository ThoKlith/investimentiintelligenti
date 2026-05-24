const values = [
  {
    title: "Trasparenza radicale",
    description:
      "Report chiari, decisioni motivate e nessuna promessa irrealistica.",
  },
  {
    title: "Metodo prima di tutto",
    description:
      "Processi replicabili che riducono il rumore e migliorano la disciplina.",
  },
  {
    title: "Crescita sostenibile",
    description:
      "Soluzioni che tengono conto del rischio reale e del tempo a disposizione.",
  },
];

const team = [
  { name: "Davide Rossi", role: "Founder & Strategist" },
  { name: "Giulia Bianchi", role: "Portfolio Analyst" },
  { name: "Marco Conti", role: "Client Advisor" },
];

export default function ChiSiamoPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Chi siamo</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Una boutique finanziaria che lavora con rigore e attenzione.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Investimenti Intelligenti nasce per portare chiarezza in un settore
            complesso. Seguiamo un metodo concreto, supportato da dati, e
            accompagnamo le persone nelle decisioni piu delicate.
          </p>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Il team</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Persone, non solo numeri.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-muted">
              Ogni consulente segue pochi clienti per garantire tempo, focus e
              risultati misurabili.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card">
                <div className="h-36 rounded-2xl bg-line/40" />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
