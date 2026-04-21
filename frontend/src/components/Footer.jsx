import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0A2A57] text-white relative noise">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center">
                <span className="font-serif text-[#D4AF37] text-xl">R</span>
              </div>
              <div>
                <div className="font-serif text-lg">Rocha & Barbosa</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#E6C96A]">Assessoria Contábil</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Consultoria técnica especializada em estruturação fiscal, recuperação de créditos e compliance para empresas que operam em ambientes complexos, incluindo TOTVS Protheus.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow mb-5 text-[#E6C96A]">Navegar</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/servicos" className="hover:text-[#D4AF37]">Serviços</Link></li>
              <li><Link to="/diagnostico" className="hover:text-[#D4AF37]">Diagnóstico</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4AF37]">Blog</Link></li>
              <li><Link to="/recursos" className="hover:text-[#D4AF37]">Recursos</Link></li>
              <li><Link to="/sobre" className="hover:text-[#D4AF37]">Sobre</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-5 text-[#E6C96A]">Especialidades</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>SPED Fiscal & Contribuições</li>
              <li>Reforma Tributária (CBS/IBS)</li>
              <li>TOTVS Protheus (SIGAFIS)</li>
              <li>Recuperação de Créditos</li>
              <li>Compliance Fiscal</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-5 text-[#E6C96A]">Contato</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><Mail size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5"/> contato@rochabarbosa.com.br</li>
              <li className="flex items-start gap-3"><Phone size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5"/> +55 (11) 4000-0000</li>
              <li className="flex items-start gap-3"><MapPin size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5"/> São Paulo · SP</li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-10 opacity-60" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Rocha & Barbosa Assessoria Contábil. Todos os direitos reservados.</div>
          <div className="uppercase tracking-[0.22em]">Consultoria Fiscal · Tributária · Corporativa</div>
        </div>
      </div>
    </footer>
  );
}
