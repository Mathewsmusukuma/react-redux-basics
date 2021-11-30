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

  export function updateArticleSucess() {
    return { type: UPDATE_ARTICLE_SUCCESS };
  }

  export function updateArticleFailuire() {
    return { type: UPDATE_ARTICLE_FAILUIRE };
  }

  const updateArticle = (id, payload) => async (dispatch) => {
      console.log(payload);
      dispatch(updateArticleRequest());
      try {
          await axiosInstance.patch(`users/${id}`, payload);
          dispatch(updateArticleSucess());
          window.location.href = "/"; 
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