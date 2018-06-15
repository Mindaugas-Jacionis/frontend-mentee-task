import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import { Header, Spinner, Server } from '../../components';
import './index.css';

export class Servers extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getServers(token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token === '') {
      this.props.history.push('/');
    }
  }

  render() {
    let servers = null;

    if (this.props.loading) {
      servers = <Spinner marginTop="30px" color="#9fd533" />;
    }

    if (this.props.servers.length) {
      servers = this.props.servers.map(server => (
        <Server
          key={server.name + server.distance}
          name={server.name}
          distance={server.distance}
        />
      ));
    }

    if (this.props.error) {
      servers = (
        <p
          style={{
            color: 'red',
            margiTop: '30px',
            textAlign: 'center',
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

Servers.propTypes = {
  logout: PropTypes.func,
  getServers: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  /* eslint-disable */
  servers: PropTypes.array,
  history: PropTypes.object,
  /* eslint-enable */
  token: PropTypes.string,
};

Servers.defaultProps = {
  logout: () => {},
  getServers: () => {},
  loading: false,
  error: false,
  servers: [],
  token: '',
  history: {},
};

const mapDispatchToProps = dispatch => ({
  getServers: token => dispatch(actions.getServers(token)),
  logout: () => dispatch(actions.authLogout()),
});

const mapStateToProps = state => ({
  servers: state.servers,
  token: state.token,
  loading: state.loading,
  error: state.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Servers);
