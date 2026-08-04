import { Link } from "react-router-dom";

const sections = [
  {
    title: "O que são cookies",
    text: "Cookies são pequenos arquivos ou tecnologias semelhantes que ajudam um site a funcionar, lembrar escolhas e compreender como as páginas são utilizadas.",
  },
  {
    title: "Cookies essenciais",
    text: "Utilizamos armazenamento local para registrar sua escolha de cookies. Essa informação evita que a mesma pergunta seja exibida a cada visita.",
  },
  {
    title: "Cookies de medição",
    text: "Com sua autorização, utilizamos o Google Analytics 4 para analisar páginas acessadas, origem de tráfego, interações com canais de contato e conversões. Esses dados orientam melhorias no site e no atendimento.",
  },
  {
    title: "Seus controles",
    text: "Você pode aceitar, recusar ou alterar a qualquer momento sua preferência de cookies de medição. A opção está disponível no rodapé do site em “Preferências de cookies”.",
  },
  {
    title: "Contato",
    text: "Para dúvidas sobre esta política ou sobre o tratamento de dados, entre em contato pelo e-mail contabilidade@rochaebarbosa.com.br.",
  },
];

export default function CookiePolicy() {
  return (
    <div className="bg-[#F7F5EF]">
      <section className="border-b border-[#D4AF37]/25 bg-[#071E40] text-white">
        <div className="mx-auto max-w-[960px] px-6 pb-12 pt-10 lg:px-12 lg:pb-16 lg:pt-14">
          <div className="eyebrow text-[#E6C96A]">Privacidade</div>
          <h1 className="mt-4 max-w-[720px] font-serif text-[40px] leading-[1.06] sm:text-[52px]">
            Política de Cookies
          </h1>
          <p className="mt-5 max-w-[690px] text-[16px] leading-relaxed text-white/80">
            Transparência sobre as tecnologias de medição utilizadas no site da Rocha & Barbosa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[960px] px-6 py-12 lg:px-12 lg:py-16">
        <p className="max-w-[760px] text-[16px] leading-7 text-[#465775]">
          Esta política descreve como utilizamos cookies e tecnologias semelhantes no site rochaebarbosa.com.br. Atualizada em agosto de 2026.
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="border border-[#E3DED2] bg-white p-6 lg:p-7">
              <h2 className="font-serif text-[28px] leading-tight text-[#0A2A57]">{section.title}</h2>
              <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-[#53627B]">{section.text}</p>
            </article>
          ))}
        </div>

        <Link to="/" className="mt-10 inline-flex text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0A2A57] transition hover:text-[#B48600]">
          Voltar para o início
        </Link>
      </section>
    </div>
  );
}
