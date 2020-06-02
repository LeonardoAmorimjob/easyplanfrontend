import {
 takeLatest, call, put, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/servicos/api';
import historico from '~/servicos/historico';
import { sucessoAcesso, falhaAcesso } from './actions';

export function* acessar({ payload }) {
  try {
    const { email, senha } = payload;

    const res = yield call(api.post, 'sessao', {
      email,
      senha,
    });
    const { token, usuario } = res.data;

    if (!usuario.prestador) {
      toast.error('Não é prestador');
      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(sucessoAcesso(token, usuario));
    historico.push('/dashboard');
  } catch (err) {
    toast.error('falha na autenticação');
    yield put(falhaAcesso());
  }
}
export function* cadastro({ payload }) {
  try {
    const { nome, email, senha } = payload;
    yield call(api.post, 'usuario', {
      nome,
      email,
      senha,
      prestador: true,
    });
    historico.push('/');
  } catch (err) {
    toast.error('erro no cadastro, verifique seus erros');
    yield put(falhaAcesso());
  }
}
export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}
export function sair() {
  historico.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/REQ_ACESSO', acessar),
  takeLatest('@auth/REQ_CADASTRO', cadastro),
  takeLatest('@auth/SAIR', sair),
]);
