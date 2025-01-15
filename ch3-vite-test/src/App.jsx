import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      {/* 자식 컴포넌트 */}
      <MyComponent name="데이터를 부모에서 자식으로 ㅈ, 속성은 name으로 전달" />
    </>
  );
}

export default App;
