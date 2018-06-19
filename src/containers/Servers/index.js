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

  componentWillMount() {
    if (this.props.isLogged)
      this.props.onAPIRequest();
    else {
      this.props.history.replace("/");
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isLogged)
      this.props.history.replace("/");
    else {
      setTimeout(() => this.setState({
          servers: newProps.servers
        }, () => {
          this.setState({
            isFetching: false
          })
      }), 500);
    }
  }

  render() {
    console.log("Servers container has been rendered.");

    const { servers, isFetching } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
    servers: state.servers,
    isLogged: state.isLogged
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
