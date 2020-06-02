export function reqAcesso(email, senha) {
  return {
    type: '@auth/REQ_ACESSO',
    payload: { email, senha },
  };
}

export function sucessoAcesso(token, usuario) {
  return {
    type: '@auth/SUCESSO_ACESSO',
    payload: { token, usuario },
  };
}
export function reqCadastro(nome, email, senha) {
  return {
    type: '@auth/REQ_CADASTRO',
    payload: { nome, email, senha },
  };
}

export function falhaAcesso() {
  return {
    type: '@auth/FALHA_ACESSO',
  };
}
export function sair() {
  return {
    type: '@auth/SAIR',
  };
}
