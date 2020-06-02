import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/Reactotron';
import Rotas from './rotas';
import historico from './servicos/historico';

import EstiloGlobal from './estilos/global';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={historico}>
          <Rotas />
          <EstiloGlobal />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
