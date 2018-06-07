import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Login from "./containers/Login/Login";
import Servers from "./containers/Servers/Servers";

import './App.css';

class App extends Component {
  //  guard routes depending on login state ->>>
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Login}/>
        <Route path="/servers" exact component={Servers}/>
      </div>
    );
  }
}

export default App;
