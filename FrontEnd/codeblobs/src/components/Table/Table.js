import React from "react";

import "./styles/table.css";

const Table = props => {
  const { dataSource, columns } = props;
  console.log({ columns });
  return (
    <div>
      <table>
        <tr>
          {columns.map(th => {
            return <th>{th.title}</th>;
          })}
        </tr>

        {dataSource.map(row => {
          return (
            <tr>
              <td>{row.nome}</td>
              <td>{row.freq}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
