import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Servers from '../../containers/Servers';

const Main = (props) => (
  <Switch>
    <Route exact path='/' component={Servers} />
  </Switch>
);

export default Main;
