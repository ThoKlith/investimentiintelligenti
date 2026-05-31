import Image from "next/image";
import { ArrowDown, Calendar } from "lucide-react";

export default function EducazioneFinanziariaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Educazione Finanziaria Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Educazione Finanziaria
          </h1>
        </div>

        {/* Wave Divider to White */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 lg:py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-accent mb-6">
            Guarda alcuni <span className="text-blue-600">video</span> che potrebbero esserti utili!
          </h2>
          
          <div className="flex justify-center mb-16 text-blue-600 animate-bounce">
            <ArrowDown size={36} strokeWidth={3} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Video Placeholder 1 */}
            <div className="flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-4 shadow-md group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                   {/* Play Button */}
                   <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-2 uppercase tracking-wider">
                <Calendar size={14} /> 20 Feb
              </div>
              <h3 className="font-bold text-lg text-accent px-2 group-hover:text-blue-600 transition-colors leading-snug">
                L'importanza della pianificazione finanziaria
              </h3>
            </div>

            {/* Video Placeholder 2 */}
            <div className="flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-4 shadow-md group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                   <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-2 uppercase tracking-wider">
                <Calendar size={14} /> 20 Feb
              </div>
              <h3 className="font-bold text-lg text-accent px-2 group-hover:text-blue-600 transition-colors leading-snug">
                La strategia del piano di accumulo
              </h3>
            </div>

            {/* Video Placeholder 3 */}
            <div className="flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-4 shadow-md group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                   <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-2 uppercase tracking-wider">
                <Calendar size={14} /> 20 Feb
              </div>
              <h3 className="font-bold text-lg text-accent px-2 group-hover:text-blue-600 transition-colors leading-snug">
                Ecco perché devi crearti la tua seconda pensione
              </h3>
            </div>
          </div>

          {/* Main Large Video Placeholder */}
          <div className="max-w-4xl mx-auto flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-6 shadow-lg group-hover:shadow-2xl transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                   <div className="w-24 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-xl">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-3 uppercase tracking-wider">
              <Calendar size={14} /> 20 Feb
            </div>
            <h3 className="font-bold text-2xl lg:text-3xl text-accent px-4 group-hover:text-blue-600 transition-colors leading-tight">
              Come risparmiare sulle tasse con il fondo pensione
            </h3>
          </div>

        </div>
      </section>
    </div>
  );
}
