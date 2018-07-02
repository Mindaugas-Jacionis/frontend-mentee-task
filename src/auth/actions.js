import 'whatwg-fetch';
import * as types from './actionTypes';

function logUserIn(token) {
  sessionStorage.setItem("token", token);

  return {
    type: types.LOG_IN,
    payload: {
      isLogged: true
    }
  }
}

export function logUserOut() {
  sessionStorage.removeItem("token");

  return {
    type: types.LOG_OUT,
    payload: {
      isLogged: false
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
