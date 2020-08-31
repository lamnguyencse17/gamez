import {
  SET_ARTICLE_TITLE,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE_DESCRIPTION,
  CLEAR_ARTICLE,
  CREATE_ARTICLE,
} from "./types";
import createArticleRequest from "../../../requests/createArticleRequest";

export const setArticleTitle = (articleTitle) => async (dispatch) => {
  dispatch({ type: SET_ARTICLE_TITLE, payload: articleTitle });
};

export const setArticleContent = (articleContent) => async (dispatch) => {
  dispatch({ type: SET_ARTICLE_CONTENT, payload: articleContent });
};

export const setArticleDescription = (articleDescription) => async (
  dispatch
) => {
  dispatch({ type: SET_ARTICLE_DESCRIPTION, payload: articleDescription });
};

export const createArticle = (articleDetails) => async (dispatch, getState) => {
  const _csrf = getState().auth._csrf;
  const createArtilceResult = await createArticleRequest(articleDetails, _csrf);
  if (createArtilceResult.status) {
    dispatch({ type: CREATE_ARTICLE });
  }
  return createArtilceResult;
};

export const clearArticle = () => async (dispatch) => {
  dispatch({ type: CLEAR_ARTICLE });
};
