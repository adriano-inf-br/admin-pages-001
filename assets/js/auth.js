function obterTokenLogin() {
  return localStorage.getItem('token_login');
}

function estaLogado() {
  return Boolean(obterTokenLogin());
}

function protegerRota() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  if (!estaLogado() && paginaAtual !== 'login.html') {
    window.location.href = './login.html';
  }
}

function sairDoSistema() {
  localStorage.removeItem('token_login');
  localStorage.removeItem('usuario_nome');
  window.location.href = './login.html';
}
