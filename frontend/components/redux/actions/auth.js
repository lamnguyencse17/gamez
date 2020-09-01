import { CLEAR_AUTH, SET_AUTH, VERIFY_USER } from "./types";
import verifyUserRequest from "../../../requests/verifyUserRequest";

export const setAuth = (authDetails) => async (dispatch) => {
  dispatch({ type: SET_AUTH, payload: { ...authDetails } });
};

export const clearAuth = () => (dispatch) => {
  dispatch({ type: CLEAR_AUTH });
};

export const verifyUser = (hash) => async (dispatch) => {
  const verifyUserResult = await verifyUserRequest(hash);
  if (verifyUserResult.status) {
    dispatch({ type: VERIFY_USER });
  }
  return verifyUserResult;
};
