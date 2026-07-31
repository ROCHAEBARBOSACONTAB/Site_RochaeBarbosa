import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FilePenLine,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "5514991269374";

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const situations = [
  {
    icon: Building2,
    title: "Abrir uma empresa",
    text: "Definição da estrutura inicial, atividades e enquadramento para começar com mais segurança.",
  },
  {
    icon: FilePenLine,
    title: "Alterar informações da empresa",
    text: "Apoio em mudanças de endereço, atividade, capital social ou composição societária.",
  },
  {
    icon: ShieldCheck,
    title: "Regularizar pendências",
    text: "Leitura do cenário cadastral e direcionamento para restaurar a regularidade necessária à operação.",
  },
  {
    icon: Landmark,
    title: "Encerrar ou baixar empresa",
    text: "Condução das etapas aplicáveis para encerramento com organização documental e orientação técnica.",
  },
];

export default function BusinessRegistration() {
  return (
    <div data-testid="business-registration-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-7 pb-9 lg:pt-14 lg:pb-12">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            Serviços <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
          <div className="mt-5 max-w-[840px]">
            <div className="eyebrow text-[#E6C96A] mb-4">Paralegal e societário</div>
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]">
              Abertura, alteração e regularização
              <span className="text-[#D4AF37]"> de empresas com orientação desde o início.</span>
            </h1>
            <p className="mt-5 max-w-[710px] text-white/78 text-[16px] leading-relaxed">
              Cada decisão societária, cadastral e fiscal influencia o funcionamento da empresa. Organizamos o caminho necessário para você começar, alterar ou regularizar a operação com clareza técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Como podemos ajudar</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              O serviço certo para a situação atual da sua empresa.
            </h2>
            <p className="mt-5 text-[#596678] leading-relaxed">
              Atendemos empresas em Pederneiras e região, com análise da necessidade antes de indicar os próximos passos.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {situations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#E1DDD3] p-5">
                  <Icon size={22} strokeWidth={1.5} className="text-[#B48600] mb-4" />
                  <h3 className="font-serif text-xl text-[#0A2A57]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#5D6A7C] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-[740px] mb-9">
            <div className="eyebrow mb-4">Condução técnica</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              Antes de protocolar, entendemos o impacto da decisão.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["01", "Entendemos a necessidade", "Você nos apresenta a empresa, o objetivo e o ponto que precisa ser resolvido."],
              ["02", "Definimos o caminho aplicável", "Avaliamos estrutura, atividades e obrigações relacionadas à solicitação."],
              ["03", "Conduzimos as etapas", "Organizamos os documentos e acompanhamos o andamento necessário para a demanda."],
            ].map(([step, title, text]) => (
              <div key={step} className="border-t-2 border-[#D4AF37] pt-5">
                <div className="font-serif text-3xl text-[#B48600]">{step}</div>
                <h3 className="mt-4 font-serif text-2xl text-[#0A2A57]">{title}</h3>
                <p className="mt-3 text-[#5D6A7C] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] border-t border-[#E7E2D8] py-14 lg:py-16">
        <div className="max-w-[860px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow mb-4">Próximo passo</div>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
            Conte o que sua empresa precisa
            <span className="text-[#D4AF37]"> regularizar ou alterar.</span>
          </h2>
          <p className="mt-5 text-[#596678] leading-relaxed">
            Nossa equipe orienta qual é o caminho mais adequado para a sua situação.
          </p>
          <a
            href={whatsappUrl("Olá, vim pela página de abertura e regularização de empresas e preciso de orientação para minha situação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7"
          >
            Falar sobre minha empresa <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
