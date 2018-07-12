import * as types from './actionTypes';

const initialState = {
    servers: [],
    error: null,
    isFetching: true
};

export default function serverReducer(state = initialState, { type, payload }) {
  if (!sessionStorage.getItem("token")) {
    state.servers = [];
  }
  switch (type) {
    case types.GET_SERVERS_REQUEST:
          return {...state, isFetching: true};
    case types.GET_SERVERS_SUCCESS:
          sortServers(payload.servers);
          return {...state, servers: payload.servers, isFetching: false};
    case types.GET_SERVERS_FAILURE:
          return {...state, error: payload.error, isFetching: false};
    default:
          return state;
  }
};

const sortServers = (servers) => {
  servers.sort((a, b) => {
    if (a.distance - b.distance < 0){
      return -1;
    }
    else if (a.distance === b.distance) {
      if (a.name.charAt(0) < b.name.charAt(0)){
        return -1;
      }
      else return 1;
    }
    else return 1;
  });
}
