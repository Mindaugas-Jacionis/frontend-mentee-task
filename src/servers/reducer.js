import * as types from './actionTypes';

const initialState = {
    servers: [],
    error: null,
};

export default function serverReducer(state = initialState, { type, payload }) {
  if (!sessionStorage.getItem("token")) {
    state.servers = [];
  }
  switch (type) {
    case types.GET_SERVERS:
          return {...state, servers: payload.servers};
    case types.SHOW_ERROR:
          return {...state, error: payload.error};
    default:
          return state;
  }
};
