import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Servers from '../../containers/Servers';
import Signin from '../../containers/Signin';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/servers" component={Servers} />
      <Route exact path="/" component={Signin} />
    </Switch>
)}

export default withRouter(Main);
