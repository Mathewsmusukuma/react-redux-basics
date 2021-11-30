import { message } from "antd";
import axiosInstance from "../../services/axiosInstance";
import { 
  FETCH_ARTICLE_LIST_REQUEST,
  FETCH_ARTICLE_LIST_SUCCESS, 
  FETCH_ARTICLE_LIST_FAILUIRE
} from "../constants/action-types";
  

export function fetchArticlesRequest() {
  return { type: FETCH_ARTICLE_LIST_REQUEST };
}
export function fetchArticleSuccess(payload) {
  return { type: FETCH_ARTICLE_LIST_SUCCESS, payload};
}
export function fetchArticleFailuire() {
  return { type: FETCH_ARTICLE_LIST_FAILUIRE };
}

export const fetchArticles = () => async (dispatch) => {
  dispatch(fetchArticlesRequest());
    try {
      const res = await  axiosInstance.get('users?per_page=10');
  
      dispatch(fetchArticleSuccess(res?.data?.data));
      
    } catch (err) {

      dispatch(fetchArticleFailuire());
      if (err.response) {
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
      
    }
};
