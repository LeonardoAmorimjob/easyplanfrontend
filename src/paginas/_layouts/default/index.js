import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './estilo';
import Headers from '~/componentes/Headers';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Headers />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypesritmo = {
  children: PropTypes.element.isRequired,
};
