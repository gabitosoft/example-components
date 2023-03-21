import { Menu } from 'antd'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import './SideMenu.css'

const items = [
  { key: 1, label: 'Pizzas' },
  { key: 2, label: 'Tamanos' },
  { key: 3, label: 'Ingredientes' }
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