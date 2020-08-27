import { CLEAR_AUTH, SET_AUTH } from "../actions/types";

const initialState = {
  token: "",
  _csrf: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, ...action.payload };
    }
    case CLEAR_AUTH: {
      return { _csrf: state._csrf, token: "" };
    }
    default: {
      return state;
    }
  }
};

export default auth;
