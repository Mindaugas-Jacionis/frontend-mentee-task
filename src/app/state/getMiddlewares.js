import { applyMiddleware } from 'redux';
import { stateTransformer } from 'redux-seamless-immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
  stateTransformer: stateTransformer
});

const midlewares = [thunk, logger];

export default applyMiddleware(...midlewares);
