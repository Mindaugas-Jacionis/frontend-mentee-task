import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import logo from '../../assets/logos/testio-logo-light.png';
import { Spinner, UserIcon, PassIcon } from '../../components';
import './index.css';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.history.push('/servers');
    }
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <div className="login-logo-container">
            <img src={logo} alt="logo" />
          </div>
          <form className="login-form" onSubmit={this.formSubmitHandler}>
            <label htmlFor="username">
              <UserIcon className="login-icon" />
              <input
                name="username"
                onChange={this.usernameChangeHandler}
                placeholder="Username"
                type="text"
                required
              />
            </label>
            <label htmlFor="password">
              <PassIcon className="login-icon" />
              <input
                name="password"
                onChange={this.passwordChangeHandler}
                placeholder="Password"
                type="password"
                required
              />
            </label>
            <button>{this.props.loading ? <Spinner /> : 'Log in'}</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(actions.auth(username, password)),
});

const mapStateToProps = state => ({
  token: state.token,
  loading: state.loading,
});

Login.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
  onLogin: PropTypes.func,
  /* eslint-disable */
  history: PropTypes.object,
  /* eslint-enable */
};

Login.defaultProps = {
  token: '',
  loading: false,
  onLogin: () => {},
  history: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
