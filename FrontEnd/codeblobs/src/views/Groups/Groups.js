import React from "react";

import { Card } from "../../components";
import { groupsAPI } from "../../api";

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
        <>
          {groups.map((value, index) => {
            return(
                <Card
                key={index}
                members={10}
                meets={13}
                name={value.group_name}
                type={value.type_id}
                id={value.group_id}
                />
            );
          })}
        </>
      );
    }
  }
}

export default Groups;
