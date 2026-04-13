
window.Auth.requireAuth();
const { createApp } = Vue;
createApp({
  data() {
    return {
      sidebarAberta: false,
      dados: window.AppStorage.getData(),
      novoExemplo: {
        arquivo: '', titulo: '', descricao: '', categoria: '', destaque: '', indicador_a: '', indicador_b: ''
      }
    };
  },
  computed: {
    paginaAtual() { return 'conteudo'; },
    dadosJson() { return JSON.stringify(this.dados, null, 2); }
  },
  methods: {
    ...window.AppUI.methods,
    salvarTudo() {
      window.AppStorage.saveData(this.dados);
      ElMessage.success('Conteúdo salvo no localStorage.');
    },
    restaurarPadrao() {
      this.dados = window.AppStorage.reset();
      ElMessage.warning('Conteúdo restaurado para o padrão.');
    },
    adicionarMetrica() {
      this.dados.dashboard.metricas.push({
        id: Date.now(), rotulo: 'Nova métrica', valor: '0', meta: 'Defina a meta', icone: '🧩', cor: '#2563eb'
      });
    },
    removerMetrica(index) {
      this.dados.dashboard.metricas.splice(index, 1);
    },
    adicionarExemplo() {
      if (!this.novoExemplo.arquivo || !this.novoExemplo.titulo) {
        ElMessage.error('Informe ao menos arquivo e título.');
        return;
      }
      this.dados.exemplos.push({ ...this.novoExemplo });
      this.novoExemplo = { arquivo: '', titulo: '', descricao: '', categoria: '', destaque: '', indicador_a: '', indicador_b: '' };
      ElMessage.success('Exemplo adicionado. Salve para persistir.');
    },
    removerExemplo(index) {
      this.dados.exemplos.splice(index, 1);
    }
  }
}).use(ElementPlus).mount('#app');
