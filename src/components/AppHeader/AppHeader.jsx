import { Button } from 'antd'
import { BgColorsOutlined } from '@ant-design/icons'
import './AppHeader.css'

export default function AppHeader() {
  const onClickChangeTheme = () => {
    console.log('on Change theme!')
  }

  return (
    <div className="App-container-header ">
      <span className="App-title-header">Pizzas</span>
      <Button shape="circle" onClick={onClickChangeTheme} icon={<BgColorsOutlined />}></Button>
    </div>
  )
}