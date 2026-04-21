import React, { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { api } from "../lib/api";

export default function Diagnostic() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    revenue_range: "", erp: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) { toast.error("Preencha nome, e-mail e empresa."); return; }
    setLoading(true);
    try {
      await api.post("/leads", { ...form, source: "diagnostic" });
      setDone(true);
      toast.success("Recebemos sua solicitação. Um consultor entrará em contato.");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally { setLoading(false); }
  };

  return (
    <div data-testid="diagnostic-page">
      <section className="bg-[#0A2A57] text-white py-20 noise relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-4">Diagnóstico Fiscal</div>
          <h1 className="font-serif text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
            Sua empresa pode estar com inconsistências fiscais <span className="text-[#D4AF37]">invisíveis</span>.
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="eyebrow mb-3">O que será analisado</div>
              <ul className="space-y-4">
                {[
                  "Consistência da escrituração (EFD-ICMS/IPI, Contribuições, ECD)",
                  "Parametrização fiscal do ERP (TIOs, matriz tributária)",
                  "Oportunidades de recuperação de créditos retroativos",
                  "Aderência às teses tributárias consolidadas",
                  "Riscos de autuação e pontos de exposição",
                  "Preparação para a Reforma Tributária (CBS/IBS)",
                ].map((x, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} strokeWidth={1.4} className="text-[#D4AF37] mt-0.5 shrink-0"/>
                    <span className="text-[#333] text-[15px] leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#D4AF37]/30 bg-[#F2F2F2]">
              <div className="flex items-center gap-2 mb-2 text-[#0A2A57]"><ShieldCheck size={18} strokeWidth={1.4} /> <span className="font-serif text-lg">Compromisso técnico</span></div>
              <p className="text-sm text-[#555] leading-relaxed">Entregamos um relatório objetivo. Sem promessa de percentuais, apenas oportunidades reais identificadas na sua operação.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {done ? (
              <div data-testid="diagnostic-success" className="border border-[#D4AF37]/50 bg-[#F2F2F2] p-10 text-center">
                <CheckCircle2 size={40} strokeWidth={1.3} className="text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#0A2A57] mb-2">Solicitação recebida</h3>
                <p className="text-[#555]">Nossa equipe retornará em até 1 dia útil para agendar a análise inicial.</p>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="diagnostic-form" className="space-y-7 p-8 lg:p-10 border border-[#EAEAEA]">
                <div className="eyebrow">Formulário de solicitação</div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">Nome *</label><input data-testid="diag-name" className="input-line mt-1" value={form.name} onChange={upd("name")} required /></div>
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">E-mail corporativo *</label><input data-testid="diag-email" type="email" className="input-line mt-1" value={form.email} onChange={upd("email")} required /></div>
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">Telefone</label><input data-testid="diag-phone" className="input-line mt-1" value={form.phone} onChange={upd("phone")} /></div>
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">Empresa *</label><input data-testid="diag-company" className="input-line mt-1" value={form.company} onChange={upd("company")} required /></div>
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">Faixa de faturamento</label>
                    <select data-testid="diag-revenue" className="input-line mt-1" value={form.revenue_range} onChange={upd("revenue_range")}>
                      <option value="">Selecione</option>
                      <option>Até R$ 10M/ano</option>
                      <option>R$ 10M – R$ 50M/ano</option>
                      <option>R$ 50M – R$ 200M/ano</option>
                      <option>Acima de R$ 200M/ano</option>
                    </select>
                  </div>
                  <div><label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">ERP utilizado</label>
                    <select data-testid="diag-erp" className="input-line mt-1" value={form.erp} onChange={upd("erp")}>
                      <option value="">Selecione</option>
                      <option>TOTVS Protheus</option>
                      <option>SAP</option>
                      <option>Oracle</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#0A2A57]">Contexto (opcional)</label>
                  <textarea data-testid="diag-message" rows={4} className="input-line mt-1" value={form.message} onChange={upd("message")} />
                </div>
                <button type="submit" disabled={loading} data-testid="diag-submit" className="btn-gold disabled:opacity-60">
                  {loading ? "Enviando..." : "Solicitar Análise"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
