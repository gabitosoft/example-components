import { Row, Col } from 'antd'
import ListPizza from './../components/ListPizza'
import SignIn from './../components/SignIng/SignIn'

export default function Home() {
  return (
    <Row>
      <Col span={6}>
        <ListPizza />
      </Col>
      <Col span={12}>
        <img className="App-image-content" alt="Pizza Menu" src="./assets/pizza-menu.jpg"/>
      </Col>
      <Col span={6}>
        <SignIn />
      </Col>
    </Row>
  )
}