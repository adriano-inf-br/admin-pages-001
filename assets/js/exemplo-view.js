
window.Auth.requireAuth();
const { createApp } = Vue;
createApp({
  data() {
    return {
      sidebarAberta: false,
      dados: window.AppStorage.getData(),
      slug: document.body.dataset.slug || ''
    };
  },
  computed: {
    paginaAtual() { return 'exemplos'; },
    exemploAtual() {
      return this.dados.exemplos.find(item => item.arquivo === this.slug) || {
        arquivo: this.slug,
        titulo: 'Exemplo não encontrado',
        descricao: 'Este exemplo ainda não está cadastrado no JSON dinâmico.',
        categoria: 'Indefinido',
        destaque: 'Pendente',
        indicador_a: '--',
        indicador_b: '--'
      };
    }
  },
  methods: {
    ...window.AppUI.methods
  }
}).use(ElementPlus).mount('#app');
