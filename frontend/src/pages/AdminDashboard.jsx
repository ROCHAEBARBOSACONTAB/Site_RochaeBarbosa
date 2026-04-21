import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import { Users, FileText, Mail, Newspaper } from "lucide-react";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [stats, setStats] = useState(null);
  const [leads, setLeads] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [tab, setTab] = useState("leads");

  useEffect(() => {
    if (!user || user.role !== "admin") return;
    Promise.all([
      api.get("/admin/stats"),
      api.get("/admin/leads"),
      api.get("/admin/contacts"),
    ]).then(([s, l, c]) => { setStats(s.data); setLeads(l.data); setContacts(c.data); }).catch(()=>{});
  }, [user]);

  if (loading) return <div className="py-32 text-center text-[#B0B0B0]">Carregando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return (
    <div data-testid="admin-page" className="bg-[#F7F8FB] min-h-[calc(100vh-72px)]">
      <section className="bg-[#0A2A57] text-white py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-3">Painel Administrativo</div>
          <h1 className="font-serif text-3xl lg:text-4xl">Dashboard · Leads & Solicitações</h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats && [
            { i: FileText, l: "Leads", v: stats.leads, c: "#D4AF37" },
            { i: Mail, l: "Contatos", v: stats.contacts, c: "#1B6FC4" },
            { i: Users, l: "Usuários", v: stats.users, c: "#0A2A57" },
            { i: Newspaper, l: "Posts", v: stats.posts, c: "#A67C00" },
          ].map((s, i) => (
            <div key={i} data-testid={`stat-${s.l.toLowerCase()}`} className="bg-white border border-[#EAEAEA] p-6">
              <div className="flex items-center gap-2 eyebrow mb-3" style={{color: s.c}}><s.i size={14} strokeWidth={1.5}/> {s.l}</div>
              <div className="font-serif text-4xl text-[#0A2A57]">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 border-b border-[#EAEAEA]">
          {["leads","contacts"].map((t) => (
            <button key={t} data-testid={`admin-tab-${t}`} onClick={()=>setTab(t)} className={`px-5 py-3 text-[12px] uppercase tracking-[0.2em] ${tab===t ? "text-[#0A2A57] border-b-2 border-[#D4AF37]" : "text-[#999]"}`}>
              {t === "leads" ? "Leads / Diagnósticos" : "Contatos"}
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#EAEAEA] overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F2F2F2] text-[#0A2A57]">
              <tr>
                <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">Nome</th>
                <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">E-mail</th>
                <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">Empresa</th>
                {tab==="leads" && <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">Origem</th>}
                {tab==="contacts" && <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">Assunto</th>}
                <th className="text-left p-4 font-medium uppercase text-[11px] tracking-[0.15em]">Data</th>
              </tr>
            </thead>
            <tbody>
              {(tab==="leads" ? leads : contacts).map((r) => (
                <tr key={r.id} className="border-t border-[#EAEAEA] hover:bg-[#FAFAFA]">
                  <td className="p-4 text-[#0A2A57]">{r.name}</td>
                  <td className="p-4 text-[#333]">{r.email}</td>
                  <td className="p-4 text-[#333]">{r.company || "—"}</td>
                  {tab==="leads" && <td className="p-4 text-[#666]">{r.source}</td>}
                  {tab==="contacts" && <td className="p-4 text-[#666]">{r.subject || "—"}</td>}
                  <td className="p-4 text-[#888] text-xs">{new Date(r.created_at).toLocaleString("pt-BR")}</td>
                </tr>
              ))}
              {(tab==="leads" ? leads : contacts).length === 0 && (
                <tr><td colSpan="5" className="p-10 text-center text-[#B0B0B0]">Nenhum registro.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
