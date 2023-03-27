import { Row, Col } from 'antd'
import SignIn from './../components/SignIng/SignIn'

export default function Home() {
  return (
    <Row>
      <Col span={21}>
        <img className="App-image-content" alt="Pizza Menu" src="./assets/pizza-menu.jpg"/>
      </Col>
      <Col span={3}>
        <SignIn />
      </Col>
    </Row>
  )
}