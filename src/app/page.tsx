export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-10 top-24 h-64 w-64 rounded-full bg-accent-2/20 blur-[120px]" />

      <section className="section">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="eyebrow">Progettiamo insieme la tua vita</p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Progettiamo insieme la tua vita.
              </h1>
              <p className="text-lg text-muted md:text-xl">
                Per un futuro finanziario sereno e prospero.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/393518971482" className="btn-primary">
                Scrivimi su Whatsapp
              </a>
              <a href="#metodo" className="btn-secondary">
                Scopri il metodo
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="chip">CFP(R)</span>
              <span className="chip">Render Finanziario</span>
              <span className="chip">Pianificazione</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="stat-card">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold">Strategia chiara</p>
              </div>
              <div className="stat-card">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Metodo
                </p>
                <p className="mt-2 text-lg font-semibold">4 fasi guidate</p>
              </div>
              <div className="stat-card">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Supporto
                </p>
                <p className="mt-2 text-lg font-semibold">Monitoraggio</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel animate-float">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Metodo</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Il mio metodo di lavoro
              </h3>
              <p className="mt-2 text-sm text-muted">
                Grazie al Render Finanziario, un metodo innovativo e unico in
                Italia ispirato agli standard internazionali di pianificazione
                finanziaria, trasformiamo la complessita in chiarezza e la
                pianificazione in liberta.
              </p>
            </div>
            <div className="card">
              <p className="eyebrow">Sessione iniziale</p>
              <h3 className="mt-3 text-xl font-semibold">
                Prenota la prima sessione di Rendering
              </h3>
              <p className="mt-2 text-sm text-muted">
                Scrivimi su Whatsapp e iniziamo con una fotografia completa della
                tua situazione finanziaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section bg-surface-muted surface-grid">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="eyebrow">Il mio metodo di lavoro</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Render Finanziario: dalla complessita alla chiarezza.
              </h2>
              <p className="text-base text-muted md:text-lg">
                Insieme trasformiamo la pianificazione in liberta attraverso un
                percorso strutturato e misurabile.
              </p>
              <div className="divider-line mt-6" />
            </div>
            <div className="grid gap-6">
              <div className="card card-step">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Fase 1
                </p>
                <h3 className="mt-2 text-lg font-semibold">Prima consulenza</h3>
                <p className="mt-2 text-sm text-muted">
                  In 1 ora realizziamo una fotografia precisa della tua
                  situazione finanziaria e valutiamo i passi per progettare i
                  tuoi sogni.
                </p>
              </div>
              <div className="card card-step">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Fase 2
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Progettazione del futuro finanziario
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Se proseguiamo insieme, gettiamo le basi per progettare il
                  tuo futuro finanziario in modo continuativo.
                </p>
              </div>
              <div className="card card-step">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Fase 3
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Implementazione del progetto
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Implementiamo cio che serve per realizzare i tuoi progetti
                  finanziari.
                </p>
              </div>
              <div className="card card-step">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Fase 4
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Monitoraggio costante
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Monitoriamo progressi e obiettivi, muovendoci con agilita in
                  base a esigenze e cambiamenti di mercato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="space-y-4">
            <p className="eyebrow">I miei valori</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Trasparenza, personalizzazione e zero conflitti di interesse.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-lg font-semibold">Trasparenza</h3>
              <p className="mt-3 text-sm text-muted">
                La trasparenza e alla base di un rapporto di fiducia e duraturo.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Personalizzazione</h3>
              <p className="mt-3 text-sm text-muted">
                Ogni persona ha esigenze e obiettivi differenti.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Zero conflitti</h3>
              <p className="mt-3 text-sm text-muted">
                Posso scegliere ogni strumento sul mercato senza incentivi.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Aggiornamento continuo</h3>
              <p className="mt-3 text-sm text-muted">
                Monitoraggio costante e competenze sempre aggiornate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="card">
            <p className="eyebrow">Missione</p>
            <blockquote className="mt-4 text-2xl font-semibold leading-relaxed">
              "La mia missione e aiutare le persone a progettare con cura la
              propria vita attraverso una gestione consapevole del denaro, con
              l obiettivo di costruire un futuro finanziario sereno e prospero"
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Cosa dicono di me su Google</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-semibold">
                Dott.ssa Lorenza T. - Professoressa
              </h3>
              <p className="mt-3 text-sm text-muted">
                Consulente preparato e affidabile. Dopo un attenta analisi del
                portafoglio, prospetta soluzioni adatte e spiega con sintesi e
                linearita.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">
                Dott. Nicolo S. - Medico Chirurgo
              </h3>
              <p className="mt-3 text-sm text-muted">
                Consiglia in modo chiaro e semplice, con strategie di
                diversificazione personalizzate e grande disponibilita.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">
                Arch. Virginia B. - Light Designer
              </h3>
              <p className="mt-3 text-sm text-muted">
                Professionale, serio e molto competente. Ti segue passo dopo
                passo con competenza e chiarezza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="eyebrow">Contatti</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Scrivimi per prenotare la prima sessione di Rendering.
              </h2>
              <p className="text-base text-muted md:text-lg">
                Email: segreteria@investimentiamine.it
              </p>
              <p className="text-base text-muted md:text-lg">
                Numero: +39 351 897 1482
              </p>
              <p className="text-base text-muted md:text-lg">
                Posizione: via Clemente Lequio 76, Pinerolo TO
              </p>
            </div>
            <div className="card space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Albo e iscrizioni
              </p>
              <p className="text-sm text-muted">
                Consulente finanziario abilitato all offerta fuori sede iscritto
                all albo OCF con delibera N. 1873 del 24/03/2022
              </p>
              <p className="text-sm text-muted">
                Subagente assicurativo iscritto all albo RUI sezione E con
                N.E000712221
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
