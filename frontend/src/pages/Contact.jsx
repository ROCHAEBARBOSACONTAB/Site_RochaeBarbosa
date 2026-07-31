import React, { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "5514991269374";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, vim pelo site da Rocha & Barbosa e gostaria de falar com um especialista."
)}`;
const MAPS_LINK = "https://maps.app.goo.gl/FwjWsxxiHdU2AmcK7";
const CONTACT_HERO =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000";

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(14) 99126-9374",
    detail: "Atendimento direto com nossa equipe.",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone fixo",
    value: "(14) 3435-1298",
    detail: "Fale conosco em horário comercial.",
    href: "tel:+551434351298",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contabilidade@rochaebarbosa.com.br",
    detail: "Envie sua solicitação por e-mail.",
    href: "mailto:contabilidade@rochaebarbosa.com.br",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const message = [
      "Olá, vim pela página de Contato da Rocha & Barbosa.",
      "",
      `Nome: ${form.name}`,
      form.company && `Empresa: ${form.company}`,
      `E-mail: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      "",
      "Como podemos ajudar:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full border border-[#DCD8CF] bg-white px-4 py-3.5 text-[15px] text-[#0A2A57] outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 placeholder:text-[#7C8590]";

  return (
    <div data-testid="contact-page" className="bg-[#F7F6F2]">
      <section className="relative overflow-hidden bg-[#0A2A57] text-white noise">
        <div className="absolute inset-0 opacity-50">
          <img src={CONTACT_HERO} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.88)_0%,rgba(10,42,87,0.78)_52%,rgba(10,42,87,0.7)_100%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-7 pb-10 lg:pt-14 lg:pb-11 text-left">
          <div className="eyebrow text-[#E6C96A] mb-4">Contato</div>
          <div className="max-w-[850px]">
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.06]">
              Fale com a Rocha & Barbosa.
            </h1>
            <p className="mt-5 max-w-[680px] text-white/80 text-[16px] leading-relaxed">
              <span className="text-[#E6C96A]">Escolha o canal mais conveniente.</span> Nossa equipe está pronta para orientar o próximo passo da sua empresa.
            </p>
          </div>
        </div>
        <div className="relative gold-line" />
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="group border border-[#DDD8CE] bg-[#FCFBF8] p-6 min-h-[188px] flex flex-col justify-between transition hover:border-[#D4AF37] hover:shadow-[0_14px_30px_rgba(10,42,87,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 border border-[#D4AF37]/60 flex items-center justify-center text-[#B48600]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight size={18} className="text-[#B48600] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-6">
                    <div className="eyebrow mb-2">{channel.label}</div>
                    <div className="text-[#0A2A57] font-medium text-[14px] leading-snug break-all">{channel.value}</div>
                    <p className="mt-2 text-sm text-[#657080] leading-relaxed">{channel.detail}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#E7E2D8] py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Escritório</div>
            <h2 className="font-serif text-3xl lg:text-[42px] leading-[1.1] text-[#0A2A57]">
              Atendimento onde sua empresa precisa.
            </h2>
            <p className="mt-5 max-w-[470px] text-[#536174] leading-relaxed">
              Base em Pederneiras, com suporte presencial quando necessário e atendimento remoto para empresas de toda a região e do Brasil.
            </p>
            <div className="mt-7 space-y-5 text-[#35445A]">
              <div className="flex gap-3">
                <MapPin size={20} className="shrink-0 mt-0.5 text-[#B48600]" strokeWidth={1.5} />
                <address className="not-italic leading-relaxed">
                  Rua Duque de Caxias, nº 294<br />
                  Centro, Pederneiras - SP
                </address>
              </div>
              <div className="flex gap-3">
                <Clock3 size={20} className="shrink-0 mt-0.5 text-[#B48600]" strokeWidth={1.5} />
                <p className="leading-relaxed">Segunda a sexta, em horário comercial.</p>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-blue mt-8"
            >
              Abrir no Google Maps <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          <div className="lg:col-span-7 border border-[#DDD8CE] p-2 bg-[#F7F6F2]">
            <iframe
              title="Localização da Rocha & Barbosa em Pederneiras"
              src="https://www.google.com/maps?q=Rua%20Duque%20de%20Caxias%20294%2C%20Pederneiras%20SP&output=embed"
              className="w-full h-[300px] lg:h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Envie uma mensagem</div>
            <h2 className="font-serif text-3xl lg:text-[42px] leading-[1.1] text-[#0A2A57]">
              Conte brevemente o que sua empresa precisa.
            </h2>
            <p className="mt-5 text-[#536174] leading-relaxed max-w-[460px]">
              Preencha os dados essenciais. Abriremos uma mensagem preenchida no WhatsApp para você revisar antes de falar diretamente com nossa equipe.
            </p>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 bg-white border border-[#DDD8CE] p-6 sm:p-8 lg:p-10">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="sr-only">Nome</span>
                <input className={inputClass} value={form.name} onChange={update("name")} placeholder="Nome *" required />
              </label>
              <label className="block">
                <span className="sr-only">Empresa</span>
                <input className={inputClass} value={form.company} onChange={update("company")} placeholder="Empresa" />
              </label>
              <label className="block">
                <span className="sr-only">E-mail</span>
                <input className={inputClass} type="email" value={form.email} onChange={update("email")} placeholder="E-mail *" required />
              </label>
              <label className="block">
                <span className="sr-only">Telefone</span>
                <input className={inputClass} type="tel" value={form.phone} onChange={update("phone")} placeholder="Telefone" />
              </label>
              <label className="sm:col-span-2 block">
                <span className="sr-only">Mensagem</span>
                <textarea className={`${inputClass} min-h-[150px] resize-y`} value={form.message} onChange={update("message")} placeholder="Como podemos ajudar? *" required />
              </label>
            </div>
            <button type="submit" className="btn-gold mt-7 w-full justify-center">
              Abrir mensagem no WhatsApp <Send size={16} strokeWidth={1.5} />
            </button>
            <p className="mt-4 text-center text-xs leading-relaxed text-[#6B7280]">
              Nenhuma mensagem é enviada automaticamente: você confirma o envio no WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
