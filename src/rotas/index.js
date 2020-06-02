import React from 'react';

import { Switch } from 'react-router-dom';
import Rota from './Rotas';
import Acessar from '../paginas/Acessar';
import Cadastro from '../paginas/Cadastro';
import DashBoard from '../paginas/DashBoard';
import Perfil from '../paginas/Perfil';

export default function Rotas() {
  return (
    <Switch>
      <Rota path="/" exact component={Acessar} />
      <Rota path="/cadastro" component={Cadastro} />
      <Rota path="/dashboard" component={DashBoard} isPrivate />
      <Rota path="/perfil" component={Perfil} isPrivate />
    </Switch>
  );
}
