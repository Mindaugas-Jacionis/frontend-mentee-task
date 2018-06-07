import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (username, password) =>{
    return dispatch =>{
        dispatch(authStart());

        const loginData = {
            username,
            password
        }
        console.log(loginData);
        axios.post('http://playground.tesonet.lt/v1/tokens', loginData)
        .then(response=>{
            console.log(response);
            dispatch(authSuccess(response))
        })
        .catch(error=>{
            console.log(error);
            dispatch(authFail());
        })
    }
}

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const authFail = () =>{
    return {
        type: actionTypes.AUTH_FAIL
    }
}

export const authSuccess = (data) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        data
    }
}