import Image from "next/image";
import Link from "next/link";

export default function ChiSiamo() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" // Fallback to hero.png or we can use another image if available
            alt="Amine Bouzan Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent/50"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white relative z-10 drop-shadow-lg">
          Chi Sono?
        </h1>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-lg lg:text-xl text-accent/70 leading-relaxed">
            Ho sempre desiderato avere un impatto positivo sulle persone, motivo per cui ho deciso di svolgere la professione di consulente finanziario.
          </p>
          
          <p className="text-xl lg:text-2xl font-bold text-accent leading-relaxed">
            La mia missione è aiutare le persone a progettare con cura la propria vita attraverso una gestione consapevole del denaro, con l'obiettivo di costruire un futuro finanziario sereno e prospero.
          </p>
          
          <p className="text-lg lg:text-xl text-accent/80 leading-relaxed">
            Il mio obiettivo è farti vivere senza ansie finanziarie, permettendoti di dedicare tempo a tutto il tuo mondo: iniziare a progettare insieme un percorso solido e strutturato verso una maggiore serenità finanziaria.
          </p>
          
          <p className="text-lg lg:text-xl text-accent/70 leading-relaxed">
            Se la tua vita è mossa soprattutto da incertezze generali, preoccupazioni economiche o poco tempo a disposizione, io posso aggiungervi tutta la consapevolezza su cui ti serve e che ti rende assolutamente necessaria per la costruzione di un futuro sereno e prospero.
          </p>
          
          <p className="text-lg lg:text-xl text-accent/70 leading-relaxed">
            Se vuoi scoprire come possiamo lavorare insieme per costruire sin da adesso il tuo futuro (ma anche l'attualità promozione, individuazione di obiettivi e gestione delle incertezze della vita), contattami!
          </p>

          <div className="pt-12 flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/IMG_0391-copia-2.png" alt="Amine Bouzan" fill className="object-cover object-top" />
            </div>
            <div className="text-sm font-semibold text-accent/60 italic">
              Costruiamo il tuo futuro
            </div>
          </div>

          <div className="pt-12">
            <Link href="/contatti" className="inline-block text-xl lg:text-2xl font-black text-accent hover:text-blue-700 transition-colors tracking-wide underline underline-offset-8 decoration-2 decoration-blue-200 hover:decoration-blue-700">
              PROGETTIAMO INSIEME IL TUO FUTURO!
            </Link>
          </div>
        </div>
      </section>

      {/* Il Mio Percorso Section */}
      <section className="bg-accent text-white py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-20 lg:mb-32">IL MIO PERCORSO</h2>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Horizontal Line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-blue-400/30"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-sm leading-snug px-2">Laurea in Amministrazione, Finanza e Controllo</h3>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-sm leading-snug px-2">Laurea Magistrale in Finanza Aziendale e Mercati Finanziari</h3>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-sm leading-snug px-2">Executive Master in Consulenza Finanziaria Indipendente</h3>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-sm leading-snug px-2">Esame di stato Organismo Consulenti Finanziari</h3>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-sm leading-snug px-2">Tra i primi 100 consulenti finanziari CFP® in Italia</h3>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden relative pl-6 border-l-2 border-blue-400/30 space-y-12 ml-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-base">Laurea in Amministrazione, Finanza e Controllo</h3>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-base">Laurea Magistrale in Finanza Aziendale e Mercati Finanziari</h3>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-base">Executive Master in Consulenza Finanziaria Indipendente</h3>
            </div>
            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-base">Esame di stato Organismo Consulenti Finanziari</h3>
            </div>
            {/* Step 5 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-accent border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-base">Tra i primi 100 consulenti finanziari CFP® in Italia</h3>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 mt-24 lg:mt-32">
            <p className="text-sm lg:text-base text-blue-100/90 font-medium">
              La certificazione CFP® o Certified Financial Planner è la certificazione più importante al mondo in pianificazione finanziaria presente in 26 paesi con oltre 200.000 professionisti attivi.
            </p>
            <p className="text-sm lg:text-base text-blue-100/90 font-medium">
              I professionisti CFP® soddisfano rigorosi standard di istruzione, formazione ed etica e si impegnano a servire al meglio gli interessi dei loro clienti.
            </p>
            <p className="text-sm lg:text-base text-blue-100/90 font-medium">
              Gli standard di eccellenza CFP® e un insieme di linee guida, pratiche e criteri universalmente riconosciuti e adottati dai consulenti finanziari per garantire la qualità, l'efficacia e l'integrità dei servizi che offrono.
            </p>
          </div>
        </div>
      </section>

      {/* Dove puoi trovarmi Section */}
      <section className="bg-surface-muted py-20 lg:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">Dove puoi trovarmi?</h2>
          <p className="text-lg text-accent/70 mb-10">
            Se ti interessa parlare con me, usa pure i form di contatto o chiamami.
          </p>
          <Link href="/contatti" className="btn-primary inline-flex">
            Vai ai Contatti
          </Link>
        </div>
      </section>
    </div>
  );
}
