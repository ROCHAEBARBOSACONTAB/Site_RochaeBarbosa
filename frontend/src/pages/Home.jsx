import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileSearch, Layers, TrendingUp, Database, Cpu } from "lucide-react";
import { api } from "../lib/api";
import heroBg from "../assets/herobg.png";
import { motion } from "framer-motion";

const HERO_IMG = "https://images.pexels.com/photos/7653461/pexels-photo-7653461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const MEETING_IMG = "https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.get("/blog?limit=3").then(r => setPosts(r.data.slice(0,3))).catch(()=>{}); }, []);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white overflow-hidden noise">
       <div className="absolute inset-0 opacity-26">
        <img
          src={heroBg} alt=""className="w-full h-full object-cover"/>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.92)_0%,rgba(10,42,87,0.86)_30%,rgba(10,42,87,0.70)_55%,rgba(10,42,87,0.52)_75%,rgba(10,42,87,0.62)_100%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-28 lg:pt-44 lg:pb-36">
          <div className="max-w-3xl">
            <div className="fade-up text-[14px] uppercase tracking-[0.26em] text-[#D4AF37] mb-7">
              Inteligência Fiscal · Estruturação Tributária · Execução Técnica</div>
           <h1 className="fade-up-2 font-serif text-[46px] sm:text-[58px] lg:text-[72px] leading-[1.03] tracking-[-0.015em] max-w-[820px]">
            Falhas fiscais silenciosas podem estar afetando
            <br />
            <span className="text-[#D4AF37]">
                sua operação
            </span>
          </h1>
          <p className="mt-8 text-white/72 text-[18px] max-w-[720px] leading-[1.6]">
            Identificamos falhas ocultas, corrigimos inconsistências e estruturamos sua operação fiscal com precisão técnica.
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

      {/* IDENTIFICACAO DE RISCO */}
      <section className="bg-[#F4F3EF] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[900px] mb-14">
            <div className="eyebrow mb-4">Pontos Críticos da Operação</div>

            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Você pode estar perdendo dinheiro todos os meses — 
              <span className="text-[#D4AF37]"> e o sistema não mostra isso</span>
            </h2>

            <p className="mt-6 text-[#4B5563] text-[16px] lg:text-[17px] leading-relaxed max-w-[760px]">
              Esses erros raramente aparecem no resultado de imediato, mas acumulam impacto real em créditos, apuração e obrigações fiscais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Parametrização fiscal que distorce sua apuração",
                desc: "Regras, exceções e cadastros mal configurados podem alterar apurações sem gerar erro aparente.",
              },
              {
                number: "02",
                title: "Créditos fiscais que ficam pelo caminho",
                desc: "Falhas de leitura, ausência de revisão técnica ou cadastro incorreto fazem sua empresa deixar dinheiro na mesa.",
              },
              {
                number: "03",
                title: "ERP e fiscal que não conversam entre si",
                desc: "Quando sistema e obrigação acessória divergem, o risco só aparece depois — geralmente em auditoria ou fiscalização.",
              },
              {
                number: "04",
                title: "Obrigações entregues com risco oculto",
                desc: "SPED, EFD e outras entregas podem estar corretas na forma, mas erradas no conteúdo — gerando exposição fiscal.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group premium-card bg-[#FAFAF8] border border-[#E7E2D8] p-8 min-h-[260px] flex flex-col
                transition-all duration-300 ease-out
                hover:-translate-y-[4px]
                hover:shadow-[0_20px_40px_rgba(10,42,87,0.08)]
                hover:border-[#D4AF37]"
              >
                <div className="text-[12px] uppercase tracking-[0.24em] text-[#D4AF37] mb-5
                transition-all duration-300
                group-hover:tracking-[0.28em]">
                  {item.number}
                </div>

                <h3 className="font-serif text-[26px] leading-[1.12] text-[#0A2A57] mb-4 min-h-[104px]
                transition-all duration-300
                group-hover:text-[#082E63]">
                  {item.title}
                </h3>

                <p className="text-[#5B6470] text-[15px] leading-relaxed
                transition-all duration-300
                group-hover:text-[#3E4650]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO ATUAMOS */}
      <section className="bg-[#F5F3EE] py-24 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Como Atuamos</div>
              <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
                  Um método técnico para
                  <span className="text-[#D4AF37]"> identificar, corrigir e estruturar</span>
              </h2>
             <p className="mt-6 text-[#444] text-[16px] leading-relaxed max-w-[520px]">
              Não trabalhamos com tentativa e erro. Entramos na operação, localizamos os pontos críticos, corrigimos distorções e estruturamos a base fiscal para reduzir risco e recuperar valor.
            </p>
              <Link to="/servicos" className="inline-flex items-center gap-2 mt-8 link-gold text-sm uppercase tracking-[0.18em]">
                Ver a metodologia completa <ArrowRight size={14} strokeWidth={1.5}/>
              </Link>
            </div>
            <div className="lg:col-span-7 space-y-5">
              {[
                { icon: FileSearch, title: "1. Diagnóstico Fiscal", desc: "Mapeamos a operação, localizamos distorções, riscos e perdas invisíveis cruzando ERP, escrituração e obrigações." },
                { icon: TrendingUp, title: "2. Recuperação de Créditos", desc: "Identificamos oportunidades concretas de recuperação com base técnica, rastreabilidade documental e segurança na execução." },
                { icon: ShieldCheck, title: "3. Estruturação & Compliance", desc: "Corrigimos a base fiscal, fortalecemos a governança e deixamos a operação mais segura para seguir crescendo sem exposição." },
              ].map((s, i) => (
                <Link to="/servicos" key={i} className="premium-card p-8 block group transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_35px_rgba(10,42,87,0.06)]">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#D4AF37]">
                      <s.icon size={22} strokeWidth={1.4} className="text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[30px] text-[#0A2A57] leading-[1.05]">{s.title}</h3>
                      <p className="text-[#555] text-[15px] leading-relaxed mt-3 max-w-[520px]">{s.desc}</p>
                    </div>
                    <ArrowRight size={18} strokeWidth={1.4} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform mt-1"/>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* COMPETENCIA TECNICA */}
      <section className="bg-[#F1EFEA] py-24 border-t border-black/5">
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
