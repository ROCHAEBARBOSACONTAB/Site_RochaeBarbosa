import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logogold from "../assets/logogold.png";

  const links = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/conteudo", label: "Conteúdo" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
    { to: "/recursos", label: "Materiais Técnicos" },
  ];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
     <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 glass-header transition-all"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[96px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" data-testid="logo-home" className="flex items-center py-2">
          <img
            src={logogold}
            alt="Rocha & Barbosa"
            className="h-20 w-auto"
          />
          <div className="font-serif text-[#D4AF37] text-[35px] tracking-[0.06em] leading-none">Rocha & Barbosa</div>
        </Link>
      
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to} to={l.to} data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[12px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-[#D4AF37]" : "text-white/85 hover:text-[#D4AF37]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6 ml-6">
          {user ? (
            <div className="hidden md:flex items-center gap-6">
              {user.role === "admin" && (
                <Link to="/admin" data-testid="nav-admin" className="text-white/85 hover:text-[#D4AF37] text-[12px] uppercase tracking-[0.18em]">
                  Admin
                </Link>
              )}
              <button data-testid="btn-logout" onClick={logout} className="text-white/60 hover:text-white text-[12px] uppercase tracking-[0.18em]">
                Sair
              </button>
            </div>
          ) : (
            <Link to="/login" data-testid="nav-login" className="hidden md:inline text-white/85 hover:text-[#D4AF37] text-[12px] uppercase tracking-[0.18em]">
              Entrar
            </Link>
          )}
          <button data-testid="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} className="lg:hidden text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* ===== MOBILE NAVIGATION ===== */}
      {open && (
        <div className="lg:hidden bg-[#0A2A57] border-t border-[#D4AF37]/20">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to} to={l.to}
                data-testid={`mnav-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[13px] uppercase tracking-[0.2em] ${isActive ? "text-[#D4AF37]" : "text-white/85"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="gold-line my-2" />
            {user ? (
              <>
                {user.role === "admin" && <Link to="/admin" className="text-white/85 text-[13px] uppercase tracking-[0.2em]">Admin</Link>}
                <button onClick={logout} className="text-white/60 text-left text-[13px] uppercase tracking-[0.2em]">Sair</button>
              </>
            ) : (
              <Link to="/login" className="text-white/85 text-[13px] uppercase tracking-[0.2em]">Entrar</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
