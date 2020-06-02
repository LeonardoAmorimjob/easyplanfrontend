import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './estilos';
import { reqAtualizaPerfil } from '~/store/modulos/usuario/actions';
import { sair } from '~/store/modulos/auth/actions';
import AvatarInput from './avatarInput';

export default function Perfil() {
  const dispatch = useDispatch();
  const perfil = useSelector((state) => state.usuario.perfil);
  function enviaDados(data) {
    dispatch(reqAtualizaPerfil(data));
  }
  function sairConta() {
    dispatch(sair());
  }
  return (
    <Container>
      <Form initialData={perfil} onSubmit={enviaDados}>
        <AvatarInput name="avatar_id" />
        <Input name="nome" placeholder="insira o nome" />
        <Input name="email" type="email" placeholder="insira seu email" />

        <hr />

        <Input
          name="senhaAntiga"
          type="password"
          placeholder="insira a senha antiga"
        />
        <Input
          name="senhaNova"
          type="password"
          placeholder="insira a senha nova"
        />
        <Input
          name="confirmSenha"
          type="password"
          placeholder="confirm a senha"
        />
        <button type="submit">Atualizar</button>
      </Form>
      <button type="button" onClick={sairConta}>
        sair do Easyplan
      </button>
    </Container>
  );
}
