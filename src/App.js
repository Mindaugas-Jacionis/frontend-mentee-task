import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Login from "./containers/Login/Login";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Login}/>
      </div>
    );
  }
}

export default App;
