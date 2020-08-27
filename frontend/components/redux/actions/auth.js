import { CLEAR_AUTH, SET_AUTH } from "./types";

export const setAuth = (authDetails) => async (dispatch) => {
  dispatch({ type: SET_AUTH, payload: { ...authDetails } });
};

export const clearAuth = () => (dispatch) => {
  dispatch({ type: CLEAR_AUTH });
};