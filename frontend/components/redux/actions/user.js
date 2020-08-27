import { CLEAR_USER, LOGIN_USER, SET_USER, SIGNUP_USER } from "./types";
import signUpRequest from "../../../requests/signUpRequest";
import logInRequest from "../../../requests/logInRequest";
import { clearAuth, setAuth } from "./auth";
import getUserRequest from "../../../requests/getUserRequest";

export const signUpUser = (signUpDetails) => async (dispatch) => {
  const signUpResult = await signUpRequest(signUpDetails);
  if (signUpResult.status) {
    dispatch({ type: SIGNUP_USER });
  }
  return signUpResult;
};

export const logInUser = (logInDetails) => async (dispatch) => {
  const logInResult = await logInRequest(logInDetails);
  if (logInResult.status) {
    dispatch({ type: LOGIN_USER, payload: logInResult.user });
    dispatch(setAuth({ token: logInResult.token }));
  }
  return logInResult;
};

export const setUser = () => async (dispatch) => {
  const getUserResult = await getUserRequest();
  if (getUserResult.status) {
    dispatch({ type: SET_USER, payload: getUserResult.user });
    dispatch(setAuth({ _csrf: getUserResult._csrf }));
  } else {
    dispatch(clearUser());
    dispatch(clearAuth());
  }
};

export const clearUser = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER });
};