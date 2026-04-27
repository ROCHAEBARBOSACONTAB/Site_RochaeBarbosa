import React, { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileSearch,
  Database,
  Cpu,
} from "lucide-react";
import { api } from "../lib/api";

export default function Diagnostic() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue_range: "",
    erp: "",
    other_erp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const upd = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.company ||
      !form.revenue_range ||
      !form.erp ||
      !form.message ||
      (form.erp === "Outro" && !form.other_erp)
    ) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/leads", {
        ...form,
        erp: form.erp === "Outro" ? `Outro: ${form.other_erp}` : form.erp,
        source: "diagnostic",
      });

      setDone(true);
      toast.success("Solicitação recebida. Entraremos em contato.");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-[#E3DED2] bg-white px-4 py-4 text-[#0A2A57] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40";

  return (
    <div data-testid="diagnostic-page" className="bg-[#F7F5EF]">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="eyebrow text-[#D4AF37] mb-4">
            Diagnóstico Fiscal Estratégico
          </div>

          <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.05] max-w-[780px]">
            Sua operação fiscal pode estar errada —
            <span className="text-[#D4AF37]">
              {" "}sem nenhum erro aparente.
            </span>
          </h1>

          <p className="mt-6 text-white/75 text-[18px] max-w-[620px] leading-relaxed">
            Identificamos riscos, perdas e inconsistências diretamente na estrutura da sua operação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="border border-white/10 px-4 py-2">ERP</span>
            <span className="border border-white/10 px-4 py-2">Escrituração</span>
            <span className="border border-white/10 px-4 py-2">SPED</span>
            <span className="border border-white/10 px-4 py-2">Créditos fiscais</span>
          </div>

          <div className="mt-10">
            <a href="#form-diagnostico" className="btn-gold">
              Iniciar Diagnóstico Técnico
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-[#F7F5EF] py-20 border-b border-[#E7E2D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Cruzamento técnico",
                desc: "ERP, escrituração, obrigações e regras fiscais analisados em conjunto.",
              },
              {
                icon: FileSearch,
                title: "Foco em evidência",
                desc: "Nada de promessa genérica. Apenas pontos identificáveis e validáveis.",
              },
              {
                icon: Cpu,
                title: "Ambientes complexos",
                desc: "Atuação em operações com alto volume e integração fiscal sistêmica.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="premium-card bg-white border border-[#E7E2D8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_16px_38px_rgba(10,42,87,0.10)]"
              >
                <item.icon
                  size={25}
                  strokeWidth={1.4}
                  className="text-[#D4AF37] mb-5"
                />

                <h3 className="font-serif text-2xl text-[#0A2A57] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#555] text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="form-diagnostico" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Solicitação de Diagnóstico</div>

            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              O problema não está no relatório.
              <span className="text-[#D4AF37]">
                {" "}Está na estrutura da operação.
              </span>
            </h2>

            <p className="mt-6 text-[#555] text-[16px] leading-relaxed max-w-[520px]">
              A maioria das empresas só identifica falhas fiscais quando o impacto já aconteceu —
              seja na perda de crédito, na inconsistência do SPED ou em questionamentos fiscais.
            </p>

            <p className="mt-4 text-[#444] text-[15px] leading-relaxed max-w-[520px]">
              Se existe dúvida sobre a consistência da operação, o risco já está presente.
            </p>

            <div className="mt-8 p-6 border border-[#D4AF37]/30 bg-[#FAFAF8]">
              <div className="flex items-center gap-2 text-[#0A2A57] mb-2">
                <ShieldCheck size={18} strokeWidth={1.4} />
                <span className="font-serif text-lg">Critério técnico</span>
              </div>

              <p className="text-sm text-[#555] leading-relaxed">
                O diagnóstico não projeta cenários genéricos. Ele identifica, com base técnica,
                onde existem riscos, perdas ou distorções na operação fiscal.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {done ? (
              <div
                data-testid="diagnostic-success"
                className="border border-[#D4AF37]/50 bg-[#FAFAF8] p-10 text-center"
              >
                <CheckCircle2
                  size={42}
                  strokeWidth={1.3}
                  className="text-[#D4AF37] mx-auto mb-4"
                />

                <h3 className="font-serif text-3xl text-[#0A2A57] mb-3">
                  Solicitação recebida
                </h3>

                <p className="text-[#555]">
                  Nossa equipe analisará as informações iniciais e retornará para o próximo passo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="diagnostic-form"
                className="border border-[#E7E2D8] bg-[#FAFAF8] p-9 lg:p-12 shadow-[0_18px_50px_rgba(10,42,87,0.08)]"
              >
                <div className="mb-10">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#0A2A57] leading-tight">
                    Descubra onde sua operação fiscal está falhando
                  </h3>

                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[560px]">
                    Para análise correta, todos os dados são necessários.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    data-testid="diag-name"
                    placeholder="Nome *"
                    className={inputClass}
                    value={form.name}
                    onChange={upd("name")}
                    required
                  />

                  <input
                    data-testid="diag-email"
                    type="email"
                    placeholder="E-mail *"
                    className={inputClass}
                    value={form.email}
                    onChange={upd("email")}
                    required
                  />

                  <input
                    data-testid="diag-phone"
                    placeholder="Telefone *"
                    className={inputClass}
                    value={form.phone}
                    onChange={upd("phone")}
                    required
                  />

                  <input
                    data-testid="diag-company"
                    placeholder="Empresa *"
                    className={inputClass}
                    value={form.company}
                    onChange={upd("company")}
                    required
                  />

                  <select
                    data-testid="diag-revenue"
                    className={inputClass}
                    value={form.revenue_range}
                    onChange={upd("revenue_range")}
                    required
                  >
                    <option value="">Faturamento *</option>
                    <option>Até R$ 10M/ano</option>
                    <option>R$ 10M – R$ 50M/ano</option>
                    <option>R$ 50M – R$ 200M/ano</option>
                    <option>Acima de R$ 200M/ano</option>
                  </select>

                  <select
                    data-testid="diag-erp"
                    className={inputClass}
                    value={form.erp}
                    onChange={upd("erp")}
                    required
                  >
                    <option value="">ERP *</option>
                    <option>TOTVS Protheus</option>
                    <option>SAP</option>
                    <option>Oracle</option>
                    <option>Domínio Sistemas</option>
                    <option>Bling</option>
                    <option>Outro</option>
                  </select>

                  {form.erp === "Outro" && (
                    <input
                      data-testid="diag-other-erp"
                      placeholder="Informe o ERP utilizado *"
                      className="md:col-span-2 w-full border border-[#E3DED2] bg-white px-4 py-4 text-[#0A2A57] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40"
                      value={form.other_erp}
                      onChange={upd("other_erp")}
                      required
                    />
                  )}
                </div>

                <textarea
                  data-testid="diag-message"
                  rows={4}
                  placeholder="Principal ponto de atenção *"
                  className={`${inputClass} mt-8 resize-none`}
                  value={form.message}
                  onChange={upd("message")}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="diag-submit"
                  className="btn-gold w-full mt-12 py-4 text-[15px] tracking-[0.12em] justify-center disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Iniciar Análise da Minha Operação"}
                </button>

                <p className="mt-4 text-xs text-[#6B7280] text-center">
                  Retorno em até 1 dia útil após análise inicial.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}