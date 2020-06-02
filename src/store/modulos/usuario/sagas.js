import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/servicos/api';
import { sucessoAtualizaPerfil, falhaAtualizaPerfil } from './actions';

export function* atualizaPerfil({ payload }) {
  yield console.tron.log(payload.data);
  try {
    const {
 nome, email, avatar_id, ...rest
} = payload.data;

    const perfil = {
      nome,
      email,
      avatar_id,
      ...(rest.senhaAntiga ? rest : {}),
    };
    const res = yield call(api.put, 'usuario', perfil);
    toast.success('Perfil Atualizado com sucesso');
    yield put(sucessoAtualizaPerfil(res.data));
  } catch (error) {
    toast.error('Erro ao atualizar');
    yield put(falhaAtualizaPerfil());
  }
}
export default all([
  takeLatest('@usuario/REQ_ATUALIZA_PERFIL', atualizaPerfil),
]);
