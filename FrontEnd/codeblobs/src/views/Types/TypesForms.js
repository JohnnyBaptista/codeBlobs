import React, { Component } from "react";

import { Form, Icon, Input, Button, message } from "antd";
import { withRouter } from "react-router-dom";

import { typeAPI } from '../../api'

class TypesForms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const data = { type: values.type };
          const result = await typeAPI.post(data);
          message.success('Tipo inserido com sucesso!');
          
        } catch (error) {
          console.log(error);
          message.error('Impossível inserir o tipo!');
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <h1 style={{fontFamily: 'Monda'}}>Inserir novo tipo</h1>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "Entre com o novo tipo" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Tipo"
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

TypesForms = Form.create()(TypesForms);

export default withRouter(TypesForms);
