import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { pt } from 'date-fns/locale';
import api from '~/servicos/api';
import { Container, Time } from './estilo';

const range = [8,9,10];

export default function DashBoard() {
  const [agenda, setAgenda] = useState([]);
  const [data, setData] = useState(new Date());
  const dataFormatada = useMemo(
    () => format(data, "d 'de' MMMM", { locale: pt }),
    [data]
  );
  useEffect(() => {
    async function carregarAgenda() {
      const res = await api.get('agenda', { params: { data } });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const dados = range.map((hora) => {
        const verificaData = setSeconds(setMinutes(setHours(data, hora), 0), 0);
        const comparaData = utcToZonedTime(verificaData, timezone);
        return {
          dataInicial:comparaData,
          horario: `${hora}:00h`,
          passada: isBefore(comparaData, new Date()),
          agendamento: res.data.find((a) => isEqual(parseISO(a.data), comparaData),
          ),
        };
      });
      setAgenda(dados);
    }
    carregarAgenda();
  }, [data]);
  function diaAnterior() {
    setData(subDays(data, 1));
  }
  function diaPosterior() {
    setData(addDays(data, 1));

  }
  return (
    <Container>
      <header>
        <button type="button" onClick={diaAnterior}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dataFormatada}</strong>
        <button type="button" onClick={diaPosterior}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        {agenda.map((horario) => (
          <Time
            key={horario.horario}
            passado={horario.passada}
            disponivel={!horario.agendamento}
          >
            <strong>{horario.horario}</strong>
            <span>
              {horario.agendamento
                ? horario.agendamento.usuario.nome
                : 'Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
