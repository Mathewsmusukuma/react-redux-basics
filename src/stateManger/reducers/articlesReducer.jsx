import * as types from "../constants/action-types";

const initialState = {
  articles: [],
  loading: false
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    // Add article
    case types.ADD_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles, action.payload]
      };

    case types.ADD_ARTICLE_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // FETCH ARTICLES
    case types.FETCH_ARTICLE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };

    case types.FETCH_ARTICLE_LIST_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // DELETE ARTICLE

    case types.DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_ARTICLE_SUCCESS:
      const userID = action.payload
      return Object.assign({}, state, {
          loading: false,
          articles: [...state.articles.filter(article => article.id !== userID)],
        });
            
    case types.DELETE_ARTICLE_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // UPDATE ARTICLE

    case types.UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_ARTICLE_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // ARTICLE DETAILS

    case types.ARTICLE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };

    case types.ARTICLE_DETAILS_FAILUIRE:
      return {
        ...state,
        loading: false
      };
    
    default:
      return state;
  }
}

export default articlesReducer;
