import { CLEAR_USER, SET_USER } from "../actions/types";

const initialState = {
  _id: "",
  name: "",
  email: "",
  token: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...action.payload };
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