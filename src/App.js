import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import { RootContainer } from './containers';

export const app = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RootContainer />
    </BrowserRouter>
  </Provider>
);

export default app;
