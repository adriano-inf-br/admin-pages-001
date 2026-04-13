
window.AppUI = {
  methods: {
    abrirSidebar() { this.sidebarAberta = true; },
    fecharSidebar() { this.sidebarAberta = false; },
    alternarSidebar() { this.sidebarAberta = !this.sidebarAberta; },
    sair() { window.Auth.logout(); },
    ir(url) { window.location.href = url; }
  }
};
