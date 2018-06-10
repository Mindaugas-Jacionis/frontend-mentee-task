import * as actionTypes from "./actionTypes";
import axios from "axios";


export const saveServers = serversArray =>{
    return {
        type: actionTypes.SAVE_SERVERS,
        servers: serversArray
    }
}

export const getServers = token => {
  return dispatch => {
    dispatch(fetchStart());

    axios
      .get("http://playground.tesonet.lt/v1/servers", {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch(saveServers(response.data))
      })
      .catch(error => {
        dispatch(fetchFail());
      });
  };
};

export const auth = (username, password) => {
  return dispatch => {
    dispatch(fetchStart());

    const loginData = {
      username,
      password
    };
    axios
      .post("http://playground.tesonet.lt/v1/tokens", loginData)
      .then(response => {
        dispatch(authSuccess(response.data.token));
      })
      .catch(error => {
        dispatch(fetchFail());
      });
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START
  };
};

export const fetchFail = () => {
  return {
    type: actionTypes.FETCH_FAIL
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token:token
  };
};

export const updateState = token => {
  return {
    type: actionTypes.UPDATE_STATE,
    token:token
  };
};

export const authLogout = () =>{
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}