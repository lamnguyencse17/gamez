import { SET_TAG } from "./types";

export const setTag = (tags) => async (dispatch) => {
  dispatch({ type: SET_TAG, payload: [...tags] });
};
