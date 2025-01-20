import { Component } from 'react';
import logo from './assets/react.svg';
import './App.css';
import SassComponent from './component/SassComponent';
import CSSModule from './component/CSSModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SassComponent /> */}
        <CSSModule />
      </div>
    );
  }
}

export default App;
