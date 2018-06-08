import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "../../components/Server/Server";
import * as actions from "../../store/actions";
import Header from "../../components/Header/Header";


class Servers extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getServers(token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.token === ""){
        this.props.history.push("/");
    }
  }

  render() {
    let servers = null;
    if (this.props.servers) {
      servers = this.props.servers.map(server => {
        return (
          <Server
            key={server.name + server.distance}
            name={server.name}
            distance={server.distance}
          />
        );
      });
    }

    return (
      <div>
        <Header logout={this.props.logout} />
        {servers}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getServers: token => dispatch(actions.getServers(token)),
    logout: ()=>dispatch(actions.authLogout())
  };
};

const mapStateToProps = state => {
  return {
    servers: state.servers,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Servers);
