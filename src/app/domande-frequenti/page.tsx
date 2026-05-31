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

import Image from "next/image";

export default function DomandeFrequentiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="FAQ Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Domande Frequenti
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100/90 font-medium drop-shadow">
            Qui troverai le risposte alle domande che mi vengono poste più spesso.
          </p>
        </div>

        {/* Wave Divider to Slate 50 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-start sm:items-center justify-between gap-4 p-6 cursor-pointer hover:bg-slate-50 transition-colors font-semibold text-base sm:text-lg text-accent">
                  <span className="flex items-start sm:items-center gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm mt-0.5 sm:mt-0">{index + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-blue-500 mt-1 sm:mt-0">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-6 pt-2 text-accent/70 leading-relaxed text-sm sm:text-base">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
