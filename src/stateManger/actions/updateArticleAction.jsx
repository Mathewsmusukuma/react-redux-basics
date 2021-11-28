import { 
    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function updateArticleRequest(payload) {
    return { type: UPDATE_ARTICLE_REQUEST, payload };
  }

  export function updateArticleSucess() {
    return { type: UPDATE_ARTICLE_SUCCESS };
  }

  export function updateArticleFailuire() {
    return { type: UPDATE_ARTICLE_FAILUIRE};
  }
