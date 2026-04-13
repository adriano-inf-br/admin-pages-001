
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      senha: '',
      carregando: false
    };
  },
  mounted() {
    window.AppStorage.ensureData();
    if (window.Auth.isLogged()) {
      window.location.href = 'index.html';
    }
  },
  methods: {
    entrar() {
      this.carregando = true;
      setTimeout(() => {
        const ok = window.Auth.login(this.senha);
        this.carregando = false;
        if (ok) {
          ElMessage.success('Login validado com sucesso.');
          window.location.href = 'index.html';
          return;
        }
        ElMessage.error('Senha inválida.');
      }, 350);
    }
  }
});
app.use(ElementPlus);
app.mount('#app');
