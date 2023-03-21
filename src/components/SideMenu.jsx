import { Menu } from 'antd'

const items = [
  { key: 1, label: 'Pizzas' },
  { key: 2, label: 'Tamanos' },
  { key: 3, label: 'Ingredientes' }
]

function SideMenu(props) {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
  )
}

export default SideMenu