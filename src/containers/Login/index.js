import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import logo from '../../assets/logos/testio-logo-light.png';
import icons from '../../assets/icons/symbol-defs.svg';
import { Spinner } from '../../components';
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

  inputChangeHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div className="login__grid">
        <div className="login__grid__item">
          <div className="login__logo">
            <img className="login__logo__img" src={logo} alt="logo" />
          </div>
          <form className="login__form" onSubmit={this.formSubmitHandler}>
            <label className="login__form__label" htmlFor="username">
              <svg className="login__form__icon">
                <use xlinkHref={`${icons}#icon-username`} />
              </svg>
              <input
                className="login__form__input"
                name="username"
                onChange={event => this.inputChangeHandler(event, 'username')}
                placeholder="Username"
                type="text"
                required
              />
            </label>
            <label className="login__form__label" htmlFor="password">
              <svg className="login__form__icon">
                <use xlinkHref={`${icons}#icon-password`} />
              </svg>
              <input
                className="login__form__input"
                name="password"
                onChange={event => this.inputChangeHandler(event, 'password')}
                placeholder="Password"
                type="password"
                required
              />
            </label>
            <button className="login__form__button" type="submit">
              {this.props.loading ? <Spinner /> : 'Log in'}
            </button>
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
