import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/imagens/logo3.png'
import { Form, Input } from '@rocketseat/unform';
import { reqAcesso } from '~/store/modulos/auth/actions';

const esquema = Yup.object().shape({
  email: Yup.string().email('insira o email').required('email obrigatorio'),
  senha: Yup.string().required('senha Obrigatoria.'),
});

export default function Acessar() {
  const dispatch = useDispatch();
  const carregando = useSelector((state) => state.auth.carregando);
  function enviaDados({ email, senha }) {
    dispatch(reqAcesso(email, senha));
  }
  return (
    <>
      <img src={logo} width={200} alt="Easyplan" />
      <Form schema={esquema} onSubmit={enviaDados}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="senha" type="password" placeholder="Sua senha" />
        <button type="submit">{carregando ? 'Carregando' : 'Acessar'}</button>
        <Link to="/cadastro">criar conta</Link>
      </Form>
    </>
  );
}
