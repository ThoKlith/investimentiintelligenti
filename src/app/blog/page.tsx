import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const posts = [
  {
    title: "Silenzio assenso TFR 2026: cosa cambia davvero dal 1° luglio",
    date: "Maggio 2026",
    tag: "Previdenza",
    slug: "silenzio-assenso-tfr-2026",
    excerpt: "Dal 1° luglio 2026 l'adesione alla previdenza complementare diventa la regola, la rinuncia l'eccezione. Cosa significa per i lavoratori dipendenti e perché non puoi più rimandare."
  },
  {
    title: "Ribilanciamento: quando serve davvero",
    date: "03 Mag 2026",
    tag: "Strategia",
    slug: "ribilanciamento-quando-serve",
    excerpt: "Questo è un testo segnaposto temporaneo. Quando avrai i tuoi veri articoli, questo spazio mostrerà un breve riassunto dell'argomento trattato."
  },
  {
    title: "Come mettere ordine nel patrimonio familiare (e perché non puoi più rimandarlo)",
    date: "18 Ago 2026",
    tag: "Pianificazione",
    slug: "ordine-patrimonio-familiare",
    excerpt: "Conti correnti che si confondono, polizze dimenticate in un cassetto, una casa che pesa sul bilancio e qualche fondo che non sai più cosa contenga. Un patrimonio familiare disordinato non è un problema estetico: è un costo silenzioso."
  },
  {
    title: "Cos'è la progettazione finanziaria: parto dalla vita, non dai prodotti",
    date: "Maggio 2026",
    tag: "Metodo",
    slug: "cos-e-la-progettazione-finanziaria",
    excerpt: "Perché la pianificazione finanziaria personalizzata non parte dal portafoglio, ma dalla persona — e perché questo cambia tutto."
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Blog Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Blog
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100/90 font-medium drop-shadow">
            Insight e strumenti per investire con consapevolezza.
          </p>
        </div>

        {/* Wave Divider to Slate 50 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                  <span className="bg-blue-50 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-accent/40">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-accent mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-accent/70 leading-relaxed mb-8 flex-grow text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-accent group-hover:text-blue-600 transition-colors mt-auto">
                  Leggi l'articolo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
