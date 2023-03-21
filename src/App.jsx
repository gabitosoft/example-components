import { Layout, Space, Row, Col } from 'antd'

import ListPizza from './components/ListPizza'
import SignIn from './components/SignIng/SignIn'
import SideMenu from './components/SideMenu'
import AppHeader from './components/AppHeader/AppHeader'

import './App.css'

const { Header, Sider, Content, Footer } = Layout

function displayYear() {
  return new Date().getFullYear()
}

function App() {
  return (
    <Space direction="vertical" className="App-space">
      <Layout>
        <Header className="App-header">
          <AppHeader />
        </Header>
        <Layout>
          <Sider>
            <SideMenu />
          </Sider>
          <Content className="App-content">
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
          </Content>
        </Layout>
        <Footer className="App-footer">UMSS &copy; {displayYear()}</Footer>
      </Layout>
    </Space>
  )
}

export default App
