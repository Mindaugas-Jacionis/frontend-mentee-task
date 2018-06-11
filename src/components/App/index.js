import React, { Component } from 'react';
import Main from '../Main';
import Header from '../Header';
import './App.scss';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <Main />

      </div>
    );
  }
}

export default App;
