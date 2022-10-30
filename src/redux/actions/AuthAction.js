import axios from "axios";
import {swerroralert, swsuccalert} from "../../components/Alerts";
import * as actionTypes from '../actionTypes'

const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};


const LoginAuthAction = (loginState,navigate) => {
  return (dispatch) => {
    dispatch({type: actionTypes.LOGIN_REQUEST})
    axios({
      method: 'POST',
      url: `/api/users/login`,
      data: {...loginState},
      validateStatus: () => true,
    }).then((resp)=> {
      if(resp.data.message){
        swerroralert(resp.data.message)
      }
      if(resp.data.Token){
        swsuccalert()
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: resp.data.Token });
        navigate('/dashboard')
      }
      console.log(resp)
    }).catch((error)=>{
      swerroralert(error.message)
    })
  
  };
};
const logout = ()=>{
  return (dispatch)=>{
    dispatch({type:actionTypes.LOGOUT_SUCCESS})
  }
}

export {
  AuthActionType,
  LoginAuthAction,
  logout
};
