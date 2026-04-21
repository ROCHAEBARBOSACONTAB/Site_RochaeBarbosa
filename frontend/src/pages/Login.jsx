import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const u = await login(email, password);
      toast.success("Bem-vindo");
      nav(u.role === "admin" ? "/admin" : "/");
    } catch { toast.error("Credenciais inválidas"); }
    finally { setLoading(false); }
  };

  return (
    <div data-testid="login-page" className="min-h-[calc(100vh-72px)] grid lg:grid-cols-2">
      <div className="bg-[#0A2A57] text-white p-12 lg:p-20 flex flex-col justify-center noise">
        <div className="eyebrow text-[#E6C96A] mb-4">Área Restrita</div>
        <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">Acesse sua conta de cliente.</h1>
        <p className="mt-6 text-white/75 max-w-md">Visualize materiais reservados, acompanhe solicitações e baixe conteúdos exclusivos.</p>
      </div>
      <div className="p-12 lg:p-20 flex flex-col justify-center">
        <form onSubmit={submit} data-testid="login-form" className="max-w-sm w-full mx-auto space-y-6">
          <h2 className="font-serif text-2xl text-[#0A2A57]">Entrar</h2>
          <input data-testid="login-email" type="email" className="input-line" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <input data-testid="login-password" type="password" className="input-line" placeholder="Senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <button data-testid="login-submit" disabled={loading} className="btn-gold w-full justify-center">{loading ? "Entrando..." : "Entrar"}</button>
          <div className="text-sm text-[#555]">Não tem conta? <Link to="/registro" className="link-gold">Registre-se</Link></div>
        </form>
      </div>
    </div>
  );
}
