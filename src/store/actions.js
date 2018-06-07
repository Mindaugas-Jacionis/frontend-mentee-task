import * as actionTypes from "./actionTypes";
import axios from "axios";


export const saveServers = serversArray =>{
    return {
        type: actionTypes.SAVE_SERVERS,
        servers: serversArray
    }
}

export const getServers = token => {
    console.log(token);
  return dispatch => {
    axios
      .get("http://playground.tesonet.lt/v1/servers", {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch(saveServers(response.data))
      });
  };
};

export const auth = (username, password) => {
  return dispatch => {
    dispatch(authStart());

    const loginData = {
      username,
      password
    };
    console.log(loginData);
    axios
      .post("http://playground.tesonet.lt/v1/tokens", loginData)
      .then(response => {

        dispatch(authSuccess(response.data.token));
        dispatch(getServers(response.data.token));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail());
      });
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token:token
  };
};
