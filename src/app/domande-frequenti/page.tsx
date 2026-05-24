const faqs = [
  {
    question: "Come funziona la prima consulenza?",
    answer:
      "Nella prima consulenza realizzeremo una fotografia precisa e completa della tua situazione attuale finanziaria attraverso il Render Finanziario, un metodo innovativo e unico in Italia che ti aiutera a individuare chiaramente i tuoi obiettivi di vita. Ti bastera scrivermi su whatsapp per richiedere maggiori informazioni sulla sessione di Rendering.",
  },
  {
    question: "Come vieni pagato?",
    answer:
      "Per me e fondamentale avere gli interessi allineati a quelli dei miei clienti, per questo motivo vengo pagato principalmente in percentuale sul patrimonio investito. In questo modo ho tutto l interesse nel far crescere il tuo patrimonio.",
  },
  {
    question: "Dove avviene la consulenza?",
    answer:
      "La consulenza puo svolgersi fisicamente nel mio ufficio a Pinerolo (TO) in Via Clemente Lequio 76 o a Torino in Via Gioberti 16. Altrimenti possiamo svolgere la consulenza anche online, dato che posso seguire anche i clienti lontani da me a distanza.",
  },
  {
    question: "Non ho mai investito posso iniziare con te?",
    answer: "Si, se hai della liquidita da parte e/o hai un flusso di risparmio costante.",
  },
  {
    question: "Posso averti come consulente anche se abito lontano?",
    answer:
      "Certo, ormai grazie alla tecnologia non e piu necessario incontrarsi fisicamente. Per tutti i miei clienti in giro per l Italia e nel mondo utilizziamo whatsapp e videocall come principale metodo di comunicazione.",
  },
  {
    question: "Qual e il miglior investimento?",
    answer:
      "Questa e la domanda che tutti vorrebbero sapere a cui purtroppo non c e risposta univoca. Siamo tutti diversi e abbiamo esigenze diverse. Il miglior investimento dipende dal tuo caso specifico.",
  },
  {
    question: "Devo dichiarare i miei investimenti e pagare le tasse?",
    answer:
      "Essendoci un intermediario, non dovrai preoccuparti della parte fiscale.",
  },
  {
    question: "Sono gia seguito dalla mia banca o posta, perche dovrei scegliere te?",
    answer:
      "Perche il mio lavoro e completamente diverso. Sono un libero professionista come un commercialista o un avvocato. Non ho prodotti di casa da vendere, cosi evito conflitti di interesse. Offro pianificazione patrimoniale e scegliamo insieme sul mercato gli strumenti piu adatti alla tua situazione.",
  },
  {
    question: "Ho gia degli investimenti e non sono soddisfatto/a, come posso fare?",
    answer:
      "Se non sei soddisfatto/a dei tuoi investimenti bisogna capire le motivazioni. Contattami per la prima consulenza e successivamente provvederemo a svolgere una diagnosi del tuo portafoglio.",
  },
  {
    question: "Vorrei investire ma non riesco a risparmiare",
    answer:
      "In questo caso va valutato perche non si riesce a risparmiare. Spesso il motivo e che non si fa un attenta analisi delle proprie entrate e uscite. Contattami perche ho un metodo che ti potra aiutare.",
  },
];

export default function DomandeFrequentiPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Domande Frequenti</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Qui troverai le domande che mi vengono poste di frequente.
          </h1>
          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
