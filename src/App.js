import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./containers/Login/Login";
import Servers from "./containers/Servers/Servers";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import "./App.css";

export class App extends Component {
  //if token stored in local storage ->
  //update redux state
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.updateState(localStorage.getItem("token"));
    }
  }

  render() {
    //guard routes depending on login state

    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );

    if (localStorage.getItem("token")) {
      routes = (
        <Switch>
          <Route path="/servers" exact component={Servers} />
          <Redirect to="/servers" />
        </Switch>
      );
    }

    return <div className="App">{routes}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: token => dispatch(actions.authSuccess(token))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
