import React from "react";

import columns from "./Group.columns";
import { Table } from "../../components";
import { groupsAPI } from '../../api'
 
import "./styles/group.css";

const data = [
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
      groupInfo: {}
    }
  }


  loadInfo = async () => {
    const { group_id } = this.props.match.params;
    const response = await groupsAPI.get(group_id);
    const data = response.data[0];
    this.setState({
      groupInfo: data
    });
    console.log(this.state.groupInfo);
  }

  componentDidMount(){
    this.loadInfo()
  }

  render() {
    return (
      <>
        <div>
          <h1>{this.state.groupInfo.group_name}</h1>
          <h1>{this.state.groupInfo.group_type}</h1>
        </div>
        <div>
          <Table dataSource={data} columns={columns} />
        </div>
      </>
    );
  }
}

export default GroupsTable;
