import { Button, Modal, Input, Space } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../../features/pizzas/pizzaSlice'
import { v4 as uuid } from 'uuid'

export default function FormPizza() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [pizza, setPizza] =  useState({
    name: '',
    description: ''
  })

  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    dispatch(addPizza({
      ...pizza,
      id: uuid()
    }))
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onChangeName = (evt) => {
    // console.log(evt.target.value)
    setPizza({
      ...pizza,
      name: evt.target.value
    })
  }

  const onChangeDescription = (evt) => {
    // console.log(evt.target.value)
    setPizza({
      ...pizza,
      description: evt.target.value
    })
    // [evt.target.name]: evt.target.value
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>Nueva</Button>
      <Modal title="Nueva Pizza" destroyOnClose open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Space.Compact align="center" direction="vertical" block>
          <Input name="name" placeholder="Nombre pizza" onChange={onChangeName}/>
          <br />
          <Input.TextArea name="description" placeholder="Descripcion" onChange={onChangeDescription}/>
        </Space.Compact>
      </Modal>
    </div>
  )
}
