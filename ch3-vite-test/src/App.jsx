import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      <MyComponent />
    </>
  );
}

export default App;
