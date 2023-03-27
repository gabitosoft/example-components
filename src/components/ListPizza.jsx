import { List, Button } from 'antd'
import { useSelector } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'
import { deletePizza } from '../features/pizzas/pizzaSlice'
import { useDispatch } from 'react-redux'

export default function ListPizzaFunc(props) {
  const pizzas = useSelector(state => state.pizzas)

  const dispatch = useDispatch()

  const onClickDelete = (id) => {
    dispatch(deletePizza({ id }))
  }

  return (
    <List 
      dataSource={pizzas} 
      renderItem={
        (item) => (
          <List.Item 
            key={item.id} 
            actions={[<Button shape="circle" type="primary" danger onClick={() => onClickDelete(item.id)} icon={<DeleteOutlined />}></Button>]}>
            <List.Item.Meta 
              avatar={<img width="50" src="./assets/pizza-image.png" alt="pizza-avatar" />}
              title={item.name} 
              description={item.description}
            />
          </List.Item>
        )
      }
    />
  )
}
