import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorization } from '../../actions';
import ErrorMsg from '../../components/ErrorMsg';
import Spinner from '../../components/Spinner';
import logoTestio from '../../assets/logotype-testio-light.png';
import './Signin.scss';

class Signin extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, error: '' });
  }

  handleSubmit (event){

    event.preventDefault();

    this.setState({ isLoading: true })

    const { username, password } = this.state;

    setTimeout(() =>
      this.props.onLoginRequest(username, password)
        .then(result => this.props.history.push("/servers"))
        .catch(error => this.setState({ isLoading: false, error: this.props.error }))
      ,300);

  }

  componentWillMount() {
    if (!!sessionStorage.getItem("token"))
      this.props.history.push("/servers");
  }

  render() {

    return (
      <div className="signin-container">
        {
          this.state.error && <ErrorMsg error={this.state.error} />
        }

        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className="centrify-logo">
            <img src={logoTestio} alt="Testio logo" className="testio-logo" />
          </div>

          <div>
            <span id="ico-user" className="input-ico"></span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-form"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div>
            <span id="ico-pass" className="input-ico"></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-form"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <button type="submit" className="login-btn">
            { this.state.isLoading ? <Spinner spinnerType="loginSpinner" /> : "Log In" }
          </button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  error: state.error
})

const mapActionsToProps = {
  onLoginRequest: authorization
}

export default connect(mapStateToProps, mapActionsToProps)(Signin);
