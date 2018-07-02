import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../../../auth';
import server from '../../../servers';
import ErrorMsg from '../../components/ErrorMsg';
import ServerList from '../../components/ServerList';
import Spinner from '../../components/Spinner';

class Servers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '',
      servers: [],
      isFetching: true,
      erro: ''
    }
  }

  loadServers() {
    setTimeout(() => this.setState({servers: this.props.servers},
                  () => this.setState({isFetching: false})
              ), 500);
  }

  componentWillMount() {

    if (sessionStorage.getItem("token"))
          this.props.onAPIRequest()
            .then(() => this.loadServers())
            .catch(error => this.setState({ error: this.props.error }));

    else  this.props.history.replace("/");

  }

  componentWillReceiveProps(newProps) {

    if (!newProps.isLogged){
          if (!sessionStorage.getItem("token"))
              this.props.history.replace("/");
    }
    else  this.loadServers();

  }

  render() {

    const { servers, isFetching } = this.state;

    return (
      <div>

        {
          this.state.error && <ErrorMsg error={this.state.error} />
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
    servers: server.selectors.getServers(state),
    error: server.selectors.getError(state)
});

const mapActionsToProps = {
  onAPIRequest: server.actions.apiRequest
}

const centrifyingDiv = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default connect(mapStateToProps, mapActionsToProps)(Servers);
