import React, { useEffect, useState } from "react";
import { Lock, Unlock, Download, X } from "lucide-react";
import { toast } from "sonner";
import { api } from "../lib/api";

export default function Resources() {
  const [items, setItems] = useState([]);
  const [gate, setGate] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => { api.get("/resources").then((r) => setItems(r.data)); }, []);

  const openGate = (r) => {
    if (!r.gated) { window.open("#", "_blank"); return; }
    setGate(r); setForm({ name: "", email: "", company: "", phone: "" });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) { toast.error("Preencha nome, e-mail e empresa."); return; }
    setLoading(true);
    try {
      const r = await api.post(`/resources/${gate.id}/access`, { ...form, source: "resource_gate" });
      toast.success("Acesso liberado. Obrigado!");
      window.open(r.data.file_url, "_blank");
      setGate(null);
    } catch {
      toast.error("Erro ao processar.");
    } finally { setLoading(false); }
  };

  return (
    <div data-testid="resources-page">
      <section className="bg-[#0A2A57] text-white py-20 noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-4">Base de Conteúdo</div>
          <h1 className="font-serif text-4xl lg:text-6xl max-w-3xl leading-[1.08]">Apoio técnico aplicável ao dia a dia.</h1>
          <p className="mt-6 text-white/75 max-w-2xl">Tabelas, checklists e materiais para consulta. Parte aberta. Parte reservada para profissionais cadastrados.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((r) => (
              <div key={r.id} data-testid={`res-${r.id}`} className="premium-card p-7 flex flex-col">
                <div className="flex items-center gap-2 eyebrow mb-4">
                  {r.gated ? <Lock size={13} className="text-[#A67C00]"/> : <Unlock size={13} className="text-[#1B6FC4]"/>}
                  {r.category}
                </div>
                <h3 className="font-serif text-xl text-[#0A2A57] leading-snug mb-2">{r.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed flex-1">{r.description}</p>
                <button onClick={() => openGate(r)} data-testid={`res-btn-${r.id}`} className={`mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] ${r.gated ? "text-[#A67C00] hover:text-[#D4AF37]" : "text-[#0A2A57]"}`}>
                  <Download size={14} strokeWidth={1.5}/>
                  {r.gated ? "Acessar (cadastro rápido)" : "Baixar gratuitamente"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {gate && (
        <div data-testid="resource-gate" className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 relative border border-[#D4AF37]/40">
            <button onClick={() => setGate(null)} className="absolute top-4 right-4 text-[#B0B0B0] hover:text-[#0A2A57]"><X size={20}/></button>
            <div className="eyebrow mb-2">Acesso ao material</div>
            <h3 className="font-serif text-xl text-[#0A2A57] leading-snug mb-4">{gate.title}</h3>
            <p className="text-sm text-[#555] mb-6">Preencha os dados profissionais para liberar o download.</p>
            <form onSubmit={submit} className="space-y-4">
              <input className="input-line" placeholder="Nome" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required data-testid="gate-name"/>
              <input className="input-line" type="email" placeholder="E-mail corporativo" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required data-testid="gate-email"/>
              <input className="input-line" placeholder="Empresa" value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} required data-testid="gate-company"/>
              <input className="input-line" placeholder="Telefone (opcional)" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} data-testid="gate-phone"/>
              <button type="submit" disabled={loading} data-testid="gate-submit" className="btn-gold w-full justify-center mt-3">{loading ? "Liberando..." : "Liberar download"}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
