import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";

const CATEGORIES = ["Todos", "SPED", "Reforma Tributária", "Protheus", "Créditos Tributários"];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [cat, setCat] = useState("Todos");

  useEffect(() => {
    const q = cat === "Todos" ? "" : `?category=${encodeURIComponent(cat)}`;
    api.get(`/blog${q}`).then((r) => setPosts(r.data)).catch(()=>setPosts([]));
  }, [cat]);

  const [featured, ...rest] = posts;

  return (
    <div data-testid="blog-page">
      <section className="bg-[#0A2A57] text-white py-20 noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-4">Blog Técnico</div>
          <h1 className="font-serif text-4xl lg:text-6xl max-w-3xl leading-[1.08]">Insights fiscais, tributários e estratégicos.</h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c} data-testid={`blog-cat-${c}`}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition-all ${
                  cat === c ? "bg-[#0A2A57] text-white border-[#0A2A57]" : "border-[#D4AF37]/40 text-[#0A2A57] hover:border-[#D4AF37]"
                }`}>
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} data-testid="blog-featured" className="premium-card grid lg:grid-cols-2 overflow-hidden mb-14 group">
              <div className="aspect-[16/11] lg:aspect-auto bg-[#0A2A57]">
                <img src={featured.cover_url} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"/>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="eyebrow mb-3">{featured.category} · {featured.read_time}</div>
                <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2A57] leading-[1.15]">{featured.title}</h2>
                <p className="mt-5 text-[#555] leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 link-gold text-sm uppercase tracking-[0.2em]">Ler publicação →</div>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((p) => (
              <Link to={`/blog/${p.slug}`} key={p.id} data-testid={`blog-post-${p.slug}`} className="premium-card overflow-hidden group">
                <div className="aspect-[16/10] bg-[#0A2A57]">
                  <img src={p.cover_url} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"/>
                </div>
                <div className="p-6">
                  <div className="eyebrow mb-3">{p.category} · {p.read_time}</div>
                  <h3 className="font-serif text-xl text-[#0A2A57] leading-snug group-hover:text-[#0E4A8A]">{p.title}</h3>
                  <p className="mt-3 text-sm text-[#555] leading-relaxed line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          {posts.length === 0 && <div className="text-center py-20 text-[#B0B0B0]">Nenhuma publicação nesta categoria.</div>}
        </div>
      </section>
    </div>
  );
}
