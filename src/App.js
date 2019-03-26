import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div aria-live="polite" className="App">
        <Main />
      </div>
    );
  }
}

export default App;
