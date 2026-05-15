export default function Apresentacao() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      
      <div className="max-w-4xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Sobre Mim
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Rafaela Rodrigues
        </h1>

        <h2 className="text-cyan-300 text-xl mt-3">
          Tecnologia • Suporte Técnico • Infraestrutura
        </h2>

        <div className="mt-12 space-y-6 text-slate-300 leading-relaxed text-lg">

          <p>
            Sou profissional de Tecnologia da Informação com experiência em suporte técnico, infraestrutura, atendimento especializado e resolução de incidentes.
          </p>

          <p>
            Atuo com foco em suporte N1/N2, troubleshooting, suporte remoto, monitoramento e suporte ao usuário, sempre buscando unir eficiência técnica com comunicação humanizada.
          </p>

          <p>
            Tenho perfil analítico, facilidade em identificar padrões, atenção a detalhes e forte comprometimento com resolução de problemas e melhoria contínua.
          </p>

          <p>
            Também sou uma profissional neurodivergente (TEA nível 1 e TDAH), transformando características como hiperfoco, persistência e pensamento lógico em diferenciais importantes para minha atuação na tecnologia.
          </p>

          <p>
            Sigo em constante evolução profissional, aprofundando conhecimentos em infraestrutura, cloud, suporte corporativo e tecnologia.
          </p>

          <p>
            Atualmente também estou aprofundando meus estudos em Inteligência Artificial por meio de cursos e formações da IBM, ampliando conhecimentos em tecnologia, inovação e soluções baseadas em IA aplicadas ao mercado.
           </p>

        </div>

        <div className="flex flex-wrap gap-4 mt-12">

          <a
            href="/"
            className="border border-cyan-500 text-cyan-400 px-5 py-3 rounded-2xl hover:bg-cyan-500/10 transition"
          >
            Voltar ao Portfólio
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-2xl font-semibold hover:bg-cyan-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  )
}
