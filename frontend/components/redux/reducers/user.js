import {
  CLEAR_USER,
  LOGIN_USER,
  SET_USER,
  SIGNUP_USER,
  UPDATE_USER,
} from "../actions/types";

const initialState = {
  _id: "",
  name: "",
  email: "",
  token: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
    case UPDATE_USER:
    case LOGIN_USER: {
      return { ...action.payload };
    }
    case SIGNUP_USER: {
      return { ...state };
    }
    case CLEAR_USER: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default user;
