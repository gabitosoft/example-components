import React, { Component } from 'react'
import { Button, Form, Input } from 'antd'

export default class SignIn extends Component {
  onFinish = () => {
    console.log('On Finish - Login!')
  }

  render () {
    return (
      <Form name="login" onFinish={this.onFinish}>
        <Form.Item 
          label="Nombre usuario" 
          name="username" 
          rules={[ 
            {required: true, message: 'Ingrese nombre usuario'} 
          ]}>
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item><Input.Password placeholder="Password"/></Form.Item>
        <Form.Item><Button type="primary" htmlType="submit">Login</Button></Form.Item>
      </Form>
    )
  }
}