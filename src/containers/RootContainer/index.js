import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import { Login, Servers } from '../';
import './index.css';

export class RootContainer extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.updateState(localStorage.getItem('token'));
    }
  }

  createServerRoutes = () => (
    <Switch>
      <Route path="/servers" exact component={Servers} />
      <Redirect to="/servers" />
    </Switch>
  );

  createLoginRoutes = () => (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  render() {
    const hasToken = !!localStorage.getItem('token');
    return (
      <div className="root-component">
        {hasToken ? this.createServerRoutes() : this.createLoginRoutes()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateState: token => dispatch(actions.updateState(token)),
});

RootContainer.propTypes = {
  updateState: PropTypes.func,
};

RootContainer.defaultProps = {
  updateState: () => {},
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(RootContainer));
