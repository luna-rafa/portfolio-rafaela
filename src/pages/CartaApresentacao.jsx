import { Link } from "react-router-dom";
import fotoRafaela from "../assets/rafaela.jpg";

export default function CartaApresentacao() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#155e75,transparent_25%),radial-gradient(circle_at_top_right,#2563eb,transparent_28%),radial-gradient(circle_at_bottom_right,#7e22ce,transparent_34%),linear-gradient(to_bottom,#020617,#0f172a,#172554)]" />

      <div className="fixed left-10 top-24 -z-10 h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="fixed bottom-20 right-10 -z-10 h-80 w-80 animate-pulse rounded-full bg-violet-500/10 blur-3xl" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          
          <Link
            to="/"
            className="text-center text-lg font-black text-cyan-300 md:text-left"
          >
            Rafaela Rodrigues
          </Link>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-xl border border-cyan-400/40 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Portfólio
            </Link>

            <Link
              to="/curriculo"
              className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Currículo
            </Link>
          </div>
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
              Carta de Apresentação
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Rafaela Rodrigues
            </h1>

            <p className="mt-5 text-2xl font-medium text-cyan-300">
              Tecnologia • Suporte • Infraestrutura • Cloud
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Profissional Autista
            </p>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Uma apresentação profissional sobre minha trajetória, meu perfil
              técnico e minha forma de atuar em tecnologia, suporte,
              infraestrutura e evolução contínua.
            </p>
          </div>
        </div>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Apresentação
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Quem sou eu profissionalmente
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              Sou Rafaela Rodrigues, profissional da área de Tecnologia com
              experiência em suporte técnico, infraestrutura e operações
              corporativas, atuando em ambientes de Service Desk, Microsoft
              Azure, Windows Server, Active Directory e suporte especializado a
              usuários.
            </p>

            <p>
              Minha trajetória une conhecimento técnico, capacidade analítica e
              experiência em atendimento, permitindo atuar na resolução
              estratégica de incidentes com comunicação clara, organização e
              foco em estabilidade operacional.
            </p>

            <p>
              Tenho vivência prática com Linux, Docker, Git/GitHub, automação e
              desenvolvimento back-end, conectando suporte, infraestrutura e
              melhoria contínua para fortalecer operações e otimizar processos.
            </p>

            <p>
              Atualmente, sigo em aperfeiçoamento em Inteligência Artificial,
              automação e tecnologias voltadas para produtividade, suporte
              técnico, transformação digital e inovação aplicada à tecnologia.
            </p>

            <p>
              Como profissional autista, desenvolvi uma forma de atuação
              analítica, detalhista e orientada à resolução de problemas,
              características que fortalecem minha contribuição em ambientes
              tecnológicos.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: "Perfil Técnico",
              texto:
                "Experiência com suporte técnico, infraestrutura, Service Desk, Microsoft Azure, Windows Server e Active Directory.",
            },
            {
              titulo: "Visão Analítica",
              texto:
                "Atuação orientada à resolução estratégica de incidentes, organização operacional e estabilidade de ambientes.",
            },
            {
              titulo: "Evolução Contínua",
              texto:
                "Aperfeiçoamento em Inteligência Artificial, automação, produtividade e transformação digital.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-7 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-bold text-cyan-300">
                {item.titulo}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.texto}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Próximo passo
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-black tracking-tight text-white md:text-4xl">
            Tecnologia com propósito, organização e evolução contínua.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Busco oportunidades onde eu possa contribuir com qualidade técnica,
            colaboração, inovação e soluções que gerem impacto positivo para
            pessoas, processos e operações.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            
            <a
              href="https://wa.me/5527998540485"
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-2xl border border-cyan-400 px-6 py-4 text-center text-cyan-300 transition hover:bg-cyan-400/10 sm:flex-none"
            >
              WhatsApp
            </a>

            <a
              href="mailto:raahr91@gmail.com?subject=Contato%20via%20Portfólio"
              className="flex-1 rounded-2xl border border-cyan-400 px-6 py-4 text-center text-cyan-300 transition hover:bg-cyan-400/10 sm:flex-none"
            >
              E-mail
            </a>

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