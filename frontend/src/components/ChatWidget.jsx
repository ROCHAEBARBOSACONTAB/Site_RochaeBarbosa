import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { api } from "../lib/api";

function uuid() {
  return "xxxxxxxxxxxx4xxx".replace(/[x]/g, (c) =>
    ((Math.random() * 16) | 0).toString(16)
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("ia"); // ia | whatsapp
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Olá! Sou o Consultor Virtual da Rocha & Barbosa. Como posso ajudar sua empresa hoje? Posso esclarecer dúvidas sobre SPED, Protheus, Reforma Tributária ou Recuperação de Créditos." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(localStorage.getItem("rb_chat_sid") || (() => {
    const s = uuid();
    localStorage.setItem("rb_chat_sid", s);
    return s;
  })());
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const send = async (e) => {
    e?.preventDefault();
    const msg = input.trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: msg }]);
    setLoading(true);
    try {
      const r = await api.post("/chat", { session_id: sessionId.current, message: msg });
      setMessages((m) => [...m, { role: "assistant", text: r.data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Desculpe, houve um erro. Tente novamente em instantes ou solicite um diagnóstico em /diagnostico." }]);
    } finally {
      setLoading(false);
    }
  };

  const waNumber = "5511940000000";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Olá, vim pelo site da Rocha & Barbosa e gostaria de saber mais.")}`;

  return (
    <>
      {!open && (
        <button
          data-testid="chat-toggle"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#D4AF37] text-[#0A2A57] flex items-center justify-center shadow-xl pulse-gold hover:bg-[#E6C96A] transition-colors"
          aria-label="Abrir chat"
        >
          <MessageCircle size={24} strokeWidth={1.8} />
        </button>
      )}

      {open && (
        <div data-testid="chat-panel" className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] h-[540px] max-h-[calc(100vh-48px)] bg-white border border-[#0A2A57]/10 shadow-2xl flex flex-col">
          <div className="bg-[#0A2A57] text-white px-5 py-4 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div>
              <div className="font-serif text-[16px]">Fale com um Consultor</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#E6C96A]">IA · WhatsApp · 24/7</div>
            </div>
            <button data-testid="chat-close" onClick={() => setOpen(false)} className="text-white/70 hover:text-white"><X size={20} /></button>
          </div>
          <div className="flex border-b border-[#F2F2F2]">
            <button data-testid="chat-tab-ia" onClick={() => setTab("ia")} className={`flex-1 py-3 text-[11px] uppercase tracking-[0.2em] ${tab === "ia" ? "text-[#0A2A57] border-b-2 border-[#D4AF37]" : "text-[#B0B0B0]"}`}>
              Consultor IA
            </button>
            <button data-testid="chat-tab-wa" onClick={() => setTab("whatsapp")} className={`flex-1 py-3 text-[11px] uppercase tracking-[0.2em] ${tab === "whatsapp" ? "text-[#0A2A57] border-b-2 border-[#D4AF37]" : "text-[#B0B0B0]"}`}>
              WhatsApp
            </button>
          </div>
          {tab === "ia" ? (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFAFA]">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[82%] px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                      m.role === "user" ? "bg-[#0A2A57] text-white" : "bg-white border border-[#EAEAEA] text-[#0A2A57]"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="px-3.5 py-2.5 bg-white border border-[#EAEAEA] text-[#B0B0B0] text-[13px]">Consultor digitando…</div>
                  </div>
                )}
              </div>
              <form onSubmit={send} className="border-t border-[#EAEAEA] p-3 flex gap-2 bg-white">
                <input
                  data-testid="chat-input"
                  value={input} onChange={(e) => setInput(e.target.value)}
                  placeholder="Escreva sua dúvida..."
                  className="flex-1 border border-[#EAEAEA] px-3 py-2 text-[13.5px] outline-none focus:border-[#D4AF37]"
                />
                <button data-testid="chat-send" type="submit" disabled={loading} className="bg-[#D4AF37] hover:bg-[#E6C96A] text-[#0A2A57] px-3 flex items-center justify-center disabled:opacity-50">
                  <Send size={16} strokeWidth={1.8} />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 border border-[#25D366] flex items-center justify-center mb-5">
                <Phone className="text-[#25D366]" size={24} strokeWidth={1.6} />
              </div>
              <div className="font-serif text-xl text-[#0A2A57] mb-2">Fale no WhatsApp</div>
              <p className="text-sm text-[#555] mb-6 leading-relaxed">Atendimento direto com um consultor em horário comercial.</p>
              <a data-testid="chat-wa-link" href={waLink} target="_blank" rel="noreferrer" className="btn-gold">
                Abrir WhatsApp
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
