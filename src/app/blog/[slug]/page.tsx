import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { posts } from "../page";
import { notFound } from "next/navigation";

// Definizione corretta delle props per Next.js 15+ 
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
          {slug === "silenzio-assenso-tfr-2026" ? (
            <>
              <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
                Dal 1° luglio 2026 l'adesione alla previdenza complementare diventa la regola, la rinuncia l'eccezione. Cosa significa per i lavoratori dipendenti del settore privato, perché lo Stato lo sta facendo davvero e come trasformare un automatismo normativo in una scelta consapevole.
              </p>
              
              <p>A cura di <strong>Dott. Amine Alahiyane, CFP®</strong></p>

              <p>
                Per la prima volta nella storia previdenziale italiana, non scegliere è una scelta. <strong>Dal 1° luglio 2026</strong> — con l'entrata in vigore dell'articolo 1, commi 203-205 della Legge 30 dicembre 2025 n. 199 (Legge di Bilancio 2026) — i lavoratori dipendenti del settore privato che vengono assunti per la prima volta saranno iscritti automaticamente alla previdenza complementare. Se entro 60 giorni dall'assunzione non manifestano espressamente una scelta diversa, il loro TFR confluirà di default nel fondo pensione previsto dal contratto collettivo applicato in azienda.
              </p>
              <p>Non è un dettaglio tecnico. È un cambio di paradigma culturale.</p>
              <p>
                Per decenni, il sistema italiano si è retto su una promessa implicita: <em>ci penserà lo Stato</em>. Pensione pubblica, TFR in azienda, magari una casa in più. Quella promessa, oggi, lo dice il legislatore stesso: non basta. E lo dice nel modo più chiaro possibile, ribaltando l'onere della scelta. Non sei più tu che devi attivarti per aderire alla previdenza integrativa. Sei tu che, se vuoi restarne fuori, devi dirlo entro un tempo preciso.
              </p>
              <p>
                In questo articolo voglio aiutarti a capire tre cose: cosa cambia concretamente per te il 1° luglio 2026, perché lo Stato lo sta facendo proprio adesso, e — soprattutto — come trasformare un automatismo normativo in una decisione tua, consapevole, costruita su misura della tua vita.
              </p>

              <h2>Cos'è il silenzio assenso TFR e cosa cambia dal 1° luglio 2026</h2>
              <p>
                Il <strong>silenzio assenso</strong> è il meccanismo per cui l'assenza di una scelta esplicita da parte del lavoratore equivale, ai fini di legge, a una scelta affermativa. Applicato alla previdenza complementare, significa questo: se al momento dell'assunzione non comunichi nulla, il tuo TFR — il trattamento di fine rapporto — viene destinato automaticamente a un fondo pensione di categoria, quello previsto dal contratto collettivo nazionale (CCNL) applicato alla tua azienda.
              </p>
              <p>
                Fino al 30 giugno 2026, le regole erano diverse. Avevi sei mesi di tempo per decidere dove far confluire il tuo TFR e, in assenza di scelta, scattava comunque un meccanismo di adesione tacita, ma con caratteristiche più morbide. Dal 1° luglio 2026, tutto cambia.
              </p>

              <h3>Le tre novità da conoscere</h3>
              <ul>
                <li><strong>Adesione automatica dal primo giorno.</strong> Per i lavoratori alla prima esperienza lavorativa, al momento dell'assunzione si è di fatto già "pre-iscritti" al fondo pensione di categoria. L'iscrizione non richiede più una manifestazione di volontà iniziale.</li>
                <li><strong>Finestra di scelta ridotta a 60 giorni.</strong> I sei mesi di tempo per riflettere diventano due. Entro 60 giorni dall'assunzione puoi decidere di destinare il TFR a un altro fondo pensione (di tua scelta) oppure di mantenerlo in azienda. Trascorsi i 60 giorni senza alcuna comunicazione, il datore di lavoro procede con l'iscrizione al fondo di riferimento e avvia i versamenti dal mese successivo.</li>
                <li><strong>Cosa confluisce nel fondo.</strong> Con l'adesione automatica al fondo finiscono tre cose: il TFR maturando, il contributo a carico del datore di lavoro previsto dal CCNL (quando previsto), e il contributo minimo del lavoratore nella misura stabilita dagli accordi applicabili.</li>
              </ul>

              <p>
                C'è un punto che voglio sottolineare con forza, perché è quello che molte persone non capiscono: se il TFR finisce nel fondo pensione per silenzio assenso, la scelta è <strong>irreversibile</strong>. Non potrai più, in un secondo momento, ripensarci e riportare il TFR in azienda. Il percorso inverso, invece, resta possibile: se entro i 60 giorni scegli di lasciare il TFR in azienda, in qualsiasi momento futuro potrai cambiare idea e destinarlo a un fondo pensione.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
                <h3 className="mt-0 text-blue-700">Facciamo chiarezza!</h3>
                <p className="text-sm">
                  Il TFR — Trattamento di Fine Rapporto — è una quota della tua retribuzione (circa il 6,91% della retribuzione annua lorda) che il datore di lavoro accantona ogni anno e ti liquida al termine del rapporto di lavoro. Può seguire due strade: restare in azienda oppure essere destinato a una forma di previdenza complementare.
                </p>
                <p className="text-sm">
                  <strong>TFR in azienda:</strong> viene rivalutato ogni anno dell'1,5% fisso più il 75% dell'inflazione. Al momento della liquidazione, viene tassato con un'aliquota IRPEF media calcolata sui tuoi ultimi cinque anni di redditi (in genere tra il 23% e il 43%).
                </p>
                <p className="text-sm mb-0">
                  <strong>TFR nel fondo pensione:</strong> viene investito sui mercati finanziari secondo la linea di investimento prescelta. Al momento della prestazione, l'aliquota fiscale parte da un massimo del 15% e si riduce dello 0,30% per ogni anno di partecipazione oltre il quindicesimo, fino a un minimo del 9%.
                </p>
              </div>

              <h2>Perché lo Stato sta facendo questo proprio adesso</h2>
              <p>
                La risposta breve è: perché la pensione pubblica, da sola, non basterà più. La risposta lunga è più scomoda, e merita di essere capita fino in fondo.
              </p>
              <p>
                Il sistema previdenziale italiano funziona <strong>a ripartizione</strong>. I contributi che versi oggi non vengono accantonati in un fondo intestato a te, ma usati immediatamente per pagare le pensioni di chi è già in quiescenza. La promessa è implicita: quando sarà il tuo turno, ci saranno altri lavoratori che faranno lo stesso per te.
              </p>

              <h3>I numeri che il legislatore ha letto prima di te</h3>
              <p>
                Nel 1950, ogni donna italiana metteva al mondo in media 2,5 figli. Oggi siamo a 1,2. Nel frattempo l'aspettativa di vita è passata da 65 a quasi 84 anni.
                Le proiezioni stimano che nei prossimi dieci anni l'Italia perderà sei milioni di lavoratori, un esodo verso la pensione che non sarà compensato da nuovi ingressi.
              </p>
              <p>
                Un lavoratore dipendente che andrà in pensione nel 2030 potrà contare su circa il 72% dell'ultimo reddito. Nel 2040 scenderà al 62%. Nel 2070 sarà al 58%.
              </p>

              <h2>Cosa fare entro i tuoi 60 giorni: una checklist concreta</h2>
              <ol>
                <li><strong>Leggi l'informativa</strong> che il datore di lavoro è obbligato a consegnarti all'assunzione.</li>
                <li><strong>Capisci qual è il fondo di default</strong> a cui saresti iscritto. Cerca informazioni su rendimenti storici e costi.</li>
                <li><strong>Valuta alternative.</strong> Oltre ai fondi negoziali esistono i fondi aperti e i Piani Individuali Pensionistici (PIP).</li>
                <li><strong>Considera investimenti alternativi.</strong> Puoi costruire la tua pensione anche attraverso investimenti liberi, perdendo i vantaggi fiscali ma guadagnando flessibilità totale.</li>
                <li><strong>Se vuoi, chiedi aiuto a un professionista.</strong> L'Italia è indietro nell'alfabetizzazione finanziaria. Affidarti a un consulente qualificato che ti aiuti a capire non è una spesa, ma un investimento.</li>
              </ol>

              <h2>Il messaggio dietro la riforma</h2>
              <p>
                Il legislatore sta dicendo a chi entra oggi nel mondo del lavoro: <strong>comincia subito</strong>. Non aspettare i tuoi 40 anni per accorgerti che la pensione pubblica non sarà sufficiente. Comincia dal primo stipendio, di default, anche se non hai ancora studiato la materia.
              </p>

              <hr className="my-12" />
              
              <div className="bg-accent text-white p-8 rounded-3xl mt-12 text-center">
                <h3 className="text-white mt-0 text-2xl">Il libro è in uscita</h3>
                <p className="text-blue-100 mb-8">
                  Approfondisco la pensione, la previdenza integrativa, gli investimenti per il lungo periodo e molto altro nel mio libro che sta per uscire. È il distillato di anni di lavoro con persone reali e dati ufficiali.
                </p>
                <a href="https://wa.me/393273577594" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-accent font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                  Iscriviti alla lista d'attesa
                </a>
              </div>
            </>
          ) : (
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
