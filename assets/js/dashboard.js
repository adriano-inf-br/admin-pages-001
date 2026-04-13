
window.Auth.requireAuth();
const { createApp } = Vue;
createApp({
  data() {
    return {
      sidebarAberta: false,
      dados: window.AppStorage.getData()
    };
  },
  computed: {
    paginaAtual() { return 'dashboard'; }
  },
  methods: {
    ...window.AppUI.methods,
    recarregar() {
      this.dados = window.AppStorage.getData();
      ElMessage.success('Conteúdo recarregado do localStorage.');
    }
  }
}).use(ElementPlus).mount('#app');
