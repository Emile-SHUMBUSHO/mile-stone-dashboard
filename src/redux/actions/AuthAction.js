import axios from "axios";
const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const LoginAuthAction = (loginState,navigate) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/users/login", loginState);
      console.log(`user data: ${res}`)
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      navigate('/dashboard')
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

export {
  AuthActionType,
  LoginAuthAction,
};
