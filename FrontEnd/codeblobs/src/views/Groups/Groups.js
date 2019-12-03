import React from "react";

import { withRouter } from "react-router-dom";
import { Button, Icon } from "antd";

import { groupsAPI, meetsAPI, memberAPI } from "../../api";

import "../../components/Card/style.css";

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  async getInfo() {
    const response = await meetsAPI.list();
    const response2 = await memberAPI.getNum();
    const info = response.data.result;
    const members = response2.data;

    const groups = [];
    for (let i = 0; i < info.length; i++){
      let obj = {
        nameGroup: info[i][0].nameGroup,
        nameType: info[i][0].nameType,
        qntMeets: info[i][0].qntMeets,
        memberNumber: members[i][0].memberNumber
      }
      groups.push(obj);
    }
    this.setState({
      groups
    });
  }

  componentDidMount(){
    this.getInfo();
  }

  render() {
    const { groups } = this.state;
    if (groups !== undefined) {
      return (
        <>
          <h1 style={{ textAlign: "center", fontFamily: "Monda" }}>Grupos</h1>
          <div className="new">
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/insert/group");
              }}
            >
              <Icon
                type="plus-circle"
                theme="filled"
                style={{ color: "#fff" }}
              />
              Novo grupo
            </Button>
            <Button
              style={{
                backgroundColor: "#ffc000",
                color: "#ffffff",
                fontWeight: 700,
                marginTop: 10
              }}
              onClick={() => {
                this.props.history.push("/insert/type");
              }}
            >
              <Icon
                type="plus-circle"
                theme="filled"
                style={{ color: "#fff" }}
              />
              Novo tipo
            </Button>
          </div>
          <div className="main-container">
            <ul>
              {groups.map((group, index) => {
                return (
                  <li>
                    <footer>
                      <div className="header">
                        <p className="name">{group.nameGroup}</p>
                        <p className="type">{group.nameType}</p>
                      </div>
                      <div className="information">
                        <strong>Dados do grupo</strong>
                        <p className="numData">{group.memberNumber}</p>
                        <p className="data">Membros</p>
                        <p className="numData">{group.qntMeets}</p>
                        <p className="data">Reuniões Efetuadas</p>
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                          this.props.history.push(`/group/${group.group_id}`);
                        }}
                      >
                        Ver Mais
                      </button>
                    </footer>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      );
    }
  }
}

export default withRouter(Groups);
