import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './component/Count';
import Info from './component/Info';

function App() {
  return (
    <>
      <h1 className="react">ch8 hooks 함수형 컴포넌트 추가 기능 확인</h1>
      <Counter />
      <Info />
    </>
  );
}

export default App;
