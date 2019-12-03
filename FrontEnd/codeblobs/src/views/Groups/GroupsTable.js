import React from "react";

import columns from "./Group.columns";
import { Table } from "../../components";
import { groupsAPI, memberAPI } from '../../api'
 
import "./styles/group.css";

const datas = [
  {
    key: "1",
    nome: "Nome 1",
    freq: "50%"
  },
  {
    key: "2",
    nome: "Nome 2",
    freq: "50%"
  },
  {
    key: "3",
    nome: "Nome 3",
    freq: "50%"
  }
];

class GroupsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groupInfo: {},
      members: []
    }
    this.loadInfo = this.loadInfo.bind(this);
  }


  loadInfo = async () => {
    const { group_id } = this.props.match.params;
    const response = await groupsAPI.get(group_id);
    const data = response.data[0];
    this.setState({
      groupInfo: data
    });
  }

  loadMembers = async () => {
    const { group_id } = this.props.match.params;
    const response = await memberAPI.list(group_id);
    const members = response.data;
    const data = [];
    for(let member of members){
      let obj = {
        key: member.member_id,
        nome: member.member_name,
        freq: '50%'
      }
      data.push(obj);
    }
    this.setState({
      members: data
    });
    console.log(this.state)
  }

  componentDidMount(){
    this.loadInfo()
    this.loadMembers();
  }

  render() {
    return (
      <>
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

export default GroupsTable;
