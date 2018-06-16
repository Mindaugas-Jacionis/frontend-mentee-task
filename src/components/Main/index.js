import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Servers from '../../containers/Servers';
import Signin from '../../containers/Signin';

const freeRoutes = () => (
  <Switch>
    <Route path='/' component={Signin} />
    <Redirect to='/' />
  </Switch>
)

const protectedRoutes = () => (
  <Switch>
    <Route path='/servers' component={Servers} />
    <Redirect to='/servers' />
  </Switch>
)

const Main = (props) => (
    <div>
      { sessionStorage.getItem("token") ? protectedRoutes() : freeRoutes() }
    </div>
)

export default withRouter(Main);
