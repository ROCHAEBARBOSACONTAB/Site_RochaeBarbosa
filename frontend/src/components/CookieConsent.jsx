import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnalyticsConsent, setAnalyticsConsent } from "../lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !getAnalyticsConsent());
  const [managing, setManaging] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => getAnalyticsConsent() === "granted");

  useEffect(() => {
    const openPreferences = () => {
      setAnalyticsEnabled(getAnalyticsConsent() === "granted");
      setManaging(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-consent", openPreferences);
    return () => window.removeEventListener("open-cookie-consent", openPreferences);
  }, []);

  if (!visible) return null;

  const choose = (value) => {
    setAnalyticsConsent(value);
    setVisible(false);
    setManaging(false);
  };

  return (
    <aside
      role="dialog"
      aria-label="Preferências de cookies"
      aria-modal="false"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-[800px] border border-[#D4AF37]/45 bg-[#071E40] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      {managing ? (
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E6C96A]">
            Gerenciar cookies
          </div>
          <p className="mt-2 max-w-[650px] text-sm leading-6 text-white/80">
            Os cookies essenciais mantêm sua escolha registrada. Os cookies de medição nos ajudam a entender o uso do site e aprimorar nossos serviços.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="border border-white/15 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">Essenciais</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E6C96A]">Sempre ativos</span>
              </div>
              <p className="mt-2 text-[13px] leading-5 text-white/70">Registram sua preferência de cookies.</p>
            </div>
            <label className="flex cursor-pointer items-start gap-3 border border-white/15 bg-white/5 p-4 transition hover:border-[#D4AF37]/50">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#D4AF37]"
              />
              <span>
                <span className="block text-sm font-semibold text-white">Medição</span>
                <span className="mt-2 block text-[13px] leading-5 text-white/70">Permitem analisar acessos, páginas e contatos pelo Google Analytics.</span>
              </span>
            </label>
          </div>

          <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/82 transition hover:text-white"
            >
              Recusar opcionais
            </button>
            <button
              type="button"
              onClick={() => choose(analyticsEnabled ? "granted" : "denied")}
              className="border border-[#D4AF37]/80 bg-[#D4AF37] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#071E40] transition hover:bg-[#E6C96A]"
            >
              Salvar preferências
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[500px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E6C96A]">
              Sua privacidade
            </div>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Utilizamos cookies para melhorar sua experiência online e compreender como o site é utilizado. Ao continuar, você concorda com o uso de cookies de medição conforme nossa{" "}
              <Link to="/politica-de-cookies" className="text-[#E6C96A] underline decoration-[#E6C96A]/50 underline-offset-4 transition hover:text-white">
                Política de Cookies
              </Link>.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setManaging(true)}
              className="border border-white/35 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white transition hover:border-white hover:bg-white/10"
            >
              Gerenciar cookies
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="bg-[#D4AF37] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#071E40] transition hover:bg-[#E6C96A]"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
