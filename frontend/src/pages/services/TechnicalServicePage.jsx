import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, Scale } from "lucide-react";
import { technicalServices } from "../../data/technicalServices";

const sourceLinks = [
  ["Lei Complementar n. 214/2025", "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"],
  ["Portal Nacional da NF-e", "https://www.nfe.fazenda.gov.br/portal/principal.aspx"],
  ["Portal do Simples Nacional", "https://www8.receita.fazenda.gov.br/SimplesNacional/"],
];

export default function TechnicalServicePage() {
  const { slug } = useParams();
  const service = technicalServices[slug];

  if (!service) return <Navigate replace to="/servicos" />;

  return (
    <div data-testid={`technical-service-${slug}`} className="bg-white">
      <section className="bg-[#0A2A57] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-7 pb-10 lg:pt-14 lg:pb-14">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={13} strokeWidth={1.5} /> Serviços
          </Link>
          <div className="mt-5 max-w-[940px]">
            <div className="eyebrow text-[#E6C96A] mb-4">{service.eyebrow}</div>
            <h1 className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.06]">{service.title}</h1>
            <p className="mt-6 max-w-[790px] text-white/78 text-[16px] leading-relaxed">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/5514991269374?text=${encodeURIComponent(service.primaryMessage)}`} target="_blank" rel="noopener noreferrer" data-analytics={`diagnostico_whatsapp_${slug.replace(/-/g, "_")}`} className="btn-gold justify-center">
                Solicitar diagnóstico <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <Link to="/servicos/consultoria-totvs-protheus" data-analytics={`pilar_protheus_${slug.replace(/-/g, "_")}`} className="btn-outline-gold justify-center">
                Consultoria Fiscal Protheus <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-11 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">{service.theme}</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">{service.sectionTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#596678] leading-relaxed text-[16px]">{service.sectionText}</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {service.pillars.map((pillar) => {
                const Icon = pillar.icon;
                return <div key={pillar.title} className="bg-white border border-[#E1DDD3] p-5 min-h-[190px]">
                  <Icon size={22} strokeWidth={1.5} className="text-[#B48600] mb-4" />
                  <h3 className="font-serif text-xl text-[#0A2A57]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-[#5D6A7C] leading-relaxed">{pillar.text}</p>
                </div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Escopo técnico</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">{service.scopeTitle}</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[#33445C]">
            {service.scopeItems.map((item) => <div key={item} className="flex items-start gap-3 text-[15px] leading-relaxed border-b border-[#E7E2D8] pb-4">
              <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B48600]" />
              <span>{item}</span>
            </div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] border-y border-[#E7E2D8] py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Perguntas frequentes</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">Decisões técnicas precisam de contexto.</h2>
            <p className="mt-5 text-[#596678] leading-relaxed">As respostas abaixo orientam a conversa inicial. O enquadramento e a solução dependem da operação concreta e das normas aplicáveis.</p>
          </div>
          <div className="lg:col-span-7 divide-y divide-[#E1DDD3] border-y border-[#E1DDD3]">
            {service.faq.map(([question, answer]) => <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start gap-3 font-serif text-xl text-[#0A2A57]">
                <HelpCircle size={19} strokeWidth={1.5} className="mt-1 shrink-0 text-[#B48600]" />
                <span>{question}</span>
              </summary>
              <p className="pl-8 mt-3 text-[15px] leading-relaxed text-[#596678]">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Conexões úteis</div>
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#0A2A57] leading-[1.1]">Aprofunde a leitura ou avance para o diagnóstico.</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {service.related.map(([label, href]) => <Link key={href} to={href} data-analytics={`conteudo_relacionado_${slug.replace(/-/g, "_")}_${href.split("/").pop().replace(/-/g, "_")}`} className="group border border-[#E1DDD3] p-5 text-[#0A2A57] hover:border-[#D4AF37] hover:bg-[#F7F5EF] transition min-h-[132px] flex flex-col justify-between">
              <span className="font-serif text-xl leading-tight">{label}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-[#B48600]">Acessar <ArrowRight size={14} /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] border-t border-[#E7E2D8] py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex gap-3"><Scale size={22} strokeWidth={1.5} className="text-[#B48600] shrink-0" /><div><div className="eyebrow mb-2">Referências</div><p className="text-sm text-[#596678] leading-relaxed">Consulte fontes oficiais e confirme a norma aplicável antes de qualquer decisão tributária.</p></div></div>
          <div className="lg:col-span-8 flex flex-wrap gap-3 items-start">{sourceLinks.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="border border-[#D9D4C9] px-4 py-3 text-sm text-[#0A2A57] hover:border-[#B48600] transition">{label} <span aria-hidden="true">↗</span></a>)}</div>
        </div>
      </section>

      <section className="bg-[#0A2A57] text-white py-14 lg:py-16">
        <div className="max-w-[860px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Próximo passo</div>
          <h2 className="font-serif text-3xl lg:text-5xl leading-[1.08]">Comece por uma leitura técnica do seu cenário.</h2>
          <p className="mt-5 text-white/74 leading-relaxed">Explique o processo, a dúvida ou a divergência percebida. A conversa inicial ajuda a definir se o próximo passo é diagnóstico, revisão pontual ou projeto técnico.</p>
          <a href={`https://wa.me/5514991269374?text=${encodeURIComponent(service.primaryMessage)}`} target="_blank" rel="noopener noreferrer" data-analytics={`diagnostico_whatsapp_final_${slug.replace(/-/g, "_")}`} className="btn-gold mt-7">Falar com um especialista <ArrowRight size={16} strokeWidth={1.5} /></a>
        </div>
      </section>
    </div>
  );
}
