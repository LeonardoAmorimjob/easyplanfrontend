export function reqAtualizaPerfil(data) {
  return {
    type: '@usuario/REQ_ATUALIZA_PERFIL',
    payload: { data },
  };
}
export function sucessoAtualizaPerfil(perfil) {
  return {
    type: '@usuario/SUCESSO_ATUALIZA_PERFIL',
    payload: { perfil },
  };
}
export function falhaAtualizaPerfil() {
  return {
    type: '@usuario/FALHA_ATUALIZA_PERFIL',
  };
}
