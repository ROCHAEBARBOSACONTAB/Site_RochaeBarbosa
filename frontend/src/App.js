import React from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Diagnostic from "./pages/Diagnostic";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import SimplesHub from "./pages/resources/simples/SimplesHub";
import Anexo1 from "./pages/resources/simples/Anexo1";
import Anexo2 from "./pages/resources/simples/Anexo2";
import Anexo3 from "./pages/resources/simples/Anexo3";
import Anexo4 from "./pages/resources/simples/Anexo4";
import Anexo5 from "./pages/resources/simples/Anexo5";
import ICMS from "./pages/resources/tabelas/ICMS";
import IPI from "./pages/resources/tabelas/IPI";
import PIS_COFINS from "./pages/resources/tabelas/PIS_COFINS";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-[72px] min-h-screen bg-white">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" richColors />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/diagnostico" element={<Diagnostic />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/recursos/simples-nacional" element={<SimplesHub />} />
            <Route path="/recursos/simples-nacional/anexo-1" element={<Anexo1 />} /> 
            <Route path="/recursos/simples-nacional/anexo-2" element={<Anexo2 />} />
            <Route path="/recursos/simples-nacional/anexo-3" element={<Anexo3 />} />
            <Route path="/recursos/simples-nacional/anexo-4" element={<Anexo4 />} />
            <Route path="/recursos/simples-nacional/anexo-5" element={<Anexo5 />} />
            <Route path="/recursos/tabelas/icms" element={<ICMS />} />
            <Route path="/recursos/tabelas/ipi" element={<IPI />} />
            <Route path="/recursos/tabelas/pis-cofins" element={<PIS_COFINS />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
