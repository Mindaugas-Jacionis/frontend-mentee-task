import 'whatwg-fetch';

export const LOG_IN = 'users:logUserIn';
export const LOG_OUT = 'users:logUserOut';
export const GET_SERVERS = 'users:getServers';
export const SHOW_ERROR = 'users:showError';

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

function getServers(servers){
  return {
    type: GET_SERVERS,
    payload: {
      servers: servers
    }
  }
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: {
      error: `Error: ${error}`
    }
  }
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
            console.log("API pasiektas. Token gautas.");
            dispatch(logUserIn(result.token));
            resolve(result);
        })
      } else {
        let error = new Error(response.statusText)
        error.response = response
        dispatch(showError(error.response.statusText), () => {throw error})
        reject(error);
      }
    });
  });

export function apiRequest() {
  return dispatch => {
    fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
      }).then( response => {
        if (response.ok) {
            response.json().then( result => {
              console.log("API pasiektas. Serveriai gauti.");
              dispatch(getServers(result));
          })
        } else {
          let error = new Error(response.statusText)
          error.response = response
          dispatch(showError(error.response.statusText), () => {throw error})
        }
      });
  }
}
