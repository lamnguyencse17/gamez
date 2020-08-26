import { SET_AUTH } from "./types";

export const setAuth = (authDetails) => async (dispatch) => {
  dispatch({ type: SET_AUTH, payload: { ...authDetails } });
};