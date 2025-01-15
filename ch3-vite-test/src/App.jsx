import './App.css';
import Counter from './component/Counter';
import Mini1 from './component/Mini1';
import MyComponent from './component/MyComponent';
import MyComponent2 from './component/MyComponent2';
import Say from './component/Say';

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
      {/* <MyComponent name="동시에 데이터 전달">children 요소로 데이터 전달하기</MyComponent> */}
      {/* 4, props 타입 지정후, 타입 불일치 값 임의로 보내기 */}
      {/* <MyComponent name={10}>children 요소로 데이터 전달하기</MyComponent> */}
      {/* 5, favoriteNumber 속성 전달하기 */}
      {/* <MyComponent name="동시에 데이터 전달" favoriteNumber={100}>children 요소로 데이터 전달하기</MyComponent> */}
      {/* 6, 클래스형 컴포넌트로 확인하기 */}
      {/* <MyComponent2 name="동시에 데이터 전달" favoriteNumber={100}>children 요소로 데이터 전달하기</MyComponent2> */}
      {/* 7, 클래스형 컴포넌트에서 state 확인 */}
      {/* <Counter /> */}
      {/* 8, 함수형 컴포넌트에서 hooks -> useState 확인 */}
      {/* <Say /> */}
      {/* 미니실습1 */}
      <Mini1 />
    </>
  );
}

export default App;
