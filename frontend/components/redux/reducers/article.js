import {
  SET_ARTICLE_TITLE,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE_DESCRIPTION,
  CLEAR_ARTICLE,
  CREATE_ARTICLE,
} from "../actions/types";

const initialState = {
  articleTitle: "",
  articleDescription: "",
  articleContent: "",
  isDraft: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE_TITLE: {
      return { ...state, articleTitle: action.payload };
    }
    case SET_ARTICLE_CONTENT: {
      return { ...state, articleContent: action.payload };
    }
    case SET_ARTICLE_DESCRIPTION: {
      return { ...state, articleDescription: action.payload };
    }
    case CLEAR_ARTICLE: {
      return { ...initialState };
    }
    case CREATE_ARTICLE:
    default: {
      return state;
    }
  }
};

export default auth;
