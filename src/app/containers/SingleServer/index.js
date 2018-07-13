import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../../../auth';
import servers from '../../../servers';
import { SvgIcon } from '../../components';
import './SingleServer.scss';

export class SingleServer extends Component {
  state = {
    serverInfo: []
  }

  componentWillMount() {
    if (!sessionStorage.getItem("token")) {
        this.props.history.replace("/");
      }

    this.setState({ serverInfo: JSON.parse(sessionStorage.getItem('server')) });
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isLogged){
          if (!sessionStorage.getItem("token"))
              this.props.history.replace("/");
    }
  }

  render() {
    const { serverInfo } = this.state;

    return (
      <div className="serverInfo-container">
        {
          !!serverInfo ?
          <div>
            <h1>{serverInfo.name}</h1>
            <h2>Distance: {serverInfo.distance} km</h2>
          </div>
          :
          <h2>Server has not been loaded. Please go back and try again.</h2>
        }
        <Link to='/servers' className="back-link" >
          <SvgIcon iconType="backIcon" className="ico-back" />
          <div className="backText">Back</div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isLogged: auth.selectors.isLogged(state),
    servers: servers.selectors.getServers(state)
});

export default connect(mapStateToProps, null)(SingleServer);
