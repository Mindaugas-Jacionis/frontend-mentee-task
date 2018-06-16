import 'whatwg-fetch';

export const LOG_IN = 'users:logUserIn';
export const LOG_OUT = 'users:logUserOut';
export const GET_SERVERS = 'users:getServers';
export const SHOW_ERROR = 'users:showError';

function logUserIn(token) {
  return {
    type: LOG_IN,
    payload: {
      isLogged: true
    }
  }
}

export function logUserOut() {
  console.log("Logout'as daromas: ",sessionStorage.getItem("token"));
  sessionStorage.removeItem("token");
  console.log("Logout'as padarytas: ",sessionStorage.getItem("token"));
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

export function apiRequest() {
  return dispatch => {
    fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
      }).then( response => response.json())
      .then( result => {
        console.log("API pasiektas. Serveriai gauti.");
        dispatch(getServers(result));
      })
      .catch(error => dispatch(showError(error)));
  }
}

export function authorization(username, password) {
  return dispatch => {
    fetch('http://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then(handleErrors)
      .then( response => response.json())
      .then( result => {
        //this.setState({ token: result.token })
        sessionStorage.setItem("token", result.token);
        console.log("API pasiektas. Token gautas.");
        dispatch(logUserIn(result.token));
      })
      .catch(error => dispatch(showError()));
  }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
