import { message } from "antd";
import axiosInstance from "../../services/axiosInstance";
import { 
    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function updateArticleRequest() {
    return { type: UPDATE_ARTICLE_REQUEST };
  }

  export function updateArticleSucess(data) {
    return { type: UPDATE_ARTICLE_SUCCESS, payload: data };
  }

  export function updateArticleFailuire() {
    return { type: UPDATE_ARTICLE_FAILUIRE };
  }

  const updateArticle = (id) => async (dispatch) => {
      dispatch(updateArticleRequest());
      try {
          const response = await axiosInstance.put(`users/${id}`);
          dispatch(updateArticleSucess(response?.data) )   
      } catch (err) {
          dispatch(updateArticleFailuire())
          if (err.response) {
            message.error(err.response.data.message);
          } else if (err.request) {
            message.error(err.message);
          }
      }
      
  }

  export default updateArticle;