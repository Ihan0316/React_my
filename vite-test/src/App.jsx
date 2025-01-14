import './App.css';

function App() {
  // jsx 문법은 우리가 보기에는 HTML로 보이지만
  // 실제 문법은
  // return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));
  return (
    <>
      {/* <fragment> */}
      <h1>Hello React 안녕</h1>
      <h2>잘 작동 하니?</h2>
      <div>수정</div>
      {/* </fragment> */}
    </>
  );
}

export default App;
