import { Link } from "react-router-dom";
import fotoRafaela from "../assets/rafaela.jpg";

export default function Curriculo() {
  const experiencias = [
    {
      cargo: "Analista de Helpdesk N3",
      empresa: "Ideal Suporte Soluções de TI e Segurança Eletrônica",
      periodo: "Out/2025 — Jun/2026",
      pontos: [
        "Administração de ambientes Windows Server e Active Directory.",
        "Suporte N3 e resolução estratégica de incidentes críticos.",
        "Atuação com Microsoft Azure, VPNs, servidores e políticas de segurança.",
      ],
    },
    {
      cargo: "Technical Support Analyst 1",
      empresa: "Ayko Technology",
      periodo: "Nov/2024 — Jun/2025",
      pontos: [
        "Atuação em Service Desk em ambiente corporativo.",
        "Diagnóstico e resolução de incidentes em hardware e software.",
        "Apoio técnico a usuários e equipes multidisciplinares.",
      ],
    },
    {
      cargo: "Especialista em Suporte de TI",
      empresa: "Case Tecnologia",
      periodo: "Jul/2024 — Out/2024",
      pontos: [
        "Suporte técnico especializado com foco em atendimento ao cliente.",
        "Utilização da plataforma SZ.Chat da Fortics.",
        "Otimização de processos operacionais de suporte.",
      ],
    },
    {
      cargo: "Suporte Técnico N1",
      empresa: "Loga®",
      periodo: "Dez/2021 — Jul/2024",
      pontos: [
        "Suporte técnico e financeiro em telecomunicações.",
        "Configuração de ONU FiberHome e Huawei.",
        "Atuação com sistemas UNM2000 e U2000.",
      ],
    },
    {
      cargo: "Estagiária em Desenvolvimento",
      empresa: "MadeiraMadeira",
      periodo: "Jun/2022 — Fev/2024",
      pontos: [
        "Desenvolvimento em ambiente Linux.",
        "Vivência com Docker, Node.js, JavaScript, PHP e Python.",
        "Versionamento com Git e manipulação de bases MySQL.",
      ],
    },
    {
      cargo: "Auxiliar Administrativa",
      empresa: "Xcomm Importadora e Ecommerce",
      periodo: "Out/2021 — Mar/2022",
      pontos: [
        "Gestão de operações em marketplace.",
        "Apoio à logística de entregas e rotinas administrativas.",
        "Suporte a estratégias de marketing digital.",
      ],
    },
    {
      cargo: "Agente de Vendas",
      empresa: "Sollo Brasil",
      periodo: "Mai/2021 — Out/2021",
      pontos: [
        "Vendas B2B para clientes jurídicos do PicPay.",
        "Consultoria técnica e suporte na implementação de soluções.",
        "Relacionamento com clientes e orientação comercial.",
      ],
    },
    {
      cargo: "Analista de Crédito",
      empresa: "Facta — Instituição Financeira",
      periodo: "Jan/2019 — Abr/2021",
      pontos: [
        "Análise de crédito para clientes INSS.",
        "Avaliação de risco e elaboração de propostas financeiras.",
        "Atendimento consultivo e organização documental.",
      ],
    },
    {
      cargo: "Assistente de Varejo",
      empresa: "C&A Brasil",
      periodo: "Jun/2016 — Out/2018",
      pontos: [
        "Atendimento ao cliente e operações de caixa.",
        "Análise de crédito e vendas de cartão.",
        "Cumprimento de processos financeiros e operacionais.",
      ],
    },
    {
      cargo: "Suporte ao Cliente",
      empresa: "Grupo Algar",
      periodo: "Ago/2009 — Mar/2015",
      pontos: [
        "Atendimento por e-mail e chat.",
        "Suporte técnico e organização de plataformas.",
        "Orientação financeira para clientes Comgás e HSBC.",
      ],
    },
  ];

  const certificacoes = [
    { nome: "AI Literacy", instituicao: "IBM" },
    {
      nome: "System Administration and IT Infrastructure Services",
      instituicao: "Google",
    },
    {
      nome: "Fundamentos de Suporte Técnico",
      instituicao: "Google",
    },
    {
      nome: "Operating Systems and You: Becoming a Power User",
      instituicao: "Google",
    },
    {
      nome: "The Bits and Bytes of Computer Networking",
      instituicao: "Google",
    },
    {
      nome: "Technical Support Fundamentals",
      instituicao: "Google",
    },
    { nome: "Docker", instituicao: "Udemy" },
    { nome: "Linux", instituicao: "Udemy" },
    {
      nome: "Algoritmos e Lógica de Programação",
      instituicao: "Udemy",
    },
    { nome: "Java Completo", instituicao: "Udemy" },
  ];

  const stackCategorias = [
    {
      titulo: "Cloud & Infraestrutura",
      itens: [
        "Microsoft Azure",
        "Windows Server",
        "Active Directory",
        "VPN",
        "Redes",
        "Infraestrutura",
      ],
    },
    {
      titulo: "Suporte Técnico e Operações de TI",
      itens: [
        "Help Desk",
        "Service Desk",
        "Suporte N1/N2/N3",
        "Incidentes",
        "Atendimento Técnico",
      ],
    },
    {
      titulo: "Desenvolvimento",
      itens: ["Python", "Java", "Node.js", "PHP", "JavaScript", "MySQL"],
    },
    {
      titulo: "DevOps & Ferramentas",
      itens: ["Linux", "Docker", "Git/GitHub", "CLI", "Ambientes Híbridos"],
    },
  ];

  const diferenciais = [
    "Perfil analítico, organizado e orientado à resolução de problemas.",
    "Experiência com suporte técnico, infraestrutura e atendimento ao cliente.",
    "Comunicação clara com usuários, equipes técnicas e áreas de negócio.",
    "Aperfeiçoamento contínuo em Inteligência Artificial, automação e tecnologia.",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#155e75,transparent_25%),radial-gradient(circle_at_top_right,#2563eb,transparent_28%),radial-gradient(circle_at_bottom_right,#7e22ce,transparent_34%),linear-gradient(to_bottom,#0f172a,#1e293b,#172554)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5527998540485"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              WhatsApp
            </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=raahr91@gmail.com&su=Contato%20via%20Portf%C3%B3lio"
  target="_blank"
  rel="noreferrer"
  className="flex-1 rounded-2xl border border-cyan-400 px-6 py-4 text-center text-cyan-300 transition hover:bg-cyan-400/10"
>
  E-mail
</a>
          </div>

          <Link
            to="/"
            className="rounded-xl border border-cyan-400 px-5 py-2 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Voltar ao Portfólio
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-cyan-400/10 blur-3xl" />

              <img
                src={fotoRafaela}
                alt="Rafaela Rodrigues"
                className="relative h-[220px] w-[220px] rounded-full border border-cyan-300/70 object-cover object-top brightness-90 contrast-100 shadow-[0_0_50px_rgba(34,211,238,0.16)] transition duration-500 hover:scale-[1.02] sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Currículo Online
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Rafaela Rodrigues
            </h1>

            <p className="mt-5 text-2xl font-medium text-cyan-300">
              Analista de Suporte e Infraestrutura
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Profissional Autista
            </p>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Profissional de Tecnologia com experiência em suporte técnico,
              infraestrutura, cloud e operações corporativas de TI. Atuação com
              foco em resolução estratégica de incidentes, estabilidade
              operacional, automação e melhoria contínua.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5527998540485"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-2xl border border-cyan-400 px-6 py-4 text-center text-cyan-300 transition hover:bg-cyan-400/10"
              >
                WhatsApp
              </a>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=raahr91@gmail.com&su=Contato%20via%20Portf%C3%B3lio"
  target="_blank"
  rel="noreferrer"
  className="flex-1 rounded-2xl border border-cyan-400 px-6 py-4 text-center text-cyan-300 transition hover:bg-cyan-400/10"
>
  E-mail
</a>s
            </div>
          </div>
        </div>

        <section className="mt-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Trajetória
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Experiência Profissional
          </h2>

          <div className="mt-10 border-l border-cyan-400/30 pl-8">
            {experiencias.map((item) => (
              <article
                key={`${item.empresa}-${item.cargo}`}
                className="relative mb-10 rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-8 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <span className="absolute -left-[45px] top-8 h-5 w-5 rounded-full border-4 border-slate-900 bg-cyan-400 shadow-lg shadow-cyan-400/40" />

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {item.cargo}
                    </h3>

                    <p className="mt-1 text-cyan-300">{item.empresa}</p>
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                    {item.periodo}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {item.pontos.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex gap-3 text-sm leading-7 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />

                      <span>{ponto}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Competências
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Stack Técnica
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stackCategorias.map((categoria) => (
              <div
                key={categoria.titulo}
                className="rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-8 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <h3 className="text-2xl font-bold tracking-tight text-cyan-300">
                  {categoria.titulo}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {categoria.itens.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Aprendizado Contínuo
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Certificações
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certificacoes.map((cert) => (
              <div
                key={cert.nome}
                className="rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-7 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-bold text-white">
                  {cert.nome}
                </h3>

                <p className="mt-2 text-sm text-cyan-300">
                  {cert.instituicao}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Diferenciais
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Perfil Profissional
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {diferenciais.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-7 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <p className="text-sm leading-7 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 py-10 text-center">
          <p className="font-semibold text-cyan-300">
            Rafaela Rodrigues © 2026
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Tecnologia • Infraestrutura • Suporte • Cloud • IA
          </p>
        </footer>
      </section>
    </main>
  );
}