import { useState, useEffect } from 'react'
import { List, Button } from 'antd'

const pizzas = ['Hawaiana', 'Torino', 'Parma', 'Bellagio']

export default function ListPizzaFunc(props) {
  const [border, setBorder] = useState(false)
  const [color, setColor] = useState('red')

  useEffect(function () {
    console.log('Updating the component! useEffet')
  })

  function switchBorder() {
    console.log('Switch Border')
    const oldValue = border
    setBorder(!oldValue)
  }

  function changeColor() {
    const numberColor = Math.floor(Math.random()*16777215).toString(16)
    const color = "#".concat(numberColor)
    setColor(color)
  }

  return (
    <div>
      <Button onClick={switchBorder}>Agregar / Quitar Border</Button>
      {border && 
      <List bordered={border} dataSource={pizzas} renderItem={
        (item) => (
          <List.Item onClick={changeColor} style={{color: color}}>{item}</List.Item>
        )
      }/>}
    </div>
  )
}