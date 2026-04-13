
window.Auth.requireAuth();
const { createApp } = Vue;
createApp({
  data() {
    return {
      sidebarAberta: false,
      termo: '',
      dados: window.AppStorage.getData()
    };
  },
  computed: {
    paginaAtual() { return 'exemplos'; },
    exemplosFiltrados() {
      const termo = this.termo.trim().toLowerCase();
      if (!termo) return this.dados.exemplos;
      return this.dados.exemplos.filter(item =>
        [item.titulo, item.descricao, item.categoria, item.arquivo, item.destaque]
          .filter(Boolean)
          .some(valor => String(valor).toLowerCase().includes(termo))
      );
    }
  },
  methods: {
    ...window.AppUI.methods
  }
}).use(ElementPlus).mount('#app');
