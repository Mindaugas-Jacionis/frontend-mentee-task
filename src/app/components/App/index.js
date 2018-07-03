import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth from '../../../auth';
import Router from '../Router';
import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pig" />
        {
          sessionStorage.getItem("token")
          &&
          <Header logoutFunc={this.props.onLogoutRequest} />
        }
        <Router />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isLogged: state.AUTH.isLogged
})

const mapActionsToProps = {
  onLogoutRequest: auth.actions.logUserOut
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
