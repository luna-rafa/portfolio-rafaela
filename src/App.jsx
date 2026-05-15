export default function PortfolioRafaela() {
  const skills = {
    suporte: [
      'Help Desk',
      'Service Desk',
      'Suporte N1/N2',
      'Suporte Remoto',
      'Gestão de Chamados'.
      'Troubleshooting',
      'Resolução de Incidentes',
      'Monitoramento Proativo',
      'Documentação Técnica',
      'Instalação e Configuração de Software'
    ],
    infraestrutura: [
      'Microsoft Azure',
      'Windows Server',
      'Active Directory',
      'Ambientes Híbridos',
      'VPN',
      'Firewalls',
      'Redes Corporativas',
      'Políticas de Segurança',
      'Microsoft 365',
      'Configuração de Redes',
      'Segurança da Informação'
      'Automação',
    ],
    desenvolvimento: [
      'Python',
      'Java',
      'Node.js',
      'PHP',
      'JavaScript',
      'MySQL',
      'Docker',
      'Linux',
      'Git/GitHub'
    ]
  }

  const strengths = [
    'Atenção elevada aos detalhes',
    'Pensamento analítico e sistemático',
    'Identificação de padrões',
    'Persistência na resolução de problemas',
    'Organização técnica',
    'Comunicação clara e empática',
    'Comprometimento com qualidade',
    'Facilidade de aprendizado'
  ]

  const experiences = [
    {
      company: 'Ideal Suporte',
      role: 'Analista de Suporte de Helpdesk',
      period: '2025 - Atual',
      details: [
        'Administração de Windows Server e Active Directory',
        'Monitoramento preventivo da infraestrutura',
        'Configuração de VPNs e políticas de segurança',
        'Suporte técnico e resolução de incidentes'
      ]
    },
    {
      company: 'Ayko Technology',
      role: 'Analista de Suporte de Service Desk',
      period: '2024 - 2025',
      details: [
        'Troubleshooting de hardware e software',
        'Atendimento Service Desk',
        'Diagnóstico de infraestrutura'
      ]
    },
    {
      company: 'MadeiraMadeira',
      role: 'Estagiária em Tecnologia',
      period: '2022 - 2024',
      details: [
        'Node.js, PHP, Python e Docker',
        'Linux e MySQL',
        'Git e GitHub'
      ]
    },
    {
      company: 'Loga',
      role: 'Analista de Suporte Técnico',
      period: '2021 - 2024',
      details: [
        'Configurações de equipamentos ONU FiberHome e Huawei via sistemas UNM2000 e U2000',
        'Atendimento Service Desk especializado em telecomunicações',
        'Atendimento financeiro'
      ]
    },  {
      company: 'Algar Tecnologia',
      role: 'Suporte ao Cliente',
      period: '2009 - 2015',
      details: [
        'Atendimento ao cliente (telefonia, chat, e-mail)',
        'Organização da plataforma (Comgás)',
        'Cobranças à pessoas juridicas (HSBC)',
        "Orientação Financeira'
      ]
    },
  ]

  const cases = [
    {
      title: 'Criação de Usuário no Active Directory',
      problem: 'Necessidade de criar usuário corporativo com acessos adequados.',
      solution: 'Criação de conta no Active Directory, inclusão em grupos e configuração de permissões.',
      result: 'Usuário habilitado para acesso seguro aos recursos internos.'
    },
    {
      title: 'Liberação de Acesso',
      problem: 'Usuário sem acesso a sistemas e recursos necessários.',
      solution: 'Validação de permissões e inclusão em grupos corretos.',
      result: 'Acesso liberado com sucesso.'
    },
    {
      title: 'Limpeza Interna de Computadores',
      problem: 'Equipamentos apresentavam aquecimento e excesso de poeira.',
      solution: 'Limpeza preventiva e verificação de componentes.',
      result: 'Melhoria de desempenho e ventilação.'
    },
    {
      title: 'Impressora em Acesso Remoto',
      problem: 'Impressora não aparecia em acesso remoto.',
      solution: 'Reconfiguração do redirecionamento da sessão remota.',
      result: 'Impressão funcionando normalmente.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <style>{`
        @keyframes floatTech {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 20px rgba(34,211,238,0.3); }
          50% { box-shadow: 0 0 50px rgba(34,211,238,0.7); }
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 60px 60px; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .float-tech {
          animation: floatTech 5s ease-in-out infinite;
        }

        .glow-photo {
          animation: glowPulse 4s ease-in-out infinite;
        }

        .tech-grid {
          background-image:
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 18s linear infinite;
        }

        .cursor {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="absolute inset-0 tech-grid opacity-40"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl float-tech"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl float-tech"></div>

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-4 tracking-wide uppercase">
              Portfólio Profissional
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Rafaela Rodrigues
            </h1>

            <h2 className="text-2xl text-slate-300 mb-6">
              Analista de Suporte Pleno | Infraestrutura • Cloud
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Profissional de Tecnologia da Informação com sólida experiência em suporte técnico, atendimento especializado e resolução de incidentes, atuando com foco em análise de problemas, suporte ao usuário e continuidade dos serviços de TI.,
              infraestrutura, Microsoft Azure, Windows Server e Active Directory. Estudante de Inteligência Artificial.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Como profissional autista, transformo atenção aos detalhes,
              pensamento analítico e identificação de padrões em diferenciais
              para resolução eficiente de problemas técnicos.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-5">
                <p className="text-3xl font-bold text-cyan-400">+4</p>
                <p className="text-slate-400 text-sm mt-1">anos em TI e suporte</p>
              </div>

              <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-5">
                <p className="text-3xl font-bold text-cyan-400">N1/N2</p>
                <p className="text-slate-400 text-sm mt-1">Suporte técnico</p>
              </div>

              <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-5">
                <p className="text-3xl font-bold text-cyan-400">Cloud</p>
                <p className="text-slate-400 text-sm mt-1">Azure e ambientes híbridos</p>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 mb-8">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              <div className="font-mono text-sm text-slate-300 space-y-2">
                <p><span className="text-cyan-400">&gt;</span> Usuário: Rafaela Rodrigues</p>
                <p><span className="text-cyan-400">&gt;</span> Perfil de acesso: Analista de Suporte Pleno</p>
                <p><span className="text-cyan-400">&gt;</span> Área de atuação: Infrastructure | Azure | Active Directory</p>
                <p>
                  <span className="text-cyan-400">&gt;</span> Disponível para novas oportunidades profissionais.
                  <span className="cursor text-cyan-400"> |</span>
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=raahr91@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-400 rounded-2xl p-5 transition"
              >
                <p className="text-cyan-400 font-semibold">✉ E-mail</p>
                <p className="text-slate-400 text-sm mt-2 break-all">raahr91@gmail.com</p>
              </a>

              <a
                href="https://wa.me/5527998540485"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-400 rounded-2xl p-5 transition"
              >
                <p className="text-cyan-400 font-semibold">📱 WhatsApp</p>
                <p className="text-slate-400 text-sm mt-2">(27) 99854-0485</p>
              </a>

              <a
                href="https://www.linkedin.com/in/rafaelarodrigues-it-support/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-400 rounded-2xl p-5 transition"
              >
                <p className="text-cyan-400 font-semibold">💼 LinkedIn</p>
                <p className="text-slate-400 text-sm mt-2">Perfil profissional</p>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-70 glow-photo"></div>

            <div className="relative bg-slate-900/95 border border-slate-800 rounded-3xl p-6">
              <img
                src="/rafaela.jpg"
                alt="Rafaela Rodrigues"
                className="w-full max-w-[360px] h-[430px] mx-auto rounded-3xl object-cover object-top border border-cyan-500/30 shadow-2xl mb-6"
              />

              <div className="flex flex-wrap gap-3 mb-6 justify-center">
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  Windows Server
                </span>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  Infraestrutura
                </span>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  Cloud
                </span>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  VPN
                </span>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  Active Directory
                </span>
                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl text-sm">
                  Redes
                </span>
              </div>

              <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  Objetivo Profissional
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Atuar em suporte técnico, infraestrutura e ambientes híbridos/cloud, contribuindo para resolução de incidentes, estabilidade operacional e melhoria contínua dos serviços de TI, enquanto aperfeiçoo conhecimentos em Inteligência Artificial aplicada à tecnologia e automação de processos.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  Diferenciais Profissionais
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {strengths.map((item) => (
                    <div
                      key={item}
                      className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-300 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-12">Competências Técnicas</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800"
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 capitalize">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 px-4 py-2 rounded-xl text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-12">Experiência Profissional</h2>

        <div className="space-y-6">
          {experiences.map((job) => (
            <div
              key={job.company}
              className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    {job.role}
                  </h3>

                  <p className="text-xl text-white mt-1">
                    {job.company}
                  </p>
                </div>

                <p className="text-slate-400">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                {job.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold mb-12">Casos Práticos</h2>

        <div className="grid gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {item.title}
              </h3>

              <div className="space-y-4 text-slate-300">
                <p>
                  <span className="font-semibold text-white">Problema:</span>{' '}
                  {item.problem}
                </p>

                <p>
                  <span className="font-semibold text-white">Solução:</span>{' '}
                  {item.solution}
                </p>

                <p>
                  <span className="font-semibold text-white">Resultado:</span>{' '}
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400 text-lg">
            Obrigada por visitar meu portfólio 💙
          </p>

          <p className="text-slate-500 mt-3">
            Desenvolvido por Rafaela Rodrigues com dedicação, tecnologia e propósito.
          </p>
        </div>
      </footer>
    </div>
  )
}
