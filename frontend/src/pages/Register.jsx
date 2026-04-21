import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState({ name: "", email: "", password: "", company: "" });
  const [loading, setLoading] = useState(false);
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (f.password.length < 6) { toast.error("Senha mínima 6 caracteres"); return; }
    setLoading(true);
    try {
      await register(f);
      toast.success("Conta criada");
      nav("/");
    } catch (e) { toast.error(e.response?.data?.detail || "Erro ao registrar"); }
    finally { setLoading(false); }
  };

  return (
    <div data-testid="register-page" className="min-h-[calc(100vh-72px)] grid lg:grid-cols-2">
      <div className="bg-[#0A2A57] text-white p-12 lg:p-20 flex flex-col justify-center noise">
        <div className="eyebrow text-[#E6C96A] mb-4">Cadastro</div>
        <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">Crie sua conta profissional.</h1>
      </div>
      <div className="p-12 lg:p-20 flex flex-col justify-center">
        <form onSubmit={submit} data-testid="register-form" className="max-w-sm w-full mx-auto space-y-6">
          <h2 className="font-serif text-2xl text-[#0A2A57]">Registrar</h2>
          <input data-testid="reg-name" className="input-line" placeholder="Nome" value={f.name} onChange={upd("name")} required/>
          <input data-testid="reg-email" type="email" className="input-line" placeholder="E-mail" value={f.email} onChange={upd("email")} required/>
          <input data-testid="reg-company" className="input-line" placeholder="Empresa" value={f.company} onChange={upd("company")}/>
          <input data-testid="reg-password" type="password" className="input-line" placeholder="Senha (mín. 6)" value={f.password} onChange={upd("password")} required/>
          <button data-testid="reg-submit" disabled={loading} className="btn-gold w-full justify-center">{loading ? "Criando..." : "Criar conta"}</button>
          <div className="text-sm text-[#555]">Já tem conta? <Link to="/login" className="link-gold">Entrar</Link></div>
        </form>
      </div>
    </div>
  );
}
