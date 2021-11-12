import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      });
    case DELETE_ARTICLE:
      return state.articles.filter((data) => data.id !== action.payload.id);
    default:
      return state;
  }
}

export default rootReducer;
