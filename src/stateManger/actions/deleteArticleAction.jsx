import { 
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function deleteArticleRequest(payload) {
    return { type: DELETE_ARTICLE_REQUEST, payload };
  }

  export function deleteArticleSucess() {
    return { type: DELETE_ARTICLE_SUCCESS };
  }

  export function deleteArticleFailuire() {
    return { type: DELETE_ARTICLE_FAILUIRE};
  }
