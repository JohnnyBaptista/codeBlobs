import React from "react";
import { Col } from "react-grid-system";

import "./style.css";

const Card = props => {
  const uri = `/group/${props.id}`
  return (
    <Col md={3} className="card">
      <div className="titles">
        <h4>{props.name}</h4>
        <h5>{props.type}</h5>
      </div>
      <div className="dados">
        <p>Dados</p>
        <span className="qnt">{props.members}</span>
        <p>Membros</p>
        <span className="qnt">{props.meets}</span>
        <p>Reuniões Efetuadas</p>
      </div>
      <hr/>
      <button><a href={uri} >Ver mais</a></button>
    </Col>
  );
};

export default Card;
