import { message } from "antd";
import { 
  ADD_ARTICLE,DELETE_ARTICLE,UPDATE_ARTICLE, 
  FETCH_ARTICLE_LIST_REQUEST,
  FETCH_ARTICLE_LIST_SUCCESS, 
  FETCH_ARTICLE_LIST_FAILUIRE
} from "../constants/action-types";
  import axiosInstance from "../../services/axiosInstance";

export function addArticle(payload) {
  console.log(payload);
  return { type: ADD_ARTICLE, payload };
}

export function deleteArticle(payload) {
  return { type: DELETE_ARTICLE, payload };
}

export function updateArticle(payload) {
  return { type: UPDATE_ARTICLE, payload };
}
export function fetchArticlesRequest() {
  return { type: FETCH_ARTICLE_LIST_REQUEST };
}
export function fetchArticleSuccess(payload) {
  return { type: FETCH_ARTICLE_LIST_SUCCESS, payload};
}
export function fetchArticleFailuire() {
  return { type: FETCH_ARTICLE_LIST_FAILUIRE };
}

export const fetchArticles = () => (dispatch) => {
  dispatch(fetchArticlesRequest());
  axiosInstance 
    .get('users?per_page=10')
    .then((res) => {
      dispatch(fetchArticleSuccess(res?.data?.data));
    })
    .catch((err) => {
      dispatch(fetchArticleFailuire());
      if (err.response) {
        console.log(err.response);
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
    });
};
