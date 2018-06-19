import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorization } from '../../actions';
import Spinner from '../../components/Spinner';
import logoTestio from '../../assets/logotype-testio-light.png';
import './Signin.scss';

class Signin extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState({ isLoading: true })

    const { username, password } = this.state;
    this.props.onLoginRequest(username, password).then(result => {

      console.log("Success. Token: "+result.token);

      this.props.history.push('/servers');

    });
  }

  render() {
    console.log("Rendering Login");
    return (
      <div className="signin-container">

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
  token: state.token
})

const mapActionsToProps = {
  onLoginRequest: authorization
}

export default connect(mapStateToProps, mapActionsToProps)(Signin);
