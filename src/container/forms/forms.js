import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Forms extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
     
      </Form>
        </Card>
      </div>
    )
  }
}
// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default Form.create()(Forms);