import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Server extends Component {
  render() {
    return (
      <div className="server-container">
        <p>{this.props.name}</p>
        <p>{this.props.distance} km</p>
      </div>
    );
  }
}

Server.propTypes = {
  name: PropTypes.string,
  distance: PropTypes.number,
};

Server.defaultProps = {
  name: 'error',
  distance: 0,
};

export default Server;
