import React from "react";

import { groupsAPI } from "../../api";

import "../../components/Card/style.css";
import { Row } from "react-grid-system";

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  async getMeet() {}

  async getGroups() {
    const groups = await groupsAPI.list();
    const groupsData = groups.data;
    this.setState({
      groups: groupsData
    });
    return;
  }

  componentDidMount() {
    this.getGroups();
  }

  render() {
    const { groups } = this.state;
    console.log({ groups });
    if (groups !== undefined) {
      return (
        <div className="main-container">
          <ul>
            {groups.map((group, index) => {
              return (
                <li>
                  <footer>
                    <div className="header">
                      <p className="name">{group.group_name}</p>
                      <p className="type">{group.type_name}</p>
                    </div>
                    <div className="information">
                      <strong>Dados do grupo</strong>
                      <p className="numData">18</p>
                      <p className="data">Membros</p>
                      <p className="numData">13</p>
                      <p className="data">Reuniões Efetuadas</p>
                    </div>
                    <button>Ver Mais</button>
                  </footer>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default Groups;
