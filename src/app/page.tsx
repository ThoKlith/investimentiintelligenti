import Image from "next/image";
import { AlignLeft, PenLine, Wallet, Eye, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">

      {/* Hero Section */}
      <section className="relative w-full pt-32 lg:pt-40 pb-0 overflow-hidden bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-end gap-10">
          <div className="pb-16 lg:pb-32 z-10 text-center lg:text-left space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-accent tracking-tight">
              PROGETTIAMO<br className="hidden lg:block"/>INSIEME LA<br className="hidden lg:block"/>TUA VITA?
            </h1>
            <p className="text-xl sm:text-2xl text-accent/80 font-medium">
              Con un metodo finanziario sereno e prospero
            </p>
            <div className="pt-4 lg:hidden">
               <a href="/contatti" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                 Prenota Appuntamento
               </a>
            </div>
          </div>
          <div className="relative h-[450px] sm:h-[600px] lg:h-[700px] w-full flex justify-center items-end z-10">
            <div className="absolute bottom-0 w-[80%] h-[80%] bg-blue-200/50 rounded-full blur-3xl opacity-60"></div>
            <Image 
              src="/IMG_0391-copia-2.png" 
              alt="Consulente Finanziario" 
              fill 
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        
        {/* Wave Divider to Dark Blue Metodo */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Metodo Section - Clean Professional Straight Separator */}
      <div className="relative bg-accent z-20">
        <section id="metodo" className="text-white py-20 lg:py-28 px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">IL MIO METODO DI LAVORO</h2>
            <p className="max-w-3xl mx-auto text-base lg:text-lg text-blue-100/80">
              Render Finanziario: dalla complessità alla chiarezza. Insieme trasformiamo la pianificazione in libertà attraverso un percorso strutturato e misurabile.
            </p>
          </div>

          <div className="timeline-container">
            {/* Step 1 */}
            <div className="timeline-item right">
              <div className="timeline-icon">1</div>
              <div className="bg-white text-accent p-6 lg:p-8 rounded-3xl shadow-xl lg:ml-8 hover:-translate-y-1 transition-transform">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Prima Consulenza</h3>
                <p className="text-sm text-accent/80">In 1 ora realizziamo una fotografia precisa della tua situazione finanziaria e valutiamo i passi per progettare i tuoi sogni.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="timeline-item left">
              <div className="timeline-icon">2</div>
              <div className="bg-white text-accent p-6 lg:p-8 rounded-3xl shadow-xl lg:mr-8 hover:-translate-y-1 transition-transform">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Progettazione del proprio Futuro</h3>
                <p className="text-sm text-accent/80">Se proseguiamo insieme, gettiamo le basi per progettare il tuo futuro finanziario in modo continuativo.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="timeline-item right">
              <div className="timeline-icon">3</div>
              <div className="bg-white text-accent p-6 lg:p-8 rounded-3xl shadow-xl lg:ml-8 hover:-translate-y-1 transition-transform">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Implementazione del progetto</h3>
                <p className="text-sm text-accent/80">Implementiamo ciò che serve per realizzare i tuoi progetti finanziari in totale sicurezza.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="timeline-item left">
              <div className="timeline-icon">4</div>
              <div className="bg-white text-accent p-6 lg:p-8 rounded-3xl shadow-xl lg:mr-8 hover:-translate-y-1 transition-transform">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Monitoraggio costante</h3>
                <p className="text-sm text-accent/80">Monitoriamo progressi e obiettivi, muovendoci con agilità in base a esigenze e cambiamenti di mercato.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider to Valori */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Valori Section */}
      <section className="relative py-28 lg:py-40 px-6 min-h-[800px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-20">
          <Image src="/AMINE-2-scaled.jpg" alt="Background" fill className="object-cover object-top opacity-50" />
        </div>
        <div className="absolute inset-0 bg-white/70 -z-10 backdrop-blur-[2px]"></div>
        
        <h2 className="text-3xl lg:text-5xl font-bold text-accent mb-12 relative z-10 text-center">I MIEI VALORI</h2>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-[40px] shadow-2xl p-8 lg:p-12 max-w-6xl w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-16 text-center">
          <div className="flex flex-col items-center h-full">
            <div className="bg-blue-600 text-white p-5 rounded-full mb-6 shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
              <AlignLeft size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Trasparenza</h3>
            <p className="text-accent/70 text-sm leading-relaxed mt-auto">La trasparenza è alla base di un rapporto di fiducia e duraturo.</p>
          </div>
          <div className="flex flex-col items-center h-full">
            <div className="bg-blue-600 text-white p-5 rounded-full mb-6 shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
              <PenLine size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Personalizzazione</h3>
            <p className="text-accent/70 text-sm leading-relaxed mt-auto">Ogni persona ha esigenze e obiettivi differenti.</p>
          </div>
          <div className="flex flex-col items-center h-full">
            <div className="bg-blue-600 text-white p-5 rounded-full mb-6 shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
              <Wallet size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Zero conflitti</h3>
            <p className="text-accent/70 text-sm leading-relaxed mt-auto">Posso scegliere ogni strumento sul mercato senza incentivi.</p>
          </div>
          <div className="flex flex-col items-center h-full">
            <div className="bg-blue-600 text-white p-5 rounded-full mb-6 shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Aggiornamento</h3>
            <p className="text-accent/70 text-sm leading-relaxed mt-auto">Monitoraggio costante e competenze sempre aggiornate.</p>
          </div>
        </div>

        <button className="btn-primary relative z-10 px-14 py-4 text-lg shadow-[0_10px_30px_rgba(0,68,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,68,255,0.6)] hover:-translate-y-1">
          Chi Sono
        </button>

        {/* Wave Divider to Mission */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section in Dark Blue */}
      <div className="relative bg-accent">

        <section className="relative py-24 lg:py-32 px-6 flex justify-center z-10">
          <div className="bg-white rounded-[40px] max-w-4xl w-full p-10 lg:p-16 text-center shadow-2xl relative">
            <Quote className="absolute top-6 left-6 lg:top-12 lg:left-12 text-blue-100/50" size={60} />
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent italic leading-relaxed relative z-10 mt-6 lg:mt-0">
              "La mia missione è aiutare le persone a progettare con cura la propria vita attraverso una gestione consapevole del denaro, con l'obiettivo di costruire un futuro finanziario sereno e prospero."
            </p>
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <section className="bg-surface-muted py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-accent mb-12 text-center lg:text-left">Cosa dicono di me su Google...</h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="card text-left flex flex-col h-full hover:-translate-y-1 transition-transform">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-2">Dott.ssa Lorenza T. - Professoressa</h3>
              <p className="text-sm text-accent/70 mb-6 leading-relaxed flex-grow">Consulente preparato e affidabile. Dopo un'attenta analisi del portafoglio, prospetta soluzioni adatte e spiega con sintesi e linearità.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-auto">Read on Google &rarr;</a>
            </div>
            <div className="card text-left flex flex-col h-full hover:-translate-y-1 transition-transform">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-2">Dott. Nicolò S. - Medico Chirurgo</h3>
              <p className="text-sm text-accent/70 mb-6 leading-relaxed flex-grow">Consiglia in modo chiaro e semplice, con strategie di diversificazione personalizzate e grande disponibilità.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-auto">Read on Google &rarr;</a>
            </div>
            <div className="card text-left flex flex-col h-full hover:-translate-y-1 transition-transform">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-2">Arch. Virginia B. - Light Designer</h3>
              <p className="text-sm text-accent/70 mb-6 leading-relaxed flex-grow">Professionale, serio e molto competente. Ti segue passo dopo passo con competenza e chiarezza.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-auto">Read on Google &rarr;</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

