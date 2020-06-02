import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/imagens/logo3.png'
import { Container, Conteudo, Perfil } from './estilos';
import Notificacoes from '~/componentes/Notificacoes';

export default function Headers() {
  const perfil = useSelector((state) => state.usuario.perfil);
  console.tron.log(perfil)
  return (
    <Container>
      <Conteudo>
        <nav>
          <img src={logo} alt="Easyplan" />
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <aside>
          <Notificacoes />
          <Perfil>
            <div>
              <strong>{perfil.nome}</strong>
              <Link to="/perfil">Meu Perfil</Link>
            </div>
            <img
              src={
                perfil.avatar?perfil.avatar.url:
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="foto perfil"
            />
          </Perfil>
        </aside>
      </Conteudo>
    </Container>
  );
}
