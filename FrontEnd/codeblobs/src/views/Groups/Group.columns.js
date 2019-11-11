import React from 'react';

const columns = () => {
  return [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome'
    },
    {
      title: 'Frequência',
      dataIndex: 'freq',
      key: 'freq'
    },
  ];
}

export default columns;
