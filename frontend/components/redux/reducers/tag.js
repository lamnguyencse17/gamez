import { SET_TAG } from "../actions/types";

const initialState = [];

const tag = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default tag;
