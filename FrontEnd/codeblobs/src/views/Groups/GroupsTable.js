import React from "react";

import { withRouter } from "react-router-dom";
import { Button } from "antd";

import columns from "./Group.columns";
import { Table } from "../../components";
import { groupsAPI, memberAPI } from "../../api";

import "./styles/group.css";

class GroupsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupInfo: {},
      members: []
    };
    this.loadInfo = this.loadInfo.bind(this);
  }

  loadInfo = async () => {
    const { group_id } = this.props.match.params;
    const response = await groupsAPI.get(group_id);
    const data = response.data[0];
    this.setState({
      groupInfo: data
    });
  };

  loadMembers = async () => {
    const { group_id } = this.props.match.params;
    const response = await memberAPI.list(group_id);
    const members = response.data;
    const data = [];
    for (let member of members) {
      let obj = {
        key: member.member_id,
        nome: member.member_name,
        freq: "50%"
      };
      data.push(obj);
    }
    this.setState({
      members: data
    });
    console.log(this.state);
  };

  componentDidMount() {
    this.loadInfo();
    this.loadMembers();
  }

  render() {
    const { group_id } = this.props.match.params;
    return (
      <>
        <Button
          onClick={() =>
            this.props.history.push(`/insert/member/${group_id}`)
          }
        >
          Inserir Novo Membro
        </Button>
        <div>
          <h1>{this.state.groupInfo.group_name}</h1>
          <h1>{this.state.groupInfo.group_type}</h1>
        </div>
        <div>
          <Table dataSource={this.state.members} columns={columns} />
        </div>
      </>
    );
  }
}

export default withRouter(GroupsTable);
