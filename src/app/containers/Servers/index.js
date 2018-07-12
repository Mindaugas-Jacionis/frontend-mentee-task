import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../../../auth';
import server from '../../../servers';
import { ErrorMsg, Spinner, ServerList } from '../../components';

export class Servers extends Component {

  componentWillMount() {
    if (sessionStorage.getItem("token")) {
        this.props.onAPIRequest()
          .then(() => {})
          .catch(error => this.setState({ error: this.props.error }));
    }
    else  this.props.history.replace("/");
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isLogged){
          if (!sessionStorage.getItem("token"))
              this.props.history.replace("/");
    }
  }

  render() {
    const { servers, isFetching, error } = this.props;

    return (
      <div>

        {
          error && <ErrorMsg error={error} />
        }

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
    isLogged: auth.selectors.isLogged(state),
    isFetching: server.selectors.isFetching(state),
    servers: server.selectors.getServers(state),
    error: server.selectors.getError(state)
});

const mapActionsToProps = {
  onAPIRequest: server.actions.getServers
}

const centrifyingDiv = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default connect(mapStateToProps, mapActionsToProps)(Servers);
