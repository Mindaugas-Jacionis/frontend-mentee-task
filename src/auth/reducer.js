import * as types from './actionTypes';
/*

immutable / seemless-immutable.js

egghead.io - dan abramov redux course

*/

const initialState = {
    isLogged: false,
    servers: [],
    error: null,
    isFetching: false
};

export default function authReducer(state = initialState, { type, payload }) {
  if (!!sessionStorage.getItem("token")) {
    state.isLogged = true;
  }
  switch (type) {
    case types.AUTH_REQUEST:
          return {...state, isFetching: true};
    case types.AUTH_SUCCESS:
          return {...state, isLogged: true, token: payload.token, isFetching: false};
    case types.AUTH_FAILURE:
          return {...state, error: payload.error, isFetching: false};
    case types.LOG_OUT:
          return {...state, isLogged: false, servers: []};
    default:
          return state;
  }
};
