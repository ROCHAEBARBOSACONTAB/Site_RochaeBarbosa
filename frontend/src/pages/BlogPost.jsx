import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { api } from "../lib/api";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => { api.get(`/blog/${slug}`).then((r) => setPost(r.data)).catch(()=>setPost(null)); }, [slug]);

  if (!post) return <div className="py-32 text-center text-[#B0B0B0]">Carregando...</div>;

  return (
    <div data-testid="blog-post-page">
      <article className="max-w-[860px] mx-auto px-6 lg:px-0 py-20">
        <Link to="/blog" className="link-gold text-xs uppercase tracking-[0.2em] inline-flex items-center gap-1.5"><ArrowLeft size={14}/> Voltar ao blog</Link>
        <div className="eyebrow mt-8 mb-4">{post.category} · {post.read_time}</div>
        <h1 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.1]">{post.title}</h1>
        <div className="flex items-center gap-3 mt-6 text-[13px] text-[#777]">
          <div className="w-8 h-8 rounded-full bg-[#0A2A57] text-[#D4AF37] flex items-center justify-center font-serif text-sm">R</div>
          {post.author}
        </div>
        <div className="gold-line my-10 opacity-60" />
        <div className="prose-rb" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-14 p-8 bg-[#0A2A57] text-white">
          <h3 className="font-serif text-2xl mb-2">Identificou riscos na sua operação?</h3>
          <p className="text-white/75 mb-5 text-[15px]">Solicite um diagnóstico técnico e descubra oportunidades reais.</p>
          <Link to="/diagnostico" className="btn-gold">Solicitar Diagnóstico <ArrowRight size={14}/></Link>
        </div>
      </article>
    </div>
  );
}
