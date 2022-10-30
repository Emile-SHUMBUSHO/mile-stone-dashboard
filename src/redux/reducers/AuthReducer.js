import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";
import * as actionTypes from '../actionTypes'

const authState = {
  isLoggedIn: false,
  user: {
    name: "",
    expires_at: "",
    jwttoken: "",
    authorities: [],
  },
};
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    const { expires_at, jwttoken } = authobj.user;
    if (new Date(expires_at) > new Date()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
      return authobj;
    }
    return authState;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();
const authreducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.jwttoken}`;
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;

    // case AuthActionType.LOGOUT_SUCCESS:
    //   localStorage.removeItem("auth");
    //   return authState;

    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      console.log('payload', action.payload)
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.jwttoken}`;
      localStorage.setItem("auth", JSON.stringify(loginAuthState));
      return loginAuthState;

    default:
      return state;
  }
};

const userReducer = (state = {}, action)=>{
  switch (action.type){
    case actionTypes.LOGIN_REQUEST:
      console.log('login request')
      return {...state, loading: true}
 
    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload}`;
      localStorage.setItem("auth", JSON.stringify(loginAuthState));
      return loginAuthState;
      
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return authState;

    default:
     return state
  }
}

export default userReducer;
