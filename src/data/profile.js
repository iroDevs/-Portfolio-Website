// Fonte única de conteúdo: o site e o currículo em PDF leem daqui.
// Alterou aqui, mudou nos dois lugares.

export const profile = {
  nome: 'Pedro Henrique',
  sobrenome: 'Loures Oliveira',
  cargo: 'Desenvolvedor Fullstack Pleno',
  anosExperiencia: '5 Anos de Experiência · Fullstack Pleno',
  resumo:
    'Desenvolvedor Fullstack focado em criar soluções web altamente escaláveis, seguras e com arquitetura robusta. Especialista em ecossistema JavaScript/TypeScript, C# e Banco de Dados.',
  resumoCurriculo:
    'Desenvolvedor Fullstack com 5 anos de experiência em aplicações web escaláveis e seguras. Atuação de ponta a ponta: levantamento de regras de negócio, arquitetura, APIs REST performáticas e interfaces em React. Experiência comprovada assumindo a remodelação autônoma de sistemas legados.',
  // Preencha para aparecerem no currículo em PDF (deixe '' para ocultar)
  email: '',
  cidade: '',
  whatsappLink: 'https://wa.me/5532999359393',
  whatsappLabel: '(32) 9 9935-9393',
  linkedin: 'https://www.linkedin.com/in/pedro-2001/',
  linkedinLabel: 'linkedin.com/in/pedro-2001',
  github: 'https://github.com/iroDevs',
  githubLabel: 'github.com/iroDevs',
};

export const destaques = [
  {
    icone: 'fas fa-cubes',
    titulo: 'Arquitetura & Autonomia',
    texto:
      'Experiência assumindo remodelação de sistemas legados de forma autônoma, atuando desde a identificação de regras até a execução.',
  },
  {
    icone: 'fas fa-server',
    titulo: 'Backend Robusto',
    texto:
      'Especialista na criação de APIs REST performáticas utilizando NestJS, Express e C#, integrados a PostgreSQL, Redis e Docker.',
  },
  {
    icone: 'fas fa-shield-alt',
    titulo: 'Segurança & Escalabilidade',
    texto:
      'Foco contínuo em boas práticas de segurança web, otimização de consultas SQL e padrões de código para aplicações de alto tráfego.',
  },
];

export const skills = [
  { icone: 'fab fa-react', nome: 'React.js', grupo: 'Frontend' },
  { icone: 'fas fa-code', nome: 'TypeScript', grupo: 'Linguagens' },
  { icone: 'fab fa-node-js', nome: 'NestJS', grupo: 'Backend' },
  { icone: 'fas fa-server', nome: 'Express', grupo: 'Backend' },
  { icone: 'fab fa-windows', nome: 'C# / .NET', grupo: 'Backend' },
  { icone: 'fas fa-database', nome: 'PostgreSQL', grupo: 'Dados' },
  { icone: 'fas fa-bolt', nome: 'Redis', grupo: 'Dados' },
  { icone: 'fab fa-docker', nome: 'Docker', grupo: 'Infra' },
  { icone: 'fas fa-network-wired', nome: 'API REST', grupo: 'Backend' },
  { icone: 'fas fa-database', nome: 'SQL', grupo: 'Dados' },
  { icone: 'fab fa-js', nome: 'JavaScript', grupo: 'Linguagens' },
  { icone: 'fas fa-vial', nome: 'Testes', grupo: 'Qualidade' },
];

// Agrupamento usado só no currículo, para economizar linhas.
export const skillsCurriculo = [
  { grupo: 'Linguagens', itens: 'TypeScript · JavaScript · C# · PHP · SQL' },
  { grupo: 'Backend', itens: 'NestJS · Node.js · Express · .NET · API REST' },
  { grupo: 'Frontend', itens: 'React.js · HTML5 · CSS3' },
  { grupo: 'Dados & Infra', itens: 'PostgreSQL · Redis · Docker' },
  { grupo: 'Qualidade', itens: 'Testes automatizados · Web Security' },
];

export const experiencias = [
  {
    cargo: 'Analista | Desenvolvedor Fullstack Pleno',
    empresa: 'PAGE Saúde / FBR CONSULT',
    periodo: 'Jul 2023 - Presente',
    descricao:
      'Atuação direta na evolução do ecossistema de saúde. Designado de forma autônoma no projeto Portal do COSEMS para assumir a remodelação e reconstrução completa de um sistema legado, lidando com responsabilidade total do projeto, comunicação com stakeholders e resolução de problemas complexos.',
    descricaoCurta:
      'Responsável autônomo pela remodelação completa do sistema legado do Portal do COSEMS: levantamento de regras, arquitetura, APIs e contato direto com stakeholders.',
    tags: ['React.js', 'Node.js', 'SQL', 'API REST', 'Remodelação Legado'],
  },
  {
    cargo: 'Analista / Desenvolvedor Web',
    empresa: 'Contato Seguro | Canal de Denúncias',
    periodo: 'Abr 2023 - Ago 2023',
    descricao:
      'Desenvolvimento de soluções focadas em arquitetura web segura e escalável. Otimização de código e garantia de boas práticas para garantir sigilo e alta performance no recebimento de denúncias corporativas.',
    descricaoCurta:
      'Arquitetura web segura e escalável para canal de denúncias corporativas, com foco em sigilo, performance e boas práticas.',
    tags: ['PHP', 'SQL', 'React.js', 'Web Security'],
  },
  {
    cargo: 'Desenvolvedor Web',
    empresa: 'Polidados Informática Total',
    periodo: 'Mai 2022 - Dez 2022',
    descricao:
      'Desenvolvimento e manutenção de aplicações web robustas baseadas no padrão MVC com Laravel e Eloquent. Integração de sistemas com emissão e gerenciamento de documentos fiscais.',
    descricaoCurta:
      'Aplicações web em MVC com Laravel/Eloquent e integração de sistemas de emissão e gestão de documentos fiscais.',
    tags: ['PHP', 'Laravel', 'Eloquent', 'SQL', 'Docs Fiscais'],
  },
  {
    cargo: 'Desenvolvedor Web Junior',
    empresa: 'Pampadevs',
    periodo: 'Mar 2022 - Dez 2022',
    descricao:
      'Gerenciamento e manutenção de duas plataformas web (Controle/Gerência e Hotelaria), aplicando as melhores práticas de mercado e aprendendo novas tecnologias do ecossistema web.',
    descricaoCurta:
      'Gestão e manutenção de duas plataformas web (Controle/Gerência e Hotelaria) aplicando boas práticas de mercado.',
    tags: ['JavaScript', 'Web Dev', 'Gestão de Plataformas'],
  },
];

export const formacoes = [
  {
    icone: 'fas fa-graduation-cap',
    titulo: 'Engenharia de Software',
    instituicao: 'Descomplica (Belo Horizonte - MG)',
  },
  {
    icone: 'fas fa-university',
    titulo: 'Ensino Técnico / Superior',
    instituicao: 'Instituto Federal de Ciência e Tecnologia (Rio Pomba)',
  },
  {
    icone: 'fas fa-laptop-code',
    titulo: 'Desenvolvedor Fullstack',
    instituicao: 'Trybe',
  },
  {
    icone: 'fas fa-code-branch',
    titulo: 'Web Developer',
    instituicao: 'Rocketseat',
  },
];
