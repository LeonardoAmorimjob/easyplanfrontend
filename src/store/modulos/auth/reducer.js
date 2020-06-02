import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  logado: false,
  carregando: false,
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/REQ_ACESSO': {
        draft.carregando = true;
        break;
      }

      case '@auth/SUCESSO_ACESSO': {
        draft.token = action.payload.token;
        draft.logado = true;
        draft.carregando = false;
        break;
      }

      case '@auth/FALHA_ACESSO': {
        draft.carregando = false;
        break;
      }
      case '@auth/SAIR': {
        draft.token = null;
        draft.logado = false;
        break;
      }
      default:
    }
  });
}
