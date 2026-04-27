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
      <section className="bg-[#FCFBF8] py-24 border-t border-[#EAE6DC]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <div className="eyebrow mb-4">Como Atuamos</div>

                  <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
                    Um método técnico para
                    <span className="text-[#D4AF37]">
                      {" "}identificar, corrigir e estruturar
                    </span>
                  </h2>

                  <p className="mt-6 text-[#444] text-[16px] leading-relaxed max-w-[520px]">
                    Entramos na operação, identificamos os pontos críticos e atuamos diretamente na correção e estruturação fiscal — com base técnica e segurança.
                  </p>

                  <Link
                    to="/diagnostico"
                    className="inline-flex items-center gap-2 mt-8 link-gold text-sm uppercase tracking-[0.18em]"
                  >
                    Solicitar diagnóstico
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  {[
                    {
                      icon: FileSearch,
                      title: "1. Diagnóstico Fiscal",
                      desc: "Mapeamos a operação, localizamos distorções, riscos e perdas invisíveis cruzando ERP, escrituração e obrigações.",
                    },
                    {
                      icon: TrendingUp,
                      title: "2. Recuperação de Créditos",
                      desc: "Identificamos oportunidades concretas de recuperação com base técnica, rastreabilidade documental e segurança na execução.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "3. Estruturação & Compliance",
                      desc: "Corrigimos a base fiscal, fortalecemos a governança e deixamos a operação mais segura para seguir crescendo sem exposição.",
                    },
                  ].map((s, i) => (
                    <Link
                      to="/servicos"
                      key={i}
                      className="premium-card p-7 block group bg-[#FCFBF8] border border-[#E7E2D8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#D4AF37]/70 transition-all duration-300 ease-out"
                      data-testid={`work-${i}`}
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5">
                          <s.icon
                            size={22}
                            strokeWidth={1.4}
                            className="text-[#D4AF37]"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-[#0A2A57]">
                            {s.title}
                          </h3>

                          <p className="text-[#555] text-[14.5px] leading-relaxed mt-2">
                            {s.desc}
                          </p>
                        </div>

                        <ArrowRight
                          size={18}
                          strokeWidth={1.4}
                          className="text-[#D4AF37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* COMPETÊNCIA TÉCNICA */}
          <section className="bg-[#F1EFEA] py-24 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

              <div className="eyebrow text-center mb-3">Competências Técnicas</div>

              <h2 className="font-serif text-center text-3xl lg:text-4xl text-[#0A2A57]">
                Especialistas em operações fiscais de alta complexidade
              </h2>

              <p className="text-[#555] text-[16px] max-w-[720px] mx-auto text-center mt-4 leading-relaxed">
                Atuamos diretamente na estruturação, validação e execução fiscal em ambientes que exigem precisão técnica, governança e integração com ERP — independentemente da plataforma utilizada.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-14">
                {[
                  {
                    icon: Database,
                    title: "SPED & Obrigações Fiscais",
                    desc: "Escrituração, validação e conciliação fiscal com controle técnico de consistência e integridade das informações entregues ao fisco.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Reforma Tributária (CBS & IBS)",
                    desc: "Estruturação e adaptação da operação às novas regras, com análise de impacto, plano de transição e adequação sistêmica.",
                  },
                  {
                    icon: Cpu,
                    title: "ERP & Integração Fiscal",
                    desc: "Parametrização, governança de exceções e integração entre módulos fiscais em diferentes sistemas — incluindo ambientes complexos como o Protheus.",
                  },
                ].map((x, i) => (
                  <div
                    key={i}
                    className="premium-card p-8 bg-white border border-[#E7E2D8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
                    data-testid={`auth-${x.title.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <x.icon size={28} strokeWidth={1.4} className="text-[#D4AF37]" />

                    <div className="gold-bar my-5" />

                    <h3 className="font-serif text-2xl text-[#0A2A57] mb-3">
                      {x.title}
                    </h3>

                    <p className="text-[#444] text-[15px] leading-relaxed">
                      {x.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Reforço estratégico */}
              <p className="text-[#6B7280] text-[14px] text-center mt-12 max-w-[700px] mx-auto leading-relaxed">
                Nosso foco está na consistência fiscal e na segurança da operação — não na ferramenta utilizada. Atuamos sobre a estrutura, garantindo precisão e controle independente do sistema.
              </p>

            </div>
          </section>

          {/* SOLUÇÕES COMPLEMENTARES */}
          <section className="bg-white py-24 border-t border-[#EAE6DC]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="text-center max-w-[760px] mx-auto">
                <div className="eyebrow mb-3">Soluções Complementares</div>

                <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2A57]">
                  Apoio completo para sua operação fiscal
                </h2>

                <p className="text-[#555] text-[16px] mt-4 leading-relaxed">
                  Serviços que complementam nossa atuação técnica, garantindo suporte contínuo para sua empresa.
                </p>
              </div>

              <div className="mt-14 space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Planejamento Tributário",
                      desc: "Estratégias para redução legal da carga tributária com análise técnica e projeção de cenários.",
                    },
                    {
                      title: "Recuperação Fiscal",
                      desc: "Identificação e recuperação de créditos tributários com base documental e segurança na execução.",
                    },
                    {
                      title: "Reforma Tributária",
                      desc: "Preparação da empresa para o novo modelo tributário com análise de impacto e adaptação operacional.",
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to="/servicos"
                      className="block cursor-pointer bg-[#FAFAF8] border border-[#E7E2D8] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_16px_36px_rgba(10,42,87,0.14)]"
                    >
                      <h3 className="font-serif text-xl text-[#0A2A57] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[#555] text-[14.5px] leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
                  {[
                    {
                      title: "Certificado Digital",
                      desc: "Emissão ágil com suporte completo e condições competitivas para empresas e pessoas físicas.",
                    },
                    {
                      title: "ERP & Sistemas",
                      desc: "Atuação em diferentes plataformas com foco em integração e consistência fiscal.",
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to="/servicos"
                      className="block cursor-pointer bg-[#FAFAF8] border border-[#E7E2D8] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_16px_36px_rgba(10,42,87,0.14)]"
                    >
                      <h3 className="font-serif text-xl text-[#0A2A57] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[#555] text-[14.5px] leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 link-gold text-sm uppercase tracking-[0.18em]"
                >
                  Ver todos os serviços
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </section>

      {/* BLOG LATEST */}
      {/*<section className="py-24 bg-white">
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
      </section>*/}

      {/* FINAL CTA */}
     <section className="bg-[#0A2A57] text-white py-24 relative noise">
  <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
    <div className="eyebrow text-[#E6C96A] mb-4">
      Próximo Passo
    </div>

    <h2 className="font-serif text-3xl lg:text-5xl leading-[1.08] mb-6">
      Antes de decidir pelo próximo movimento fiscal,
      <span className="text-[#D4AF37]">
        {" "}tenha clareza sobre os riscos, perdas e oportunidades da sua operação.
      </span>
    </h2>

    <p className="text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
      O diagnóstico técnico inicial avalia a estrutura fiscal da empresa com base em dados reais,
      identificando inconsistências, pontos de exposição e possibilidades de recuperação ou melhoria.
    </p>

    <div className="max-w-[760px] mx-auto mb-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
        Riscos fiscais ocultos
      </div>

      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
        Créditos e perdas potenciais
      </div>

      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
        Plano técnico de ação
      </div>
    </div>

    <Link
      to="/diagnostico"
      data-testid="final-cta-diagnostic"
      className="btn-gold"
    >
      Solicitar Diagnóstico Técnico
      <Layers size={16} strokeWidth={1.5} />
    </Link>

    <p className="mt-5 text-xs text-white/45 max-w-xl mx-auto leading-relaxed">
      A análise é conduzida conforme a complexidade da operação e o volume de informações disponíveis.
    </p>
  </div>
</section>
    </div>
  );
}
