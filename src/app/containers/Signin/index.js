import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../../../auth';
import { ErrorMsg, Spinner, SvgIcon } from '../../components';
import { logoTestio, dudeInWave } from '../../../assets';
import './Signin.scss';

export class Signin extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, error: '' });
  };

  handleSubmit = (event) =>{
    const { username, password } = this.state;

    event.preventDefault();

    this.setState({ isLoading: true });

    setTimeout(() =>
      this.props.onLoginRequest(username, password)
        .then(result => this.props.history.push("/servers"))
        .catch(error => this.setState({ isLoading: false, error: this.props.error }))
      ,300);

  }

  componentWillMount() {
    if (!!sessionStorage.getItem("token")) {
      this.props.history.push("/servers");
    }
  }

  render() {

    return (
      <div className="signin-container">
        <img className='bg' src={dudeInWave} alt="Dude in Wave" />

        {
          this.state.error && <ErrorMsg error={this.state.error} />
        }

        <form onSubmit={this.handleSubmit} id="loginForm">

          <div className="centrify-logo">
            <img src={logoTestio} alt="Testio logo" className="testio-logo" />
          </div>

          <div>
            <SvgIcon iconType="userIcon" className="input-ico" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="input-form"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <SvgIcon iconType="passIcon" className="input-ico" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input-form"
              value={this.state.password}
              onChange={this.handleChange}
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
  isLogged: auth.selectors.isLogged(state),
  error: auth.selectors.getError(state)
})


const mapActionsToProps = {
  onLoginRequest: auth.actions.authorization
}

export default connect(mapStateToProps, mapActionsToProps)(Signin);
