import { message } from "antd";
import axiosInstance from "../../services/axiosInstance";
import { 
    ADD_ARTICLE_REQUEST,
    ADD_ARTICLE_SUCCESS,
    ADD_ARTICLE_FAILUIRE
  } from "../constants/action-types";

export function addArticleRequest() {
    return { type: ADD_ARTICLE_REQUEST };
  }

  export function addArticleSucess(payload) {
    return { type: ADD_ARTICLE_SUCCESS, payload };
  }

  export function addArticleFailuire() {
    return { type: ADD_ARTICLE_FAILUIRE};
  }


  const addArticle = (navigate, data) => async (dispatch) => {
    try {
      dispatch(addArticleRequest())
      const response = await axiosInstance.post('users', data);
      const newData = response?.data;
      dispatch(addArticleSucess(newData));
      message.success("Article created successfully!");
      navigate("/");
    } catch (err) {
      dispatch(addArticleFailuire());
      if (err.response) {
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
    }
  }

  export default addArticle;
