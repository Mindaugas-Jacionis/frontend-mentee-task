import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {

    // move to App js ? ->>
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getServers(token);
    }
  }

  //find better place to redirect ? -->
  componentWillReceiveProps(nextProps){
      if (nextProps.servers) {
        this.props.history.push("/servers");
      }
  }

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
              placeholder="Username"
              type="text"
              required
            />
            <input
              onChange={this.passwordChangeHandler}
              placeholder="Password"
              type="password"
              required
            />
            <button>Log in</button>
          </form>
        </div>
      );
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => dispatch(actions.auth(username, password)),
    getServers: token => dispatch(actions.getServers(token))
  };
};

const mapStateToProps = state => {
  return {
    servers: state.servers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
