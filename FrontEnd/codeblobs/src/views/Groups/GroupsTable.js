import React from 'react';

import columns from './Group.columns';
import { Table } from '../../components';

const data = [
  {
    key: '1',
    nome: 'Nome 1',
    freq: '50%',
  },
  {
    key: '2',
    nome: 'Nome 2',
    freq: '50%',
  },
  {
    key: '3',
    nome: 'Nome 3',
    freq: '50%',
  }
];

class GroupsTable extends React.Component {

  render(){
    return (
      <Table dataSource={data} columns={columns}/>
    );
  }
}

export default GroupsTable;
