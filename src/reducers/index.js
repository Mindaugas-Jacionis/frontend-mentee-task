import { LOG_IN, LOG_OUT, GET_SERVERS, SHOW_ERROR } from '../actions';

const initialState = {
    isLogged: false,
    servers: [],
    error: null
};

export default function mainReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOG_IN:
          return {...state, isLogged: true};
    case LOG_OUT:
          return {...state, isLogged: false};
    case GET_SERVERS:
          return {...state, servers: payload.servers};
    case SHOW_ERROR:
          return {...state, error: payload.error};
    default:
          return state;
  }
};
