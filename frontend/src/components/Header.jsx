import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, FileCheck2, Layers, Menu, TableProperties, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logogold from "../assets/logogold.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

const resourceLinks = [
  { to: "/recursos/simples-nacional", label: "Simples Nacional", icon: Layers },
  { to: "/recursos/cfop", label: "CFOP", icon: TableProperties },
  { to: "/recursos/tabelas", label: "Tabelas Fiscais", icon: FileCheck2 },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 glass-header transition-all border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-12 h-[80px] lg:h-[96px] flex items-center justify-between">
        <Link
          to="/"
          data-testid="logo-home"
          onClick={() => window.scrollTo(0, 0)}
          className="flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-6 py-2 group"
        >
          <img
            src={logogold}
            alt="Rocha & Barbosa"
            className="h-10 sm:h-12 lg:h-16 w-auto translate-y-[-2px] transition group-hover:opacity-90"
          />
          <div className="min-w-0 font-serif text-[#D4AF37] text-[20px] sm:text-[22px] lg:text-[28px] tracking-[0.04em] leading-none translate-y-[3px] whitespace-nowrap transition group-hover:opacity-110">
            Rocha & Barbosa
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        <nav className="flex items-center gap-6 xl:gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative py-3 text-[12px] uppercase tracking-[0.24em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#E6C96A] ${
                  isActive
                    ? "text-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#D4AF37]"
                    : "text-white/85 hover:text-[#D4AF37]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
            onFocus={() => setResourcesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setResourcesOpen(false);
              }
            }}
          >
            <NavLink
              to="/recursos"
              data-testid="nav-materiais-técnicos"
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 py-3 text-[12px] uppercase tracking-[0.24em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#E6C96A] ${
                  isActive || resourcesOpen
                    ? "text-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#D4AF37]"
                    : "text-white/85 hover:text-[#D4AF37]"
                }`
              }
            >
              Materiais Técnicos
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </NavLink>

            {resourcesOpen && (
              <div
                role="menu"
                aria-label="Materiais técnicos"
                className="absolute right-0 top-full mt-4 w-[286px] border border-[#D4AF37]/35 bg-[#08254E] p-2 shadow-[0_18px_42px_rgba(0,0,0,0.24)]"
              >
                <div className="px-3 pt-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6C96A]">
                  Acesso rápido
                </div>
                {resourceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      className="group flex items-center gap-3 border-t border-white/10 px-3 py-3 text-sm text-white/85 transition hover:bg-white/5 hover:text-[#E6C96A]"
                    >
                      <Icon size={17} strokeWidth={1.5} className="shrink-0 text-[#D4AF37]" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/recursos"
                  role="menuitem"
                  className="mt-2 flex items-center justify-between border-t border-[#D4AF37]/25 px-3 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E6C96A] transition hover:text-white"
                >
                  Ver todos os materiais
                  <ChevronDown size={14} className="-rotate-90" />
                </Link>
              </div>
            )}
          </div>
        </nav>
        <Link
          to="/contato"
          className="hidden xl:inline-flex items-center gap-2 border border-[#D4AF37]/80 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E6C96A] transition hover:bg-[#D4AF37] hover:text-[#0A2A57] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#E6C96A]"
        >
          Falar com especialista <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
        </div>

        <button
          type="button"
          data-testid="nav-mobile-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden ml-2 shrink-0 p-2 text-white hover:text-[#D4AF37] transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/*<div className="flex items-center gap-6 ml-6">
          {user ? (
            <div className="hidden md:flex items-center gap-6">
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  data-testid="nav-admin"
                  className="text-white/85 hover:text-[#D4AF37] text-[12px] uppercase tracking-[0.22em] transition-colors"
                >
                  Admin
                </Link>
              )}
              <button
                data-testid="btn-logout"
                onClick={logout}
                className="text-white/60 hover:text-white text-[12px] uppercase tracking-[0.22em] transition-colors"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              data-testid="nav-login"
              className="hidden md:inline text-white/85 hover:text-[#D4AF37] text-[12px] uppercase tracking-[0.22em] transition-colors"
            >
              Entrar
            </Link>
          )}

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>*/}
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A2A57] border-t border-[#D4AF37]/20">
          <div className="px-6 py-6 flex flex-col gap-5">
            {[...links, { to: "/recursos", label: "Materiais Técnicos" }].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`mnav-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[13px] uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-[#D4AF37] font-medium" : "text-white/85 hover:text-[#D4AF37]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <div className="gold-line my-2" />

            {user ? (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-white/85 hover:text-[#D4AF37] text-[13px] uppercase tracking-[0.22em] transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-white/60 hover:text-white text-left text-[13px] uppercase tracking-[0.22em] transition-colors"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white/85 hover:text-[#D4AF37] text-[13px] uppercase tracking-[0.22em] transition-colors"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
