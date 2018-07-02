import 'whatwg-fetch';

import * as types from './actionTypes';

const getServers = (servers) => ({
    //types: [GET_SERVERS, GET_SERVERS_SUCCESS, GET_SERVERS_FAILURE],
    type: types.GET_SERVERS,
    payload: {
      servers: servers
    }
  }
)

function showError(error, type) {
  let errorMsg = error;

  if (error === 'Unauthorized')
    if (type === 'signin') errorMsg = 'The user name or password is incorrect. Please try again.';
    else if (type === 'servers') errorMsg = 'Something went wrong. Try logging out and back in.';

  return ({
    type: types.SHOW_ERROR,
    payload: {
      error: errorMsg
    }
  });
}

export const apiRequest = () => (dispatch) =>
  new Promise ((resolve, reject) => {
    fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
      }).then( response => {
        if (response.ok) {
            response.json().then( servers => {
              dispatch(getServers(servers));
              resolve();
          })
        } else {
          let error = new Error(response.statusText)
          error.response = response
          dispatch(showError(response.statusText, "servers"))
          reject(error);
        }
      })
      .catch( error => console.log(error));
  });
