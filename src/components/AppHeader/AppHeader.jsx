import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Button } from 'antd'
import { BgColorsOutlined } from '@ant-design/icons'
import './AppHeader.css'

export default function AppHeader() {

  const { contextTheme, switchTheme } = useContext(ThemeContext)

  const onClickChangeTheme = () => {
    switchTheme()
  }

  return (
    <div className="App-container-header ">
      <span className="App-title-header" style={{ color: contextTheme.color }}>PizzApp</span>
      <Button shape="circle" onClick={onClickChangeTheme} icon={<BgColorsOutlined />}></Button>
    </div>
  )
}