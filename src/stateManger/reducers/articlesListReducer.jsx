import { 
  ADD_ARTICLE, DELETE_ARTICLE, 
  FETCH_ARTICLE_LIST_REQUEST, 
  FETCH_ARTICLE_LIST_FAILUIRE,
  FETCH_ARTICLE_LIST_SUCCESS 
} from "../constants/action-types";

const initialState = {
  articles: [],
  loading: false
};

function articlesListReducer(state = initialState, action) {
  console.log(action);
  
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles?.concat(action.payload),
      });
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles?.filter((data) => data.id !== action.payload.id),
        loading: false
      };
    case FETCH_ARTICLE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };

    case FETCH_ARTICLE_LIST_FAILUIRE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default articlesListReducer;
