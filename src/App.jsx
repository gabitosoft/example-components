import { Layout, Space, Row, Col } from 'antd'
import ListPizzaFunc from './ListPizzaFunc'
import SignIn from './SignIn'

import './App.css'

const { Header, Content, Footer } = Layout

function displayYear() {
  return new Date().getFullYear()
}

function App() {
  return (
    <Space direction="vertical" className="App-space">
      <Layout>
        <Header className="App-header">Pizzas</Header>
        <Content className="App-content">
          <Row>
            <Col span={6}>
              <ListPizzaFunc />
            </Col>
            <Col span={12}>
              <img className="App-image-content" alt="Pizza Menu" src="./assets/pizza-menu.jpg"/>
            </Col>
            <Col span={6}>
              <SignIn />
            </Col>
          </Row>
        </Content>
        <Footer className="App-footer">UMSS &copy; {displayYear()}</Footer>
      </Layout>
    </Space>
  )
}

export default App
