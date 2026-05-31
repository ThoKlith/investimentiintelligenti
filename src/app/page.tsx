"use client";

import Image from "next/image";
import { AlignLeft, PenLine, Wallet, Eye, Star, Mail, Phone, MapPin, Menu, X, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="flex items-center justify-between px-6 lg:px-20 mx-auto max-w-7xl w-full">
          <div className="font-bold text-accent text-xl lg:hidden">
            Amine Bouzan
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center justify-center w-full text-sm font-semibold text-accent">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Chi Sono</a>
            <a href="#metodo" className="hover:text-blue-600 transition-colors">Il mio Metodo</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Domande Frequenti</a>
            <a href="#" className="px-6 py-2 bg-accent text-white rounded-full hover:bg-blue-800 transition-colors">Prenota Appuntamento</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-accent p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 gap-6 font-semibold text-accent border-t border-gray-100">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Chi Sono</a>
            <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Il mio Metodo</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Domande Frequenti</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2 bg-accent text-white rounded-full hover:bg-blue-800 transition-colors mt-2">Prenota Appuntamento</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 pt-32 lg:pt-40 pb-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6 z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-accent tracking-tight">
            PROGETTIAMO<br className="hidden sm:block"/>INSIEME LA<br className="hidden sm:block"/>TUA VITA?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-accent/80 font-medium mt-6">
            Con un metodo finanziario sereno e prospero
          </p>
        </div>
        <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex justify-center items-end mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl opacity-70 scale-75 lg:scale-100"></div>
          <Image 
            src="/IMG_0391-copia-2.png" 
            alt="Consulente Finanziario" 
            fill 
            className="object-contain object-bottom z-10 drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Metodo Section with relative container for wave */}
      <div className="relative bg-accent">
        {/* Wave to Dark Blue (Absolutely positioned to the top of the container) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-[60px] md:h-[120px] lg:h-[180px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <section id="metodo" className="text-white py-16 lg:py-24 px-6 relative z-10">
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

        {/* Wave to Image Background (Bottom of dark blue section) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[99%] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-[60px] md:h-[120px] lg:h-[180px] block drop-shadow-lg" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.8" d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
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
      </section>

      {/* Mission Section in Dark Blue */}
      <div className="relative bg-accent">
        {/* Top Wave transition into this section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-[60px] md:h-[120px] lg:h-[180px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,186.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

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

      {/* Footer */}
      <footer className="bg-accent text-white py-16 lg:py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-3 rounded-full">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200/80 mb-1">Email</p>
                <p className="font-semibold text-lg">segreteria@investimentiamine.it</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-3 rounded-full">
                <Phone className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200/80 mb-1">Numero</p>
                <p className="font-semibold text-lg">+39 351 897 1482</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-3 rounded-full">
                <MapPin className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200/80 mb-1">Posizione</p>
                <p className="font-semibold text-lg">via Clemente Lequio 76, Pinerolo TO</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-sm text-blue-100/80 lg:border-l lg:border-white/10 lg:pl-12 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
            <p className="uppercase tracking-widest text-xs font-bold text-white mb-6">Albo e Iscrizioni</p>
            <p className="leading-relaxed">Consulente finanziario abilitato all'offerta fuori sede iscritto all'albo OCF con delibera N. 1873 del 24/03/2022.</p>
            <p className="leading-relaxed">Subagente assicurativo iscritto all'albo RUI sezione E con N.E000712221.</p>
            <div className="flex gap-4 items-center mt-8">
              <div className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded font-bold text-lg tracking-wider">OCF</div>
              <div className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded font-bold text-lg tracking-wider">IVASS</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-200/60">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Chi Sono</a>
            <a href="#" className="hover:text-white transition-colors">Domande Frequenti</a>
            <a href="#" className="hover:text-white transition-colors">Prenota Appuntamento</a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] sm:text-xs text-blue-200/40 tracking-wider">
          DOCUMENTO DI MARKETING CON FINALITÀ PROMOZIONALI, REDATTO DA AMINE BOUZAN DA CONSIDERARSI COME COMUNICAZIONE COMMERCIALE.
        </div>
      </footer>
    </div>
  );
}

