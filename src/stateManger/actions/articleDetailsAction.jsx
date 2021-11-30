import { message } from "antd";
import axiosInstance from "../../services/axiosInstance";
import { 
    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAILUIRE
  } from "../constants/action-types";

export function articleDetailsRequest() {
    return { type: ARTICLE_DETAILS_REQUEST };
  }

  export function articleDetailsSucess(data) {
    return { type: ARTICLE_DETAILS_SUCCESS, payload: data };
  }

  export function articleDetailsFailuire() {
    return { type: ARTICLE_DETAILS_FAILUIRE };
  }

  const articleDetails = (id) => async (dispatch) => {
      dispatch(articleDetailsRequest());
      try {
          const response = await axiosInstance.get(`users/${id}`);
          dispatch(articleDetailsSucess(response.data))   
      } catch (err) {
          dispatch(articleDetailsFailuire())
          if (err.response) {
            message.error(err.response.data.message);
          } else if (err.request) {
            message.error(err.message);
          }
      }
      
  }

  export default articleDetails;