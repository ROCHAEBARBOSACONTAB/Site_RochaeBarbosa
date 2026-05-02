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
import heroBg from "../assets/herobg.png";

const WHATSAPP_NUMBER = "5514991269374";

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
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWhatsappUrl = () => {
    const erpFinal =
      form.erp === "Outro" ? `Outro: ${form.other_erp}` : form.erp;

    const message = `*Solicitação de Diagnóstico Fiscal Estratégico*

*Nome:* ${form.name}
*E-mail:* ${form.email}
*Telefone:* ${form.phone}
*Empresa:* ${form.company}
*Faixa de faturamento:* ${form.revenue_range}
*ERP utilizado:* ${erpFinal}

*Principal ponto de atenção da operação:*
${form.message}

*Origem:* Página de Diagnóstico - Site Rocha & Barbosa`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const submit = (e) => {
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

    const url = buildWhatsappUrl();
    setWhatsappUrl(url);

    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = url;
    }

    setDone(true);
    toast.success("Formulário preenchido. Encaminhando para o WhatsApp.");
    setLoading(false);
  };

  const inputClass =
    "w-full border border-[#E3DED2] bg-white px-4 py-4 text-[#0A2A57] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40";

  return (
    <div data-testid="diagnostic-page" className="bg-[#F7F5EF]">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white overflow-hidden noise">
        <div className="absolute inset-0 opacity-24">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.96)_0%,rgba(10,42,87,0.90)_36%,rgba(10,42,87,0.74)_68%,rgba(10,42,87,0.82)_100%)]" />

        <div className="absolute -right-28 top-16 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />
        <div className="absolute left-[-120px] bottom-[-120px] h-[320px] w-[320px] rounded-full bg-white/5 blur-[80px]" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-28 pb-24 lg:pt-36 lg:pb-28">
          <div className="max-w-[820px]">
            <div className="eyebrow text-[#D4AF37] mb-5">
              Diagnóstico Fiscal Estratégico
            </div>

            <h1 className="font-serif text-[40px] sm:text-[52px] lg:text-[62px] leading-[1.04] tracking-[-0.015em] max-w-[860px]">
              Se o seu sistema está gerando prejuízo fiscal,
              <br />
              <span className="text-[#D4AF37]">
                o problema já está na operação
              </span>
            </h1>

            <p className="mt-6 text-white/75 text-[17px] max-w-[700px] leading-[1.58]">
              Analisamos ERP, apuração, escrituração e obrigações fiscais para
              identificar inconsistências, riscos e oportunidades com base em
              dados reais da operação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="border border-white/10 bg-white/[0.03] px-4 py-2">
                ERP
              </span>
              <span className="border border-white/10 bg-white/[0.03] px-4 py-2">
                Apuração fiscal
              </span>
              <span className="border border-white/10 bg-white/[0.03] px-4 py-2">
                SPED
              </span>
              <span className="border border-white/10 bg-white/[0.03] px-4 py-2">
                Créditos fiscais
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#form-diagnostico" className="btn-gold">
                Iniciar Diagnóstico Técnico
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>

              <a href="#form-diagnostico" className="btn-outline-gold">
                Ver informações necessárias
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line" />
      </section>

      {/* CARDS */}
      <section className="bg-[#F7F5EF] py-20 border-b border-[#E7E2D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Cruzamento técnico",
                desc: "ERP, escrituração, obrigações e regras fiscais analisados em conjunto para revelar distorções que não aparecem isoladamente.",
              },
              {
                icon: FileSearch,
                title: "Foco em evidência",
                desc: "Nada de promessa genérica. A análise busca pontos identificáveis, validáveis e conectados ao impacto operacional.",
              },
              {
                icon: Cpu,
                title: "Ambientes complexos",
                desc: "Atuação voltada a empresas com operação estruturada, alto volume de informações e integração fiscal sistêmica.",
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
              A maioria das empresas só identifica falhas fiscais quando o
              impacto já aconteceu — na perda de crédito, na inconsistência do
              SPED, no retrabalho interno ou em questionamentos fiscais.
            </p>

            <p className="mt-4 text-[#444] text-[15px] leading-relaxed max-w-[520px]">
              Se existe dúvida sobre a consistência da operação, o risco já está
              presente.
            </p>

            <div className="mt-8 p-6 border border-[#D4AF37]/30 bg-[#FAFAF8]">
              <div className="flex items-center gap-2 text-[#0A2A57] mb-2">
                <ShieldCheck size={18} strokeWidth={1.4} />
                <span className="font-serif text-lg">Critério técnico</span>
              </div>

              <p className="text-sm text-[#555] leading-relaxed">
                O diagnóstico não projeta cenários genéricos. Ele identifica,
                com base técnica, onde existem riscos, perdas ou distorções na
                operação fiscal.
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
                  Informações encaminhadas
                </h3>

                <p className="text-[#555] leading-relaxed">
                  O WhatsApp foi aberto com os dados preenchidos.
                  <br />
                  Basta conferir a mensagem e enviar para iniciar o atendimento.
                </p>

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full mt-6 py-4 text-[14px] tracking-[0.12em] text-center flex items-center justify-center"
                  >
                    Abrir WhatsApp novamente
                  </a>
                )}
              </div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="diagnostic-form"
                className="border border-[#E7E2D8] bg-[#FAFAF8] p-9 lg:p-12 shadow-[0_18px_50px_rgba(10,42,87,0.08)]"
              >
                <div className="mb-10">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#0A2A57] leading-tight">
                    Solicite uma análise técnica da sua operação
                  </h3>

                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[560px]">
                    As informações abaixo permitem identificar pontos críticos e direcionar
                    uma análise real, sem diagnóstico genérico.
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
                    <option>Empresa em estruturação</option>
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
                    <option>Não possuo ERP estruturado</option>
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

                  <textarea
                    data-testid="diag-message"
                    rows={5}
                    placeholder="Principal ponto de atenção da operação *"
                    className={`${inputClass} md:col-span-2 resize-none`}
                    value={form.message}
                    onChange={upd("message")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="diag-submit"
                  className="btn-gold w-full mt-10 py-4 text-[15px] tracking-[0.12em] justify-center disabled:opacity-60"
                >
                  {loading
                    ? "Encaminhando..."
                    : "Iniciar Diagnóstico Técnico da Minha Operação"}
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>

                <p className="mt-4 text-xs text-[#6B7280] text-center">
                  Ao continuar, seus dados serão organizados em uma mensagem de WhatsApp para atendimento.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}