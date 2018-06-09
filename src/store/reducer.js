import * as actionTypes from "./actionTypes";

const initialState = {
    token: "",
    servers: "",
    loading: false
}

const authSuccess = (state, action) =>{
    localStorage.setItem("token", action.token);
   
    return {
        ...state,
        token: action.token,
        loading: false
    }
}

const saveServers = (state, action) =>{
    let sortedServers = [...action.servers];
    sortedServers.sort((a,b)=>{
        if(a.distance - b.distance <0){
            return -1;
        } else if (a.distance - b.distance === 0){
            if(a.name.charCodeAt(0)<b.name.charCodeAt(0)){
                return -1;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    });
    return{
        ...state,
        servers: sortedServers
    }
}

const logout = (state, action) =>{
    localStorage.removeItem("token");

    return {
        token: "",
        servers: "",
        loading: false
    }
}

const authStart = (state, action) =>{
    return {
        ...state,
        loading: true
    }
}

const authFail = (state, action) =>{
    return {
        ...state,
        loading: false
    }
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
        return authSuccess(state, action);
        case actionTypes.SAVE_SERVERS:
        return saveServers(state, action);
        case actionTypes.AUTH_LOGOUT:
        return logout();
        case actionTypes.AUTH_START:
        return authStart();
        case actionTypes.AUTH_FAIL:
        return authFail();
        default:
        return state;
    }
}

export default reducer;