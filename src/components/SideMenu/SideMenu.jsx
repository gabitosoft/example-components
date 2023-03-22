import { Menu } from 'antd'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

import './SideMenu.css'

const items = [
  { key: 0, label: (<Link to="/">Home</Link>)},
  { key: 1, label: (<Link to="/pizzas">Pizzas</Link>)},
  { key: 2, label: (<Link to="/toppings">Ingredientes</Link>) },
  { key: 3, label: 'Tamanos' }
]

function SideMenu(props) {
  const  { contextTheme }  = useContext(ThemeContext)

  return (
    <Menu 
      className="App-sidemenu"
      theme={contextTheme.name} 
      style={{ backgroundColor: contextTheme.background }} 
      defaultSelectedKeys={['1']} 
      mode="inline" 
      items={items}
    />
  )
}

export default SideMenu