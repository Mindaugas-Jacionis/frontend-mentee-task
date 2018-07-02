import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';

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

const mapStateToProps = (state, props) => ({
  isLogged: state.AUTH.isLogged
})


export default withRouter(connect(mapStateToProps, null)(App));
