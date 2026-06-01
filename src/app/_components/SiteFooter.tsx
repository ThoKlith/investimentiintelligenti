import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-accent text-white py-16 lg:py-20 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
              <Mail className="text-blue-400" size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-blue-200/80 mb-1">Email</p>
              <p className="font-semibold text-sm md:text-base lg:text-lg truncate sm:break-normal">segreteria@investimentiamine.it</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
              <Phone className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-blue-200/80 mb-1">Numero</p>
              <p className="font-semibold text-sm md:text-base lg:text-lg">+39 351 897 1482</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
              <MapPin className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-blue-200/80 mb-1">Posizione</p>
              <p className="font-semibold text-sm md:text-base lg:text-lg leading-snug">via Clemente Lequio 76, Pinerolo TO</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 text-xs md:text-sm text-blue-100/80 lg:border-l lg:border-white/10 lg:pl-12 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
          <p className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-white mb-4 md:mb-6">Albo e Iscrizioni</p>
          <p className="leading-relaxed">Consulente finanziario abilitato all'offerta fuori sede iscritto all'albo OCF con delibera N. 1873 del 24/03/2022.</p>
          <p className="leading-relaxed">Subagente assicurativo iscritto all'albo RUI sezione E con N.E000712221.</p>
          <div className="flex gap-4 items-center mt-6 md:mt-8">
            <div className="bg-white/10 border border-white/20 text-white px-4 py-2 md:px-5 md:py-2 rounded font-bold text-base md:text-lg tracking-wider">OCF</div>
            <div className="bg-white/10 border border-white/20 text-white px-4 py-2 md:px-5 md:py-2 rounded font-bold text-base md:text-lg tracking-wider">IVASS</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-200/60">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Sono</Link>
          <Link href="/educazione-finanziaria" className="hover:text-white transition-colors">Educazione Finanziaria</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/domande-frequenti" className="hover:text-white transition-colors">Domande Frequenti</Link>
          <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Prenota Appuntamento</a>
        </div>
        <div className="flex gap-8">
          <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
      <div className="text-center mt-12 text-[10px] sm:text-xs text-blue-200/40 tracking-wider">
        DOCUMENTO DI MARKETING CON FINALITÀ PROMOZIONALI, REDATTO DA AMINE ALAHIYANE DA CONSIDERARSI COME COMUNICAZIONE COMMERCIALE.
      </div>
    </footer>
  );
}
