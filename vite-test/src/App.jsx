import './App.css';

function App() {
  const name = '리액트';
  const number = 0;

  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    // font-size -> fontSize
    fontSize: '48px',
    fontWeight: 'bold',
    // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 pX로 지정됩니다.
  };

  // jsx 문법은 우리가 보기에는 HTML로 보이지만
  // 실제 문법은
  // return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));
  return (
    <>
      {/* 순서1 */}
      <div>
        {/* <fragment> */}
        <h1>Hello React</h1>
        <h2>잘 작동 하니? {name}</h2>
        {/* </fragment> */}
      </div>

      {/* 순서2 */}
      <div>
        {/* 조건1 */}
        {name === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </div>

      {/* 조건2 A && B, A가 참인 경우만 B를 그려준다 */}
      <div>{name === '리액트' && <h2>리액트입니다.</h2>}</div>

      {/* 조건이 거짓일때, null을 반환하면 화면에 아무것도 그리지 않는다 주의!!*/}
      <div>{number && <h2>리액트 입니다.</h2>}</div>

      {/* 스타일 지정 */}
      <div style={style}>{name}</div>
      <div
        style={{
          backgroundColor: 'black',
          color: 'aqua',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16,
        }}
      ></div>
    </>
  );
}

export default App;
