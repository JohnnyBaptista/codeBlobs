import React, { Component } from "react";

import { Form, Icon, Input, Button, Select, message } from "antd";
import { withRouter } from "react-router-dom";

import { typeAPI, groupsAPI } from "../../api";

const { Option } = Select;

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: []
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let states = this.state.types;
        let id = null;
        for (let types of states) {
          if(types.type_name === values.type){
            id = types.type_id;
          }
        }
        if (id === null) {
          message.error("Tipo não encontrado!");
          return;
        }
        const obj = {
          name: values.name,
          type: id
        };
        const response = await groupsAPI.post(obj);
        console.log({ response });
        message.success("Grupo cadastrado com sucesso!");
      }
    });
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  loadTypes = async () => {
    let { types } = this.state;
    try {
      const response = await typeAPI.list();
      types = response.data;
      this.setState({
        types
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.loadTypes();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { types } = this.state;
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Entre com o nome do grupo" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Nome do Grupo"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Escolha o tipo" }]
          })(
            <Select style={{ width: 200 }} key={1} onChange={this.handleChange} style={{display: 'flex', flexDirection: 'column'}}>
              {types.map((type, index) => {
                return (
                  <Option value={type.type_name} key={type.type_id} >
                    {" "}
                    {type.type_name}{" "}
                  </Option>
                );
              })}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Inserir
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

GroupForm = Form.create()(GroupForm);

export default withRouter(GroupForm);
