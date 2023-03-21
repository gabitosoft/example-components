import React, { Component } from 'react'
import { Button, Form, Input } from 'antd'
import './SignIn.css'

export default class SignIn extends Component {
  onFinish = () => {
    console.log('On Finish - Login!')
  }

  render () {
    return (
      <Form name="login" onFinish={this.onFinish}>
        <Form.Item className="SignIn-login-img">
          <img alt="user login" src="./assets/user-auth.png"/>
        </Form.Item>
        <Form.Item 
          name="username" 
          rules={[ 
            {required: true, message: 'Ingrese nombre usuario'} 
          ]}>
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item 
          name="password"
          rules={[ 
            {required: true, message: 'Ingrese su contrasena'} 
          ]}>
          <Input.Password placeholder="Contrasena"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Login</Button>
        </Form.Item>
      </Form>
    )
  }
}