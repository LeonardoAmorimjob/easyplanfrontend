import produce from 'immer';

const INITIAL_STATE = {
  perfil: null,
};
export default function usuario(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SUCESSO_ACESSO': {
        draft.perfil = action.payload.usuario;
        break;
      }
      case '@usuario/SUCESSO_ATUALIZA_PERFIL': {
        draft.perfil = action.payload.perfil;

        break;
      }
      case '@auth/SAIR': {
        draft.perfil = null;
        break;
      }

      default:
        return state;
    }
  });
}
