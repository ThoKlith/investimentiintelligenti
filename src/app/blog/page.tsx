const posts = [
  {
    title: "Come leggere un report senza perdersi nei numeri",
    date: "18 Mag 2026",
    tag: "Educazione",
  },
  {
    title: "Ribilanciamento: quando serve davvero",
    date: "03 Mag 2026",
    tag: "Strategia",
  },
  {
    title: "Perche gli obiettivi cambiano il portafoglio",
    date: "22 Apr 2026",
    tag: "Metodo",
  },
  {
    title: "Liquidita: quanto tenere e perche",
    date: "12 Apr 2026",
    tag: "Pianificazione",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Insight e strumenti per investire con consapevolezza.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Articoli brevi, chiari e applicabili. Pensati per chi vuole capire
            prima di decidere.
          </p>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="card">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted">
                  <span>{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm text-muted">
                  Placeholder: aggiungi l estratto reale dell articolo e il link.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
