import React from "react";

import "./style.css";

const Card = props => {
  const uri = `/group/${props.id}`
  return (
    <div className="main-container">
          <ul>
            <li>
              <footer>
                <div className="header">
                  <p className="name">{props.groupName}</p>
                  <p className="type">{props.type_name}</p>
                </div>
                <div className="information">
                  <strong>Dados do grupo</strong>
                  <p className="numData">{props.members}</p>
                  <p className="data">Membros</p>
                  <p className="numData">{props.meets}</p>
                  <p className="data">Reuniões Efetuadas</p>
                </div>
                <button>Ver Mais</button>
              </footer>
            </li>
           
          </ul>
        </div>
  );
};

export default Card;
