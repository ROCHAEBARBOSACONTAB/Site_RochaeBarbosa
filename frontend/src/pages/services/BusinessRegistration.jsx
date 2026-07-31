import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
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
            <ArrowLeft size={13} strokeWidth={1.5} /> Serviços
          </Link>
          <div className="mt-5 max-w-[840px]">
            <div className="eyebrow text-[#E6C96A] mb-4">Abertura de empresa</div>
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]">
              Abra sua empresa com estrutura
              <span className="text-[#D4AF37]"> certa desde o início.</span>
            </h1>
            <p className="mt-5 max-w-[710px] text-white/78 text-[16px] leading-relaxed">
              Definimos a estrutura, as atividades e o enquadramento necessários para sua empresa começar organizada e preparada para operar.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e quero abrir uma empresa. Preciso de orientação para estruturar o início da operação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center"
              >
                Quero abrir uma empresa <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e preciso alterar ou regularizar minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold justify-center"
              >
                Alterar ou regularizar <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Demandas relacionadas</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              A empresa muda. A estrutura também precisa acompanhar.
            </h2>
            <p className="mt-5 text-[#596678] leading-relaxed">
              Além da abertura, orientamos alterações, regularizações e baixas com base na necessidade real da empresa. Atendemos remotamente e presencialmente quando necessário.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
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
            <div className="eyebrow mb-4">Como conduzimos</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              Antes de protocolar, alinhamos a decisão à realidade da empresa.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["01", "Entendemos o momento", "Você apresenta o objetivo, a empresa e o que precisa ser estruturado, alterado ou resolvido."],
              ["02", "Definimos a estrutura", "Avaliamos atividades, composição societária, enquadramento e obrigações relacionadas à solicitação."],
              ["03", "Conduzimos as etapas", "Organizamos documentos e orientamos o andamento necessário para que a demanda avance com clareza."],
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
            Vamos organizar o próximo passo
            <span className="text-[#D4AF37]"> da sua empresa.</span>
          </h2>
          <p className="mt-5 text-[#596678] leading-relaxed">
            Nossa equipe avalia a sua necessidade e orienta o caminho mais adequado para começar, alterar ou regularizar.
          </p>
          <a
            href={whatsappUrl("Olá, vim pela página de abertura e regularização de empresas e preciso de orientação para minha situação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7"
          >
            Falar com um especialista <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
