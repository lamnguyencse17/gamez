import { CLEAR_AUTH, SET_AUTH, VERIFY_USER } from "../actions/types";

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
    case VERIFY_USER:
    default: {
      return state;
    }
  }
};

export default auth;
