import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './estilo';
import api from '~/servicos/api';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [arquivo, setArquivo] = useState(defaultValue && defaultValue.id);
  const [previsualizar, setPrevisualizar] = useState(
    defaultValue && defaultValue.url,
  );
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);
  async function mudar(e) {
    const data = new FormData();
    data.append('arquivo', e.target.files[0]);

    const res = await api.post('arquivos', data);
    const { id, url } = res.data;
    console.tron.log(res.data);
    setArquivo(id);
    setPrevisualizar(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            previsualizar ||
            'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={arquivo}
          onChange={mudar}
          ref={ref}
        />
      </label>
    </Container>
  );
}
