import React, { Component } from 'react';

import CSSModule from './components/CSSModule';
import SassComponent from './components/SassComponent';



class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        {/* <CSSModule /> */}
      </div>
    );
  }
}

export default App;