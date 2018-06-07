import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  };

  usernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  passwordChangeHandler = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input 
          onChange={this.usernameChangeHandler}
          placeholder="Username" type="text" required />
          <input 
          onChange={this.passwordChangeHandler}
          placeholder="Password" type="password" required />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => dispatch(actions.auth(username, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
