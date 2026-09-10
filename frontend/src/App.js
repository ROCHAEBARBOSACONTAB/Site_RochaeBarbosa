import React, { lazy, Suspense } from "react";
import "@/index.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";

import Home from "./pages/Home";
// Blog e planos permanecem preservados para uma reativacao futura.
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
// import Plans from "./pages/Plans";

const Services = lazy(() => import("./pages/Services"));
const BusinessRegistration = lazy(() => import("./pages/services/BusinessRegistration"));
const AccountingManagement = lazy(() => import("./pages/services/AccountingManagement"));
const ErpCompliance = lazy(() => import("./pages/services/ErpCompliance"));
const ImplementationProtheus = lazy(() => import("./pages/services/ImplementationProtheus"));
const TaxCreditRecovery = lazy(() => import("./pages/services/TaxCreditRecovery"));
const ComplianceMonitoring = lazy(() => import("./pages/services/ComplianceMonitoring"));
const OperationalRegularization = lazy(() => import("./pages/services/OperationalRegularization"));
const TechnicalServicePage = lazy(() => import("./pages/services/TechnicalServicePage"));
const Diagnostic = lazy(() => import("./pages/Diagnostic"));
const Resources = lazy(() => import("./pages/Resources"));
const SimplesHub = lazy(() => import("./pages/resources/simples/SimplesHub"));
const Anexo1 = lazy(() => import("./pages/resources/simples/Anexo1"));
const Anexo2 = lazy(() => import("./pages/resources/simples/Anexo2"));
const Anexo3 = lazy(() => import("./pages/resources/simples/Anexo3"));
const Anexo4 = lazy(() => import("./pages/resources/simples/Anexo4"));
const Anexo5 = lazy(() => import("./pages/resources/simples/Anexo5"));
const ICMS = lazy(() => import("./pages/resources/tabelas/ICMS"));
const IPI = lazy(() => import("./pages/resources/tabelas/IPI"));
const PIS_COFINS = lazy(() => import("./pages/resources/tabelas/PIS_COFINS"));
const CClassTrib = lazy(() => import("./pages/resources/tabelas/CClassTrib"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const TabelasHub = lazy(() => import("./pages/resources/tabelas/TabelasHub"));
const CfopBrowser = lazy(() => import("./pages/resources/cfop/CfopBrowser"));
const MapaStHub = lazy(() => import("./pages/resources/mapa-st/MapaStHub"));
const MapaStSaoPaulo = lazy(() => import("./pages/resources/mapa-st/MapaSt"));
const MapaStRioGrandeDoSul = lazy(() => import("./pages/resources/mapa-st/MapaStRioGrandeDoSul"));
const MapaStMinasGerais = lazy(() => import("./pages/resources/mapa-st/MapaStMinasGerais"));
const MapaStSantaCatarina = lazy(() => import("./pages/resources/mapa-st/MapaStSantaCatarina"));
const MapaStParana = lazy(() => import("./pages/resources/mapa-st/MapaStParana"));
const MapaStMatoGrossoDoSul = lazy(() => import("./pages/resources/mapa-st/MapaStMatoGrossoDoSul"));

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-[80px] lg:pt-[96px] min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-96px)] bg-white">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SEO />
        <Analytics />
        <CookieConsent />
        <ScrollToTop />
        <Toaster position="top-right" richColors />
        <Layout>
          <Suspense fallback={null}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/abertura-de-empresa" element={<BusinessRegistration />} />
            <Route path="/servicos/contabilidade-e-gestao-fiscal" element={<AccountingManagement />} />
            <Route path="/servicos/consultoria-totvs-protheus" element={<ErpCompliance />} />
            <Route path="/servicos/implantacao-totvs-protheus" element={<ImplementationProtheus />} />
            <Route path="/servicos/recuperacao-de-creditos-tributarios" element={<TaxCreditRecovery />} />
            <Route path="/servicos/monitoramento-compliance-fiscal" element={<ComplianceMonitoring />} />
            <Route path="/servicos/licencas-e-regularizacao-operacional" element={<OperationalRegularization />} />
            <Route path="/servicos/:slug" element={<TechnicalServicePage />} />
            <Route path="/diagnostico" element={<Diagnostic />} />
            {/* Rotas temporariamente desativadas. Manter os arquivos para reativacao futura. */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
            <Route path="/recursos" element={<Resources />} />
            <Route path="/recursos/cfop" element={<CfopBrowser />} />
            <Route path="/recursos/cfop/:code" element={<CfopBrowser />} />
            <Route path="/recursos/mapa-st" element={<MapaStHub />} />
            <Route path="/recursos/mapa-st/sao-paulo" element={<MapaStSaoPaulo />} />
            <Route path="/recursos/mapa-st/rio-grande-do-sul" element={<MapaStRioGrandeDoSul />} />
            <Route path="/recursos/mapa-st/minas-gerais" element={<MapaStMinasGerais />} />
            <Route path="/recursos/mapa-st/santa-catarina" element={<MapaStSantaCatarina />} />
            <Route path="/recursos/mapa-st/parana" element={<MapaStParana />} />
            <Route path="/recursos/mapa-st/mato-grosso-do-sul" element={<MapaStMatoGrossoDoSul />} />
            <Route path="/recursos/simples-nacional" element={<SimplesHub />} />
            <Route path="/recursos/simples-nacional/anexo-1" element={<Navigate replace to="/recursos/simples-nacional/anexo-1/2026" />} />
            <Route path="/recursos/simples-nacional/anexo-1/:vigencia" element={<Anexo1 />} />
            <Route path="/recursos/simples-nacional/anexo-2" element={<Navigate replace to="/recursos/simples-nacional/anexo-2/2026" />} />
            <Route path="/recursos/simples-nacional/anexo-2/:vigencia" element={<Anexo2 />} />
            <Route path="/recursos/simples-nacional/anexo-3" element={<Navigate replace to="/recursos/simples-nacional/anexo-3/2026" />} />
            <Route path="/recursos/simples-nacional/anexo-3/:vigencia" element={<Anexo3 />} />
            <Route path="/recursos/simples-nacional/anexo-4" element={<Navigate replace to="/recursos/simples-nacional/anexo-4/2026" />} />
            <Route path="/recursos/simples-nacional/anexo-4/:vigencia" element={<Anexo4 />} />
            <Route path="/recursos/simples-nacional/anexo-5" element={<Navigate replace to="/recursos/simples-nacional/anexo-5/2026" />} />
            <Route path="/recursos/simples-nacional/anexo-5/:vigencia" element={<Anexo5 />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/politica-de-cookies" element={<CookiePolicy />} />
            {/* <Route path="/planos" element={<Plans />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/recursos/tabelas" element={<TabelasHub />} />
            <Route path="/recursos/tabelas/icms" element={<ICMS />} />
            <Route path="/recursos/tabelas/ipi" element={<IPI />} />
            <Route path="/recursos/tabelas/pis-cofins" element={<PIS_COFINS />} />
            <Route path="/recursos/tabelas/cclass-trib" element={<CClassTrib />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
