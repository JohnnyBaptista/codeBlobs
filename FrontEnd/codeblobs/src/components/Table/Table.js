import React from "react";

import "./styles/table.css";

const Table = props => {
  const { dataSource, columns } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((th, index) => {
              return <th key={index}>{th.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>

        {dataSource.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.nome}</td>
              <td>{row.freq}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
