// ============================================================
// DADOS DOS PROJETOS
// Para adicionar um projeto novo, basta adicionar um objeto
// neste array — o componente <Projetos /> renderiza sozinho.
// Isso é arquitetura orientada a dados: o conteúdo fica
// separado da apresentação.
// ============================================================

export const projetos = [
  {
    id: 1,
    titulo: 'DevBurguer',
    descricao: 'Projeto de Landing page de hamburgueria com cardápio interativo e carrinho de pedidos.',
    imagem: '/Img/DevBurguer.jpeg',
    categoria: 'front',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    links: {
      online: 'https://projeto-hamburgueria-dev-burguer.vercel.app/',
    },
  },
  {
    id: 2,
    titulo: 'Doce Desejo',
    descricao: 'Site institucional para escola de confeitaria — projeto entregue a cliente real.',
    imagem: '/Img/DoceDesejo.jpeg',
    categoria: 'front',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    links: {
      online: 'https://escoladeconfeitariadocedesejofe.com/',
    },
  },
  {
    id: 3,
    titulo: 'Treinamento de Modelo de IA',
    descricao: 'Pipeline de treinamento de modelo de inteligência artificial para revisão de código.',
    imagem: '/Img/RevisaoDeCodigo.jpeg',
    categoria: 'back',
    tecnologias: ['Python', 'Machine Learning'],
    links: {
      github: 'https://github.com/Anderson-S-Silva/Treinamento-de-Modelo-de-IA',
    },
  },
  {
    id: 4,
    titulo: 'Migração de Banco de Dados',
    descricao: 'Rotina de migração de banco de dados utilizando web services da AWS.',
    imagem: '/Img/BancodeDados.jpeg',
    categoria: 'back',
    tecnologias: ['SQL', 'AWS', 'Python'],
    links: {
      github: 'https://github.com/Anderson-S-Silva/Migracao-de-Banco-de-Dados',
    },
  },
  {
    id: 5,
    titulo: 'Análise de Dados de Vendas',
    descricao: 'Análise exploratória de dados de vendas com limpeza, modelagem e visualização.',
    imagem: '/Img/Exploratoria.jpeg',
    categoria: 'dados',
    tecnologias: ['Python', 'Pandas', 'Visualização'],
    links: {
      github: 'https://github.com/Anderson-S-Silva/Analise-_de_Dados_Vendas',
    },
  },
];

export const categorias = [
  { id: 'todos', rotulo: 'Todos' },
  { id: 'front', rotulo: 'Front-End' },
  { id: 'back', rotulo: 'Back-End' },
  { id: 'dados', rotulo: 'Dados' },
];

export const experiencias = [
  {
    periodo: '2025 — Atual',
    cargo: 'Programador Back-End Jr',
    descricao:
      'Desenvolvimento de novas funcionalidades em sistemas legados, migração de banco de dados através de web services AWS e desenvolvimento de aplicações de controle de acesso.',
  },
  {
    periodo: '2025',
    cargo: 'Estágio em Pesquisa, Desenvolvimento & Inovação',
    descricao:
      'Apoio a projetos de inovação, desenvolvimento de scripts em Python para automação, manipulação de dados e suporte técnico aos pesquisadores em atividades de P&D.',
  },
  {
    periodo: '2018 — 2024',
    cargo: 'Operador de Loja II — Pleno',
    descricao:
      'Atendimento, operação de caixa, conferência de mercadorias e treinamento de novos colaboradores.',
  },
];

export const formacoes = [
  {
    periodo: '2024 — 2026',
    cargo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    descricao:
      'Formação voltada para desenvolvimento de sistemas, programação, banco de dados e soluções tecnológicas.',
  },
  {
    periodo: '2024 — 2026',
    cargo: 'Profissionalizante em Análise de Dados',
    descricao:
      'Capacitação em coleta, organização, análise e visualização de dados com ferramentas e técnicas voltadas a insights estratégicos.',
  },
];

export const habilidades = [
  { grupo: 'Linguagens', itens: ['Python', 'JavaScript', 'SQL'] },
  { grupo: 'Web', itens: ['HTML5', 'CSS3', 'React', 'APIs REST'] },
  { grupo: 'Dados & IA', itens: ['Pandas', 'Análise Exploratória'] },
  { grupo: 'Ferramentas', itens: ['Git & GitHub', 'AWS', 'Docker', 'Postman'] },
];

export const servicos = [
  {
    icone: 'fa-solid fa-terminal',
    titulo: 'Desenvolvimento Full Stack',
    descricao: 'Aplicações completas, unindo front-end e back-end, com foco em performance, segurança e escalabilidade.',
  },
  {
    icone: 'fa-solid fa-database',
    titulo: 'Análise de Dados',
    descricao: 'Limpeza, modelagem e visualização de dados para transformar informação em decisões estratégicas.',
  },
  {
    icone: 'fa-brands fa-chrome',
    titulo: 'Freelancer',
    descricao: 'Desenvolvimento de sites, landing pages e soluções web personalizadas para empresas e profissionais.',
  },
  {
    icone: 'fa-solid fa-microchip',
    titulo: 'Automação de Processos',
    descricao: 'Rotinas que eliminam tarefas manuais, otimizam fluxos de trabalho e reduzem erros operacionais.',
  },
];
