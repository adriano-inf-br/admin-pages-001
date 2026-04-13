
window.APP_CONST = {
  TOKEN_KEY: 'painel_token_login',
  TOKEN_VALUE: '74ae96856361ec7f3fecd0538338eb85',
  DADOS_KEY: 'painel_dados_dinamicos'
};

window.APP_DEFAULT_DATA = {
  versao: '3.0',
  usuario: {
    nome: 'Administrador',
    cargo: 'Gestor do Painel',
    empresa: 'Enterprise Public Panel'
  },
  dashboard: {
    titulo: 'Painel Administrativo',
    subtitulo: 'Visão consolidada de indicadores, atalhos e conteúdo dinâmico salvo no localStorage.',
    metricas: [
      { id: 1, rotulo: 'Receita mensal', valor: 'R$ 128.450', meta: '+12,4% vs mês anterior', icone: '💰', cor: '#2563eb' },
      { id: 2, rotulo: 'Novos clientes', valor: '284', meta: '+18 leads qualificados', icone: '👥', cor: '#16a34a' },
      { id: 3, rotulo: 'Tickets abertos', valor: '19', meta: '5 críticos em análise', icone: '🎯', cor: '#d97706' },
      { id: 4, rotulo: 'Conversão', valor: '7,8%', meta: 'Meta trimestral 8,5%', icone: '📈', cor: '#7c3aed' }
    ],
    progresso: [
      { nome: 'Roadmap do trimestre', percentual: 72, cor: '#2563eb' },
      { nome: 'Implantação de clientes', percentual: 54, cor: '#16a34a' },
      { nome: 'Documentação interna', percentual: 81, cor: '#0891b2' },
      { nome: 'Entrega dos exemplos', percentual: 93, cor: '#d97706' }
    ],
    atalhos: [
      { titulo: 'Abrir lista de exemplos', descricao: 'Navegue por todas as páginas públicas disponíveis.', url: 'exemplos.html' },
      { titulo: 'Editar conteúdo dinâmico', descricao: 'Atualize métricas, textos e exemplos salvos no navegador.', url: 'conteudo.html' },
      { titulo: 'Acessar primeiro exemplo', descricao: 'Visualize a página de demonstração principal.', url: 'exemplo-0001.html' }
    ]
  },
  exemplos: [
    { arquivo: 'exemplo-0001.html', titulo: 'Exemplo 0001', descricao: 'Visão executiva com KPIs e destaques do dia.', categoria: 'Dashboard', destaque: 'Ativo', indicador_a: '128', indicador_b: '96%' },
    { arquivo: 'exemplo-0002.html', titulo: 'Exemplo 0002', descricao: 'Painel de operações com foco em status e produtividade.', categoria: 'Operações', destaque: 'Monitorado', indicador_a: '43', indicador_b: '91%' },
    { arquivo: 'exemplo-0003.html', titulo: 'Exemplo 0003', descricao: 'Tela para apresentação de métricas comerciais.', categoria: 'Comercial', destaque: 'Prioritário', indicador_a: '87', indicador_b: '74%' },
    { arquivo: 'exemplo-0004.html', titulo: 'Exemplo 0004', descricao: 'Resumo financeiro com cards e evolução.', categoria: 'Financeiro', destaque: 'Novo', indicador_a: 'R$ 64k', indicador_b: '88%' },
    { arquivo: 'exemplo-0005.html', titulo: 'Exemplo 0005', descricao: 'Workspace de indicadores do suporte.', categoria: 'Suporte', destaque: 'Estável', indicador_a: '12', indicador_b: '97%' },
    { arquivo: 'exemplo-0006.html', titulo: 'Exemplo 0006', descricao: 'Tela de gestão com visão de backlog e execução.', categoria: 'Projetos', destaque: 'Planejado', indicador_a: '34', indicador_b: '69%' }
  ]
};

window.AppStorage = {
  ensureData() {
    const existing = localStorage.getItem(APP_CONST.DADOS_KEY);
    if (!existing) {
      localStorage.setItem(APP_CONST.DADOS_KEY, JSON.stringify(window.APP_DEFAULT_DATA));
      return structuredClone(window.APP_DEFAULT_DATA);
    }
    try {
      return JSON.parse(existing);
    } catch (e) {
      localStorage.setItem(APP_CONST.DADOS_KEY, JSON.stringify(window.APP_DEFAULT_DATA));
      return structuredClone(window.APP_DEFAULT_DATA);
    }
  },
  getData() {
    return this.ensureData();
  },
  saveData(data) {
    localStorage.setItem(APP_CONST.DADOS_KEY, JSON.stringify(data));
  },
  reset() {
    localStorage.setItem(APP_CONST.DADOS_KEY, JSON.stringify(window.APP_DEFAULT_DATA));
    return this.getData();
  }
};

window.Auth = {
  isLogged() {
    return localStorage.getItem(APP_CONST.TOKEN_KEY) === APP_CONST.TOKEN_VALUE;
  },
  requireAuth() {
    if (!this.isLogged()) {
      window.location.href = 'login.html';
    }
  },
  login(value) {
    if (value === APP_CONST.TOKEN_VALUE) {
      localStorage.setItem(APP_CONST.TOKEN_KEY, APP_CONST.TOKEN_VALUE);
      return true;
    }
    return false;
  },
  logout() {
    localStorage.removeItem(APP_CONST.TOKEN_KEY);
    window.location.href = 'login.html';
  }
};
