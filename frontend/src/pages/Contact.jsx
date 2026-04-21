import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { api } from "../lib/api";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const upd = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) { toast.error("Preencha nome, e-mail e mensagem."); return; }
    setLoading(true);
    try {
      await api.post("/contact", f);
      setDone(true); toast.success("Mensagem enviada.");
    } catch { toast.error("Erro ao enviar."); }
    finally { setLoading(false); }
  };

  return (
    <div data-testid="contact-page">
      <section className="bg-[#0A2A57] text-white py-20 noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-4">Contato</div>
          <h1 className="font-serif text-4xl lg:text-6xl max-w-3xl leading-[1.08]">Entre em contato com a equipe técnica.</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-7">
            {[
              { i: Mail, l: "E-mail", v: "contato@rochabarbosa.com.br" },
              { i: Phone, l: "Telefone", v: "+55 (11) 4000-0000" },
              { i: MapPin, l: "Endereço", v: "São Paulo · SP, Brasil" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <c.i size={18} strokeWidth={1.4} className="text-[#D4AF37]"/>
                </div>
                <div>
                  <div className="eyebrow mb-1">{c.l}</div>
                  <div className="text-[#0A2A57] font-serif text-lg">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-8">
            {done ? (
              <div className="border border-[#D4AF37]/50 bg-[#F2F2F2] p-10 text-center">
                <h3 className="font-serif text-2xl text-[#0A2A57]">Mensagem recebida</h3>
                <p className="text-[#555] mt-2">Retornaremos em até 1 dia útil.</p>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="contact-form" className="p-8 lg:p-10 border border-[#EAEAEA] space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input data-testid="ct-name" className="input-line" placeholder="Nome *" value={f.name} onChange={upd("name")} required/>
                  <input data-testid="ct-email" type="email" className="input-line" placeholder="E-mail *" value={f.email} onChange={upd("email")} required/>
                  <input data-testid="ct-phone" className="input-line" placeholder="Telefone" value={f.phone} onChange={upd("phone")}/>
                  <input data-testid="ct-subject" className="input-line" placeholder="Assunto" value={f.subject} onChange={upd("subject")}/>
                </div>
                <textarea data-testid="ct-message" rows={5} className="input-line" placeholder="Mensagem *" value={f.message} onChange={upd("message")} required/>
                <button data-testid="ct-submit" disabled={loading} className="btn-gold">{loading ? "Enviando..." : "Enviar mensagem"}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
