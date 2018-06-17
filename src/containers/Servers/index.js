import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiRequest } from '../../actions';
import ServerList from '../../components/ServerList';
import Spinner from '../../components/Spinner';

class Servers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '',
      servers: [],
      isFetching: true
    }
  }

  componentDidMount() {
    this.props.onAPIRequest();
  }

  componentWillReceiveProps(newProps) {
    setTimeout(() => this.setState({
      servers: newProps.servers
    }, () => {
      this.setState({
        isFetching: false
      })
    }), 500);
  }

  render() {
    const { servers, isFetching } = this.state;

    return (
      <div style={centrifyingDiv}>
        {
          isFetching && servers.length === 0
          &&
          <Spinner spinnerType="serverSpinner" />
        }
        {
          !isFetching && servers.length > 0
          &&
          <ServerList servers={servers} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    servers: state.servers
});

const mapActionsToProps = {
  onAPIRequest: apiRequest
}

const centrifyingDiv = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default connect(mapStateToProps, mapActionsToProps)(Servers);
