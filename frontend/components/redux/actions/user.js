import {
  CLEAR_USER,
  LOGIN_USER,
  SET_USER,
  SIGNUP_USER,
  UPDATE_USER,
} from "./types";
import signUpRequest from "../../../requests/signUpRequest";
import logInRequest from "../../../requests/logInRequest";
import { clearAuth, setAuth } from "./auth";
import getUserRequest from "../../../requests/getUserRequest";
import updateProfileRequest from "../../../requests/updateProfileRequest";

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

export const setUser = () => async (dispatch, getStore) => {
  const getUserResult = await getUserRequest();
  if (getUserResult.status) {
    dispatch({ type: SET_USER, payload: getUserResult.user });
    dispatch(setAuth({ _csrf: getUserResult._csrf }));
    return;
  }
  // prevent extra clear auth when user haven't logged in
  if (getStore().auth.token !== "" || getStore().user._id !== "") {
    dispatch(clearUser());
    dispatch(clearAuth());
  }
};

export const updateProfile = (updateDetails) => async (dispatch, getState) => {
  const updateProfileResult = await updateProfileRequest(
    updateDetails,
    getState().auth._csrf
  );
  if (updateProfileResult.status) {
    dispatch({ type: UPDATE_USER, payload: updateProfileResult.user });
    return { status: true, message: "Update info successfully!" };
  }
  //TODO: push user back to landing page
  if (updateProfileResult.code === 401) {
    dispatch(clearUser());
    dispatch(clearAuth());
  }
  return { status: false, message: updateProfileResult.message };
};

export const clearUser = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER });
};
