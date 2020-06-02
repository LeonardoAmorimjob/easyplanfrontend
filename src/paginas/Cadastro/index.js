import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import logo from '~/imagens/logo3.png'
import * as Yup from 'yup';
import { reqCadastro } from '~/store/modulos/auth/actions';

const esquema = Yup.object().shape({
  nome: Yup.string().required('nome obrigatorio'),
  email: Yup.string().email('insira o email').required('email obrigatorio'),
  senha: Yup.string().required('senha Obrigatoria.'),
});
export default function Cadastro() {
  const dispatch = useDispatch();
  function enviaDados({ nome, email, senha }) {
    dispatch(reqCadastro(nome, email, senha));
  }
  return (
    <>
      <img src={logo} width={200} alt="Easyplan" />
      <Form schema={esquema} onSubmit={enviaDados}>
        <Input name="nome" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="senha" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
