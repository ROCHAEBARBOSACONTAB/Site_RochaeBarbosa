import React from "react";
import { Link } from "react-router-dom";

const CORRIDOR = "https://images.pexels.com/photos/5511130/pexels-photo-5511130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="bg-[#0A2A57] text-white py-24 noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow text-[#E6C96A] mb-4">Sobre</div>
            <h1 className="font-serif text-4xl lg:text-6xl leading-[1.08]">Consultoria técnica, obsessão por precisão.</h1>
          </div>
          <div className="aspect-[4/3] border border-[#D4AF37]/30 overflow-hidden">
            <img src={CORRIDOR} alt="" className="w-full h-full object-cover opacity-80"/>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 space-y-8 text-[16px] leading-[1.85] text-[#333]">
          <p>A <strong className="text-[#0A2A57]">Rocha & Barbosa Assessoria Contábil</strong> atua com foco em estruturação fiscal, revisão tributária e recuperação de créditos, ajudando empresas a corrigirem falhas operacionais que geram riscos e perda de recursos ao longo do tempo.</p>
          <p>Nosso trabalho é baseado em análise técnica, execução correta das obrigações fiscais e suporte estratégico, especialmente em ambientes mais complexos e empresas que utilizam sistemas como <strong className="text-[#0A2A57]">TOTVS Protheus</strong>.</p>
          <p>O objetivo é garantir conformidade, segurança fiscal e identificação de oportunidades tributárias dentro da própria operação das empresas.</p>

          <div className="gold-line my-6 opacity-60" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { k: "Missão", v: "Corrigir a forma como a contabilidade é aplicada nas empresas." },
              { k: "Foco", v: "Ambientes complexos, alto volume, múltiplas operações." },
              { k: "Método", v: "Análise técnica, documentação e execução precisa." },
            ].map((b, i) => (
              <div key={i}><div className="eyebrow mb-2">{b.k}</div><p className="font-serif text-[#0A2A57] text-xl leading-snug">{b.v}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-5">Vamos conversar?</h2>
          <Link to="/diagnostico" className="btn-gold">Solicitar Diagnóstico</Link>
        </div>
      </section>
    </div>
  );
}
