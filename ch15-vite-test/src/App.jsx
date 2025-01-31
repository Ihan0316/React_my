
import './App.css'
import ColorBox from './components/ColorBox'
import SelectColors from './components/SelectColors'
import ColorContext, { ColorProvider } from './contexts/color'

function App() {


  return (
    <>
      <h1 className='react'>ch15 context API 전역 이용하기</h1>
      {/* <ColorContext.Provider value={{ color: 'blue' }}>
        <ColorBox />
      </ColorContext.Provider> */}
      {/* 방법2, 적용하기, */}
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </>
  )
}

export default App
