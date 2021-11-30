import { message } from "antd";
import axiosInstance from "../../services/axiosInstance";
import { 
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function deleteArticleRequest() {
    return { type: DELETE_ARTICLE_REQUEST };
  }

  export function deleteArticleSucess(id) {
    return { type: DELETE_ARTICLE_SUCCESS, payload: id };
  }

  export function deleteArticleFailuire() {
    return { type: DELETE_ARTICLE_FAILUIRE};
  }


  export const deteleArticle = (id) => (dispatch) => {
    dispatch(deleteArticleRequest());
    axiosInstance 
      .delete(`users/${id}`)
      .then((res) => {
          console.log(res);
          dispatch(deleteArticleSucess(id));
      })
      .catch((err) => {
        dispatch(deleteArticleFailuire());
        if (err.response) {
          message.error(err.response.data.message);
        } else if (err.request) {
          message.error(err.message);
        }
      });
  };
