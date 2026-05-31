import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { posts } from "../page";
import { notFound } from "next/navigation";
import { TFR2026 } from "./TFR2026";
import { OrdinePatrimonio } from "./OrdinePatrimonio";
import { ProgettazioneFinanziaria } from "./ProgettazioneFinanziaria";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Seleziona altri 3 articoli (escludendo quello corrente) per la sezione "suggeriti"
  const suggestedPosts = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Article Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Article Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent to-accent/80"></div>
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 font-semibold text-sm tracking-wider uppercase">
            <ArrowLeft size={16} /> Torna al blog
          </Link>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
            <span className="bg-blue-900/50 px-3 py-1 rounded-full border border-blue-500/30">{post.tag}</span>
            <span className="text-blue-100/60">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {post.title}
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-20 px-6">
        <article className="max-w-3xl mx-auto prose prose-slate prose-lg prose-headings:text-accent prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-gray-100">
          {slug === "silenzio-assenso-tfr-2026" && <TFR2026 />}
          {slug === "ordine-patrimonio-familiare" && <OrdinePatrimonio />}
          {slug === "cos-e-la-progettazione-finanziaria" && <ProgettazioneFinanziaria />}
          
          {!["silenzio-assenso-tfr-2026", "ordine-patrimonio-familiare", "cos-e-la-progettazione-finanziaria"].includes(slug) && (
            <>
              <p className="lead">Questo è un articolo dimostrativo.</p>
              <p>Presto verranno caricati i contenuti reali per "{post.title}". Torna a visitarci!</p>
            </>
          )}
        </article>
      </section>

      {/* Suggested Articles */}
      <section className="py-20 bg-white border-t border-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-accent mb-12 text-center">Potrebbe interessarti anche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {suggestedPosts.map((sPost) => (
              <Link href={`/blog/${sPost.slug}`} key={sPost.slug} className="bg-slate-50 rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                  <span className="bg-blue-100/50 px-3 py-1 rounded-full">{sPost.tag}</span>
                  <span className="text-accent/40">{sPost.date}</span>
                </div>
                <h3 className="text-xl font-bold text-accent mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {sPost.title}
                </h3>
                <p className="text-accent/70 leading-relaxed mb-8 flex-grow text-sm">
                  {sPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-accent group-hover:text-blue-600 transition-colors mt-auto">
                  Leggi <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
