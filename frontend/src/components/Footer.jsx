import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logogold from "../assets/logogold.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A2A57] text-white border-t border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-10 lg:pb-12">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ===== COLUNA 1 — MARCA ===== */}
          <div className="lg:col-span-4">
            
            <Link to="/"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}  className="flex items-center gap-5 mb-6 group">
              <img
                src={logogold}
                alt="Rocha & Barbosa"
                className="h-12 lg:h-16 w-auto translate-y-[-2px] transition group-hover:opacity-90"
              />

              <div className="font-serif text-[#D4AF37] text-[24px] lg:text-[30px] tracking-[0.04em] leading-none translate-y-[6px] transition group-hover:opacity-90">
                Rocha & Barbosa
              </div>
            </Link>
            <p className="text-[14px] text-white/70 leading-6 max-w-md">
              Consultoria fiscal e tributária para empresas que exigem estrutura,
              precisão e segurança técnica.
            </p>

            <a
              href="https://wa.me/5514991269374"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-[14px] text-[#D4AF37] transition hover:text-[#E6C96A]"
            >
              Falar com um especialista
            </a>
          </div>

          {/* ===== COLUNA 2 — NAVEGAR ===== */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[#D4AF37]">
              Navegar
            </div>

            <ul className="space-y-3 text-[14px] text-white/90">
              <li><Link to="/servicos" className="hover:text-[#D4AF37] transition">Serviços</Link></li>
              <li><Link to="/diagnostico" className="hover:text-[#D4AF37] transition">Diagnóstico</Link></li>
              <li><Link to="/conteudo" className="hover:text-[#D4AF37] transition">Conteúdo</Link></li>
              <li><Link to="/sobre" className="hover:text-[#D4AF37] transition">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-[#D4AF37] transition">Contato</Link></li>
              <li><Link to="/recursos" className="hover:text-[#D4AF37] transition">Materiais Técnicos</Link></li>
            </ul>
          </div>

          {/* ===== COLUNA 3 — ESPECIALIDADES ===== */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Especialidades
            </div>

            <ul className="space-y-3 text-[14px] text-white/90">
              <li>SPED Fiscal &amp; Contribuições</li>
              <li>Reforma Tributária (CBS/IBS)</li>
              <li>TOTVS Protheus</li>
              <li>Recuperação de Créditos</li>
              <li>Compliance Fiscal</li>
            </ul>
          </div>

          {/* ===== COLUNA 4 — CONTATO ===== */}
          <div className="lg:col-span-3">
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Contato
            </div>

            <ul className="space-y-3 text-[14px] text-white/90">
              
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#D4AF37]/90 mt-1" />
                <a
                  href="https://wa.me/5514991269374"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition"
                >
                  (14) 99126-9374
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#D4AF37]/90 mt-1" />
                <a
                  href="mailto:contabilidade@rochaebarbosa.com.br"
                  className="hover:text-[#D4AF37] transition break-words"
                >
                  contabilidade@rochaebarbosa.com.br
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37]/90 mt-1" />
                <a
                  href="https://maps.app.goo.gl/FwjWsxxiHdU2AmcK7"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition"
                >
                  Rua Duque de Caxias Nº 294, Centro<br />
                  Pederneiras · SP
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* ===== LINHA FINAL ===== */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/40 tracking-[0.04em] gap-3">
          
          <div>
            © {new Date().getFullYear()} Rocha & Barbosa Assessoria Contábil. Todos os direitos reservados.
          </div>

          <div className="uppercase tracking-[0.18em] text-white/40 text-center">
            Consultoria Fiscal · Tributária · Corporativa
          </div>

        </div>

      </div>
    </footer>
  );
}