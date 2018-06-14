import axios from 'axios';
import * as actionTypes from './actionTypes';

export const saveServers = serversArray => ({
  type: actionTypes.SAVE_SERVERS,
  servers: serversArray,
});

export const getServers = token => (dispatch) => {
  dispatch(fetchStart());

  axios
    .get('http://playground.tesonet.lt/v1/servers', {
      headers: { Authorization: token },
    })
    .then((response) => {
      dispatch(saveServers(response.data));
    })
    .catch(() => {
      dispatch(fetchFail());
    });
};

export const auth = (username, password) => (dispatch) => {
  dispatch(fetchStart());

  const loginData = {
    username,
    password,
  };
  axios
    .post('http://playground.tesonet.lt/v1/tokens', loginData)
    .then((response) => {
      dispatch(authSuccess(response.data.token));
    })
    .catch(() => {
      dispatch(fetchFail());
    });
};

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchFail = () => ({
  type: actionTypes.FETCH_FAIL,
});

export const authSuccess = token => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
});

export const updateState = token => ({
  type: actionTypes.UPDATE_STATE,
  token,
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});
