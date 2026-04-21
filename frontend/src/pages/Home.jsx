import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileSearch, Layers, TrendingUp, Database, Cpu } from "lucide-react";
import { api } from "../lib/api";

const HERO_IMG = "https://images.pexels.com/photos/7653461/pexels-photo-7653461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const MEETING_IMG = "https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.get("/blog?limit=3").then(r => setPosts(r.data.slice(0,3))).catch(()=>{}); }, []);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white overflow-hidden noise">
        <div className="absolute inset-0 opacity-30">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A57]/80 via-[#0A2A57]/90 to-[#0A2A57]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-28 lg:pt-44 lg:pb-36">
          <div className="max-w-3xl">
            <div className="fade-up eyebrow text-[#E6C96A] mb-6">Inteligência Fiscal · Estruturação Tributária · Execução Técnica</div>
            <h1 className="fade-up-2 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Sua empresa pode estar <span className="text-[#D4AF37]">operando com erros fiscais silenciosos</span> — gerando prejuízos que não aparecem no seu resultado.
            </h1>
            <p className="fade-up-3 mt-8 text-white/80 text-lg max-w-2xl leading-relaxed">
              Atuação técnica em revisão fiscal, recuperação de créditos e compliance. Especialistas em ambientes complexos, incluindo empresas que operam com TOTVS Protheus.
            </p>
            <div className="fade-up-4 mt-10 flex flex-wrap gap-4">
              <Link to="/diagnostico" data-testid="hero-cta-diagnostic" className="btn-gold">
                Solicitar Diagnóstico <ArrowRight size={16} strokeWidth={1.5}/>
              </Link>
              <Link to="/servicos" data-testid="hero-cta-services" className="btn-outline-gold">Conhecer os Serviços</Link>
            </div>
          </div>
        </div>
        <div className="gold-line" />
      </section>

      {/* AUTHORITY */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-center mb-3">Competências Técnicas</div>
          <h2 className="font-serif text-center text-3xl lg:text-4xl text-[#0A2A57] mb-14">Onde atuamos com autoridade</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "SPED", desc: "EFD-ICMS/IPI, EFD-Contribuições, ECD, ECF. Escrituração técnica e conciliação completa." },
              { icon: TrendingUp, title: "Reforma Tributária", desc: "Mapeamento CBS/IBS, plano de transição e parametrização no ERP para 2026+." },
              { icon: Cpu, title: "TOTVS Protheus", desc: "SIGAFIS, TIOs, matriz tributária, governança de exceções e integrações fiscais." },
            ].map((x, i) => (
              <div key={i} className="premium-card p-8 bg-white" data-testid={`auth-${x.title.toLowerCase().replace(/\s/g,'-')}`}>
                <x.icon size={28} strokeWidth={1.4} className="text-[#D4AF37]" />
                <div className="gold-bar my-5" />
                <h3 className="font-serif text-2xl text-[#0A2A57] mb-3">{x.title}</h3>
                <p className="text-[#444] text-[15px] leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Como Atuamos</div>
              <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.1]">
                Três frentes técnicas. Uma só obsessão: precisão fiscal.
              </h2>
              <p className="mt-6 text-[#444] text-[16px] leading-relaxed">
                Cada empresa tem riscos silenciosos na operação fiscal. Nosso trabalho é identificar, quantificar e corrigir — com base em documentação, não em palpite.
              </p>
              <Link to="/servicos" className="inline-flex items-center gap-2 mt-8 link-gold text-sm uppercase tracking-[0.18em]">
                Ver todos os serviços <ArrowRight size={14} strokeWidth={1.5}/>
              </Link>
            </div>
            <div className="lg:col-span-7 space-y-5">
              {[
                { icon: FileSearch, title: "Diagnóstico Fiscal", desc: "Raio-X estruturado da operação. Identificamos riscos, perdas e oportunidades cruzando ERP, escrituração e obrigações." },
                { icon: TrendingUp, title: "Recuperação de Créditos", desc: "Revisão retroativa de PIS/COFINS, ICMS e créditos acumulados, com lastro documental e execução técnica." },
                { icon: ShieldCheck, title: "Estruturação & Compliance", desc: "Parametrização fiscal, governança, conciliação ECD × EFD e plano de melhoria contínua com indicadores." },
              ].map((s, i) => (
                <Link to="/servicos" key={i} className="premium-card p-7 block group" data-testid={`work-${i}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                      <s.icon size={22} strokeWidth={1.4} className="text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-[#0A2A57]">{s.title}</h3>
                      <p className="text-[#555] text-[14.5px] leading-relaxed mt-2">{s.desc}</p>
                    </div>
                    <ArrowRight size={18} strokeWidth={1.4} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform mt-1"/>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="relative bg-[#0A2A57] py-24 noise overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={MEETING_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0A2A57]/80" />
        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-[#D4AF37] font-serif text-5xl leading-none mb-6">"</div>
          <p className="font-serif text-white text-2xl lg:text-[32px] leading-[1.35]">
            Muitas organizações operam com falhas fiscais silenciosas que geram risco e perda financeira ao longo do tempo. Nossa missão é corrigir isso com técnica, segurança e execução.
          </p>
          <div className="gold-bar mx-auto mt-8" />
          <div className="mt-5 text-[#E6C96A] text-[11px] uppercase tracking-[0.28em]">Rocha & Barbosa · Assessoria Contábil</div>
        </div>
      </section>

      {/* BLOG LATEST */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3">Insights Técnicos</div>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2A57]">Publicações recentes</h2>
            </div>
            <Link to="/blog" className="link-gold text-sm uppercase tracking-[0.18em]">Ver todos →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {posts.map((p, i) => (
              <Link key={p.id} to={`/blog/${p.slug}`} data-testid={`home-post-${i}`} className="premium-card overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden bg-[#0A2A57]">
                  <img src={p.cover_url} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#A67C00] mb-3">{p.category} · {p.read_time}</div>
                  <h3 className="font-serif text-[20px] leading-snug text-[#0A2A57] group-hover:text-[#0E4A8A]">{p.title}</h3>
                  <p className="mt-3 text-sm text-[#555] leading-relaxed line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2A57] text-white py-24 relative noise">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Próximo Passo</div>
          <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] mb-6">
            Descubra, em 48h, onde sua empresa está <span className="text-[#D4AF37]">perdendo dinheiro por ineficiência fiscal.</span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solicite um diagnóstico técnico inicial. Sem compromisso. Apenas uma análise honesta da sua operação.
          </p>
          <Link to="/diagnostico" data-testid="final-cta-diagnostic" className="btn-gold">
            Solicitar Diagnóstico <Layers size={16} strokeWidth={1.5}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
