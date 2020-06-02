import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Badge,
  ListadeNotificacoes,
  Scroll,
  Notificacao,
} from './estilos';
import api from '~/servicos/api';

export default function Notificacoes() {
  const [visivel, setvisivel] = useState(false);
  const [notificacao, setnotificacao] = useState([]);
  const hasUnread = useMemo(() =>
    notificacao.find((notf) => notf.lida === false),
  );
  useEffect(() => {
    async function carregarNotificacoes() {
      const res = await api.get('notificacoes');
      const data = res.data.map((notif) => ({
        ...notif,
        timeDistance: formatDistance(parseISO(notif.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setnotificacao(data);
    }
    carregarNotificacoes();
  }, []);
  function marcaDesmarcaVisibilidade() {
    setvisivel(!visivel);
  }
  async function marcaLida(id) {
    await api.put(`notificacoes/${id}`);
    setnotificacao(
      notificacao.map((notif) => notif._id === id ? { ...notif, lida: true } : notif,
      ),
    );
  }
  async function marcaNLida(id) {
    await api.put(`notificacoes/${id}`);
    setnotificacao(
      notificacao.map((notif) => notif._id === id ? { ...notif, lida: false } : notif,
      ),
    );
  }
  return (
    <Container>
      <Badge onClick={marcaDesmarcaVisibilidade} hasUnread={hasUnread}>
        <MdNotifications color="#22c90c" size={20} />
      </Badge>
      <ListadeNotificacoes visible={visivel}>
        <Scroll>
          {notificacao.map((notif) => (
            <Notificacao key={`${notif._id}`} unread={!notif.lida}>
              <p>{notif.conteudo}</p>
              <time>{notif.timeDistance}</time>
              <button
                onClick={
                  !notif.lida
                    ? () => marcaLida(notif._id)
                    : () => marcaNLida(notif._id)
                }
                type="button"
              >
                {notif.lida ? 'Marcar como não Lida' : 'Marcar como Lida'}
              </button>
            </Notificacao>
          ))}
        </Scroll>
      </ListadeNotificacoes>
    </Container>
  );
}
