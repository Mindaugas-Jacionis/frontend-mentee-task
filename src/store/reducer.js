import * as actionTypes from './actionTypes';

const initialState = {
  token: '',
  servers: [],
  loading: false,
  error: false,
};

const authSuccess = (state, action) => {
  localStorage.setItem('token', action.token);

  return {
    ...state,
    token: action.token,
    loading: false,
    error: false,
  };
};

const updateState = (state, action) => ({
  ...state,
  token: action.token,
});

const saveServers = (state, action) => {
  const sortedServers = [...action.servers];
  sortedServers.sort((a, b) => {
    if (a.distance - b.distance < 0) {
      return -1;
    } else if (a.distance - b.distance === 0) {
      if (a.name.charCodeAt(0) < b.name.charCodeAt(0)) {
        return -1;
      }
      return 1;
    }
    return 1;
  });
  return {
    ...state,
    servers: sortedServers,
    loading: false,
    error: false,
  };
};

const logout = () => {
  localStorage.removeItem('token');

  return {
    token: '',
    servers: '',
    loading: false,
    error: false,
  };
};

const fetchStart = state => ({
  ...state,
  loading: true,
});

const fetchFail = state => ({
  ...state,
  loading: false,
  error: true,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SAVE_SERVERS:
      return saveServers(state, action);
    case actionTypes.AUTH_LOGOUT:
      return logout();
    case actionTypes.FETCH_START:
      return fetchStart(state);
    case actionTypes.FETCH_FAIL:
      return fetchFail(state);
    case actionTypes.UPDATE_STATE:
      return updateState(state, action);
    default:
      return state;
  }
};

export default reducer;
