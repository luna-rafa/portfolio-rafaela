import { Link } from "react-router-dom";
import fotoRafaela from "../assets/rafaela.jpg";

export default function Home() {
  const areas = [
    {
      titulo: "Infraestrutura & Cloud",
      texto:
        "Administração de ambientes Windows Server, Active Directory, redes, VPNs e Microsoft Azure.",
    },
    {
      titulo: "Suporte Técnico",
      texto:
        "Atuação com Service Desk, Help Desk, resolução de incidentes e suporte a usuários corporativos.",
    },
    {
      titulo: "Desenvolvimento & Automação",
      texto:
        "Vivência com Linux, Docker, Git/GitHub, Python, Node.js, PHP e MySQL.",
    },
  ];

  const tecnologias = [
    "Microsoft Azure",
    "Windows Server",
    "Active Directory",
    "Linux",
    "Docker",
    "Python",
    "Git/GitHub",
    "Service Desk",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#155e75,transparent_25%),radial-gradient(circle_at_top_right,#2563eb,transparent_28%),radial-gradient(circle_at_bottom_right,#7e22ce,transparent_34%),linear-gradient(to_bottom,#020617,#0f172a,#172554)]" />

      <div className="fixed left-10 top-24 -z-10 h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="fixed bottom-20 right-10 -z-10 h-80 w-80 animate-pulse rounded-full bg-violet-500/10 blur-3xl" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <a
            href="#inicio"
            className="text-center text-lg font-black text-cyan-300 md:text-left"
          >
            Rafaela Rodrigues
          </a>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a
              href="#atuacao"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              Atuação
            </a>

            <a
              href="#tecnologias"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              Tecnologias
            </a>

            <a
              href="#projetos"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="mx-auto max-w-7xl px-6 pt-4 pb-10"
      >
        <div className="animate-fadeInUp grid items-center gap-12 rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:grid-cols-[1.1fr_0.9fr] md:p-8">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Disponível para trabalhar
              </span>
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Tecnologia • Infraestrutura • Nuvem
            </p>

            <h1
              className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Rafaela Rodrigues
            </h1>

            <p className="mt-5 text-2xl font-medium text-cyan-300">
              Analista de Suporte e Infraestrutura
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Profissional Autista
            </p>

            <p className="mt-10 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Profissional de Tecnologia com experiência em suporte técnico,
              infraestrutura e operações corporativas, atuando com Microsoft
              Azure, Windows Server, Active Directory e ambientes modernos de
              Service Desk.

              <br />
              <br />

              Em constante aperfeiçoamento em Inteligência Artificial,
              automação e tecnologias voltadas para eficiência operacional,
              suporte estratégico e transformação digital.
            </p>

            {/* CARDS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["10+", "anos em atendimento"],
                ["5+", "anos em tecnologia"],
                ["N1/N3", "suporte técnico"],
              ].map(([numero, texto]) => (
                <div
                  key={texto}
                  className="rounded-2xl border border-cyan-400/20 bg-slate-950/40 p-5 shadow-lg shadow-cyan-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/20"
                >
                  <p className="text-3xl font-black tracking-tight text-cyan-300 md:text-5xl">
                    {numero}
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    {texto}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTÕES */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/curriculo"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Currículo
              </Link>

              <Link
                to="/carta-apresentacao"
                className="rounded-xl border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
              >
                Carta de Apresentação
              </Link>

              <a
                href="https://www.linkedin.com/in/rafaelarodrigues-it-support"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="flex items-start justify-center md:-mt-10">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-cyan-400/20 blur-3xl" />

              <img
                src={fotoRafaela}
                alt="Foto de Rafaela Rodrigues"
                className="relative h-[260px] w-[260px] rounded-full border border-cyan-300/80 object-cover object-top brightness-95 contrast-105 shadow-[0_0_80px_rgba(34,211,238,0.25)] transition duration-500 hover:scale-[1.02] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Atuação
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
          Como posso contribuir
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.titulo}
              className="rounded-3xl border border-cyan-400/10 bg-white/[0.08] p-7 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-bold text-cyan-300">
                {area.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-200">
                {area.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section
        id="tecnologias"
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Tecnologias
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
          Principais competências técnicas
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Contato
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            Vamos conversar sobre tecnologia?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Disponível para oportunidades em suporte técnico,
            infraestrutura, Service Desk, Help Desk, cloud e operações de TI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

  <a
    href="https://wa.me/5527998540485"
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    WhatsApp
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=raahr91@gmail.com&su=Contato%20via%20Portf%C3%B3lio"
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border border-cyan-400 px-6 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    E-mail
  </a>

</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl border-t border-white/10 px-6 py-10 text-center">
        <p className="font-semibold text-cyan-300">
          Rafaela Rodrigues © 2026
        </p>

        <p className="mt-2 text-sm text-slate-400">
          Built with React + TailwindCSS • Infrastructure • Cloud • Support
        </p>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </main>
  );
}