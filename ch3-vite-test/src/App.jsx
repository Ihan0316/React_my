import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      {/* 자식 컴포넌트 */}
      {/* 1, props 이용해서 데이터 전달 */}
      {/* <MyComponent name="데이터를 부모에서 자식으로, 속성은 name으로 전달" /> */}
      {/* 2, props를 전달할 때 defaultProps 설정 */}
      {/* <MyComponent /> */}
      {/* 3, children 이용해서 데이터 전달 */}
      <MyComponent name="동시에 같이 보내기">
        children 요소로 데이터 전달하기
      </MyComponent>
    </>
  );
}

export default App;
