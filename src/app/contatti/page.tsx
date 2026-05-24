export default function ContattiPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Parliamo dei tuoi obiettivi, con calma e chiarezza.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Compila il form e riceverai una risposta entro 24 ore lavorative.
            Oppure scrivici direttamente.
          </p>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="card space-y-5">
              <div>
                <label className="text-sm font-semibold" htmlFor="name">
                  Nome e cognome
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Mario Rossi"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mario@email.it"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold" htmlFor="goal">
                  Obiettivo principale
                </label>
                <input
                  id="goal"
                  name="goal"
                  placeholder="Esempio: crescita del capitale"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold" htmlFor="message">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Raccontaci il contesto e le tue priorita"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm"
                />
              </div>
              <button type="button" className="btn-primary">
                Invia richiesta
              </button>
              <p className="text-xs text-muted">
                Placeholder: integrare con invio email o CRM.
              </p>
            </form>
            <div className="space-y-6">
              <div className="card">
                <p className="eyebrow">Dove siamo</p>
                <h2 className="mt-3 text-xl font-semibold">Milano, Italia</h2>
                <p className="mt-2 text-sm text-muted">
                  Riceviamo su appuntamento, anche in video call.
                </p>
              </div>
              <div className="card">
                <p className="eyebrow">Contatti diretti</p>
                <p className="mt-4 text-sm text-muted">info@investimentiintelligenti.it</p>
                <p className="text-sm text-muted">+39 02 0000 0000</p>
              </div>
              <div className="card">
                <p className="eyebrow">Orari</p>
                <p className="mt-4 text-sm text-muted">
                  Lun - Ven, 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
