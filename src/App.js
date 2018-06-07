import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/Login/Login";
import Servers from "./containers/Servers/Servers";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import "./App.css";

class App extends Component {
  //if token stored in local storage ->
  //update redux state
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.updateState(localStorage.getItem("token"));
    }
  }

  //guard routes depending on login state
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/servers" exact component={Servers} />
        <Redirect to="/" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: token => dispatch(actions.authSuccess(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
