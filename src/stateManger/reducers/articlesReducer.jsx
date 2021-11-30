import { 
  FETCH_ARTICLE_LIST_REQUEST, 
  FETCH_ARTICLE_LIST_FAILUIRE,
  FETCH_ARTICLE_LIST_SUCCESS,
  DELETE_ARTICLE_REQUEST, 
  DELETE_ARTICLE_FAILUIRE,
  DELETE_ARTICLE_SUCCESS 
} from "../constants/action-types";

const initialState = {
  articles: [],
  loading: false
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
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
      case DELETE_ARTICLE_REQUEST:
        return {
          ...state,
          loading: true
        };
      case DELETE_ARTICLE_SUCCESS:
        const userID = action.payload
        return Object.assign({}, state, {
            loading: false,
            articles: [...state.articles.filter(article => article.id !== userID)],
          });
              
      case DELETE_ARTICLE_FAILUIRE:
        return {
          ...state,
          loading: false
        };
    default:
      return state;
  }
}

export default articlesReducer;
