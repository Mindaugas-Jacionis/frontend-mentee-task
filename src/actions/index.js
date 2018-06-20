import 'whatwg-fetch';

export const LOG_IN = 'users:logUserIn';
export const LOG_OUT = 'users:logUserOut';
export const GET_SERVERS = 'users:getServers';
export const SHOW_ERROR = 'users:showError';

const getServers = (servers) => ({
    type: GET_SERVERS,
    payload: {
      servers: servers
    }
  }
)

function logUserIn(token) {

  sessionStorage.setItem("token", token);

  return {
    type: LOG_IN,
    payload: {
      isLogged: true
    }
  }
}

export function logUserOut() {

  sessionStorage.removeItem("token");

  return {
    type: LOG_OUT,
    payload: {
      isLogged: false
    }
  }
}

function showError(error, type) {
  let errorMsg = error;

  if (error === 'Unauthorized')
    if (type === 'signin') errorMsg = 'The user name or password is incorrect. Please try again.';
    else if (type === 'servers') errorMsg = 'Something went wrong. Try logging out and back in.';

  return ({
    type: SHOW_ERROR,
    payload: {
      error: errorMsg
    }
  });
}

export const authorization = (username, password) => (dispatch) =>
  new Promise ((resolve, reject) => {
    fetch('http://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then( response => {
      if (response.ok) {
          response.json().then( result => {
            dispatch(logUserIn(result.token));
            resolve(result);
        })
      } else {
        let error = new Error(response.statusText)
        error.response = response
        dispatch(showError(response.statusText, "signin"))
        reject(error);
      }
    })
    .catch( error => console.log(error));
  });

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
