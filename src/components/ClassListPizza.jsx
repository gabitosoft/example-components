import React, { Component } from 'react'
import { List, Button } from 'antd'

const pizzas = ['Hawaiana', 'Torino', 'Parma', 'Bellagio']

export default class ListPizza extends Component {
  state = {
    prefix: 'Pizza: ',
    isBordered: true,
    color: 'red'
  }

  switchBorder = () => {
    console.log('Switch Border')
    const oldValue = this.state.isBordered
    this.setState({ isBordered: !oldValue })
  }

  changeColor = () => {
    const numberColor = Math.floor(Math.random()*16777215).toString(16)
    const color = "#".concat(numberColor)
    this.setState({ color: color })
  }

  componentDidMount() {
    console.log('List Pizza has been mounted')
    console.log('List Pizza has been mounted')
  }

  componentDidUpdate(prevProps) {
    console.log('props values', this.props)
    console.log('Previous props', prevProps)
  }

  render() {
    return (
      <div>
        <Button onClick={this.switchBorder}>Agregar / Quitar Borde</Button>
        {this.state.isBordered && 
        <List bordered={this.state.isBordered} dataSource={pizzas} renderItem={
          (item) => (
            <List.Item onClick={this.changeColor} style={{color: this.state.color}}>{item}</List.Item>
          )
        }/>}
        
      </div>
    )
  }
} 