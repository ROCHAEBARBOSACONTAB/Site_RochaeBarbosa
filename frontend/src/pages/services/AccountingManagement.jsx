import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "5514991269374";

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const pillars = [
  {
    icon: FileText,
    title: "Rotina contábil organizada",
    text: "Escrituração e informações contábeis alinhadas ao que acontece na empresa, sem tratar a contabilidade como uma entrega isolada.",
  },
  {
    icon: ReceiptText,
    title: "Fiscal e obrigações acompanhados",
    text: "Acompanhamento das rotinas fiscais e das entregas aplicáveis para reduzir inconsistências e manter a operação organizada.",
  },
  {
    icon: BarChart3,
    title: "Informação para decidir melhor",
    text: "Leitura técnica dos números, processos e pendências para apoiar decisões com mais clareza e previsibilidade.",
  },
];

export default function AccountingManagement() {
  return (
    <div data-testid="accounting-management-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-7 pb-9 lg:pt-14 lg:pb-12">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={13} strokeWidth={1.5} /> Serviços
          </Link>
          <div className="mt-5 max-w-[860px]">
            <div className="eyebrow text-[#E6C96A] mb-4">Contabilidade e gestão fiscal</div>
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]">
              Contabilidade para sua empresa
              <span className="text-[#D4AF37]"> operar com clareza.</span>
            </h1>
            <p className="mt-5 max-w-[720px] text-white/78 text-[16px] leading-relaxed">
              Organizamos a rotina contábil e fiscal para que a empresa cumpra suas obrigações, acompanhe sua realidade e avance com mais segurança.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e quero organizar a contabilidade e a rotina fiscal da minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center"
              >
                Quero organizar minha operação <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e quero entender como funciona a transição da contabilidade da minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold justify-center"
              >
                Quero trocar de contador <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Para a rotina funcionar</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              A contabilidade precisa acompanhar a empresa, não apenas fechar o mês.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#596678] leading-relaxed text-[16px]">
              Uma operação organizada depende de informações contábeis, fiscais e documentais que conversem entre si. Nosso trabalho é manter essa base estruturada para reduzir retrabalho e apoiar decisões empresariais.
            </p>
            <div className="mt-7 grid sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="bg-white border border-[#E1DDD3] p-5">
                    <Icon size={22} strokeWidth={1.5} className="text-[#B48600] mb-4" />
                    <h3 className="font-serif text-xl text-[#0A2A57]">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-[#5D6A7C] leading-relaxed">{pillar.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">O que acompanhamos</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              Base contábil e fiscal para a operação seguir em frente.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[#33445C]">
            {[
              "Escrituração contábil e fiscal",
              "Obrigações acessórias aplicáveis",
              "Organização de informações e documentos",
              "Acompanhamento de pendências e prazos",
              "Orientação para alterações da operação",
              "Transição contábil com levantamento do cenário atual",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-[15px] leading-relaxed border-b border-[#E7E2D8] pb-4">
                <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B48600]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] border-t border-[#E7E2D8] py-14 lg:py-16">
        <div className="max-w-[860px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow mb-4">Próximo passo</div>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
            Sua rotina contábil precisa de
            <span className="text-[#D4AF37]"> mais clareza e controle?</span>
          </h2>
          <p className="mt-5 text-[#596678] leading-relaxed">
            Conte como sua empresa opera hoje. Direcionamos a melhor forma de organizar a rotina contábil e fiscal.
          </p>
          <a
            href={whatsappUrl("Olá, vim pela página de Contabilidade e Gestão Fiscal e quero entender o próximo passo para minha empresa.")}
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
