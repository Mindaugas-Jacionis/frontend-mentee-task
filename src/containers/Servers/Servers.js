import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "../../components/Server/Server";
import * as actions from "../../store/actions";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import "./Servers.css";

export class Servers extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getServers(token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token === "") {
      this.props.history.push("/");
    }
  }

  render() {
    let servers = null;
    
    if (this.props.loading) {
      servers = <Spinner marginTop="30px" color="#9fd533" />;
    }

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

    if (this.props.error) {
      servers = (
        <p
          style={{
            color: "red",
            margiTop: "30px",
            textAlign: "center"
          }}
        >
          Something went wrong
        </p>
      );
    }

    return (
      <div className="servers-container">
        <Header logout={this.props.logout} />
        <div className="servers-list-header">
          <p>SERVERS</p>
          <p>DISTANCE</p>
        </div>
        <div className="servers-list">{servers}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getServers: token => dispatch(actions.getServers(token)),
    logout: () => dispatch(actions.authLogout())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    servers: state.servers,
    token: state.token,
    loading: state.loading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Servers);
