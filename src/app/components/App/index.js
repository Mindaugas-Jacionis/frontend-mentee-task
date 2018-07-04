import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth from '../../../auth';
import { MainRouter, Header } from '../';

export class App extends Component {
  render() {
    return (
      <div>
        {
          sessionStorage.getItem("token")
          &&
          <Header logoutFunc={this.props.onLogoutRequest} />
        }
        <MainRouter />
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
