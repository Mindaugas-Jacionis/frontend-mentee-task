import * as types from './actionTypes';
/*

immutable / seemless-immutable.js

egghead.io - dan abramov redux course

*/

const initialState = {
    isLogged: false,
    servers: [],
    error: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  if (!!sessionStorage.getItem("token")) {
    state.isLogged = true;
  }
  switch (type) {
    case types.LOG_IN:
          return {...state, isLogged: true, token: payload.token};
    case types.LOG_OUT:
          return {...state, isLogged: false, servers: []};
    case types.SHOW_ERROR:
          return {...state, error: payload.error};
    default:
          return state;
  }
};
