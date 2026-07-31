import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import logogold from "../assets/logogold.png";

const googleReviewsUrl =
  "https://www.google.com/search?kgmid=/g/11xkvg45zb&q=ROCHA+E+BARBOSA+ASSESSORIA+CONT%C3%81BIL";

const solutionLinks = [
  { to: "/servicos/abertura-de-empresa", label: "Abertura e regularização" },
  { to: "/servicos#organizar", label: "Gestão contábil e fiscal" },
  { to: "/diagnostico", label: "Diagnóstico fiscal" },
  { to: "/servicos#evoluir", label: "ERP e compliance" },
];

const navigationLinks = [
  { to: "/servicos", label: "Serviços" },
  { to: "/diagnostico", label: "Diagnóstico" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
  { to: "/recursos", label: "Materiais Técnicos" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071E40] text-white border-t border-[#D4AF37]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-9 lg:pt-16 pb-7 lg:pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-11 lg:gap-x-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-4 mb-5 group"
            >
              <img
                src={logogold}
                alt="Rocha & Barbosa"
                className="h-12 lg:h-14 w-auto translate-y-[-2px] transition group-hover:opacity-90"
              />
              <div className="font-serif text-[#D4AF37] text-[24px] lg:text-[28px] tracking-[0.04em] leading-none translate-y-[4px]">
                Rocha & Barbosa
              </div>
            </Link>
            <p className="hidden lg:block max-w-sm text-[14px] text-white/72 leading-6">
              Consultoria fiscal, tributária e empresarial para operações que exigem estrutura, precisão e segurança técnica.
            </p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 lg:mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-[#E6C96A]"
            >
              <span className="flex items-center gap-0.5 text-[#D4AF37]" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={13} fill="currentColor" strokeWidth={1.2} />
                ))}
              </span>
              Avaliações de clientes no Google
            </a>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6C96A]">
              Soluções
            </div>
            <ul className="space-y-3 text-[14px] text-white/80">
              {solutionLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-[#D4AF37]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6C96A]">
              Navegar
            </div>
            <ul className="space-y-3 text-[14px] text-white/80">
              {navigationLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-[#D4AF37]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6C96A]">
              Contato
            </div>
            <ul className="space-y-3 text-[14px] text-white/80">
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="tel:+551434351298" className="transition hover:text-[#D4AF37]">(14) 3435-1298</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="https://wa.me/5514991269374" target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]">
                  WhatsApp: (14) 99126-9374
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="mailto:contabilidade@rochaebarbosa.com.br" className="transition hover:text-[#D4AF37] break-all">
                  contabilidade@rochaebarbosa.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/FwjWsxxiHdU2AmcK7" target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]">
                  Rua Duque de Caxias Nº 294, Centro<br />
                  Pederneiras - SP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 border-t border-white/10 pt-5 lg:pt-6 text-[11px] text-white/45 tracking-[0.04em]">
          <div>© {new Date().getFullYear()} Rocha & Barbosa Assessoria Contábil. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
