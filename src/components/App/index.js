import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../Main';
import Header from '../Header';
import { authorization, logUserOut, apiRequest } from '../../actions';
import 'whatwg-fetch';

class App extends Component {

  render() {

    return (
      <div>

        {
          sessionStorage.getItem("token")
          &&
          <Header />
        }

        <Main />

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({
    isLogged: state.isLogged
  })
};

const mapActionsToProps = {
  onLogoutRequest: logUserOut,
  onLoginRequest: authorization,
  onAPIRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
