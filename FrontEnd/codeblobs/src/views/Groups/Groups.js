import React from "react";

import { Card } from "../../components";
import { groupsAPI } from "../../api";

import "./styles/group.css";

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
    if (groups !== undefined) {
      return (
        <Card 
          groupName="Teste"
          type_name="Corote de sabor"
          meets={15}
          members={25}
        />
      );
    }
  }
}

export default Groups;
