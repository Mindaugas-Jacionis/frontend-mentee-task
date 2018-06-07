import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "../../components/Server/Server";

class Servers extends Component {
  render() {
    const servers = this.props.servers.map(server => {
      return (
        <Server
          key={server.name}
          name={server.name}
          distance={server.distance}
        />
      );
    });

    return <div>{servers}</div>;
  }
}

const mapStateToProps = state => {
  return {
    servers: state.servers
  };
};

export default connect(mapStateToProps)(Servers);
