import { 
    ADD_ARTICLE_REQUEST,
    ADD_ARTICLE_SUCCESS,
    ADD_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function addArticleRequest(payload) {
    return { type: ADD_ARTICLE_REQUEST, payload };
  }

  export function addArticleSucess() {
    return { type: ADD_ARTICLE_SUCCESS };
  }

  export function addArticleFailuire() {
    return { type: ADD_ARTICLE_FAILUIRE};
  }
