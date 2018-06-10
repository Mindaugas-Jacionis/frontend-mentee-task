import React, { Component } from 'react';
import ServerList from '../../components/ServerList';

class Servers extends Component {

  state = {
    token: '',
    servers: [],
    isFetching: true
  }

  componentDidMount() {

    fetch('http://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'tesonet',
        password: 'partyanimal',
      })
    }).then( response => response.json())
      .then( result => this.setState({ token: result.token }))
      .then( () => {

        fetch('http://playground.tesonet.lt/v1/servers', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.state.token}`
            }
          }).then( response => response.json())
            .then( result => this.setState({ servers: result, isFetching: false }));

      });

  }

  render() {
    const { servers, isFetching } = this.state;

    return (
      <div>
        {
          isFetching && servers.length === 0
          &&
          <p>No servers have been found.</p>
        }
        {
          !isFetching && servers.length !== 0
          &&
          <ServerList servers={this.state.servers} />
        }
      </div>
    );
  }
}

export default Servers;
