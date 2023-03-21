import { List } from 'antd'

const pizzas = ['Hawaiana', 'Torino', 'Parma', 'Bellagio']

export default function ListPizzaFunc(props) {
  return (
    <div>
      <List 
        dataSource={pizzas} 
        renderItem={
          (item) => (<List.Item>{item}</List.Item>)
        }
      />
    </div>
  )
}