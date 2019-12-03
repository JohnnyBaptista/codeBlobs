import React, { Component } from "react";

import { Form, Icon, Input, Button, message } from "antd";
import { withRouter } from "react-router-dom";

import { groupsAPI, memberAPI } from "../../api";

class MemberForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {}
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      console.log(values);
      if (!err) {
        try {
          const data = {
            name: values.name,
            description: values.description,
            group: this.props.match.params.group_id
          }
          const response = await memberAPI.post(data);
          console.log(response);
          if(response) { 
            message.success("Membero inserido com sucesso!");
          }else{
            message.success("Membero inserido com sucesso!");
          }

        } catch (error) {
          console.log(error);
          message.error("Impossível inserir o Membro!");
        }
      }
    });
  };

  loadInfos = async () => {
    const { group_id } = this.props.match.params;
    const groupInfo = await groupsAPI.get(group_id);
    this.setState({
      group: groupInfo.data[0]
    });
    console.log(this.state.group);
  };

  componentDidMount() {
    this.loadInfos();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <h1 style={{ fontFamily: "Monda" }}>
          Inserir novo membro ao grupo: {this.state.group.group_name}
        </h1>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Entre com o nome do membro do grupo"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Nome do Membro"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Entre com uma breve descrição do membro do grupo"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Descrição do membro"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Inserir
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

MemberForms = Form.create()(MemberForms);

export default withRouter(MemberForms);
