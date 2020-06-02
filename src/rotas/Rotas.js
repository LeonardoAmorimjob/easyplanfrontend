import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/paginas/_layouts/auth';
import DefaultLayout from '~/paginas/_layouts/default';
import { store } from '~/store';

export default function RotaAux({ component: Component, isPrivate, ...rest }) {
  const { logado } = store.getState().auth;

  if (!logado && isPrivate) {
    return <Redirect to="/" />;
  }
  if (logado && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  const Layout = logado ? DefaultLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RotaAux.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RotaAux.defaultProps = {
  isPrivate: false,
};
