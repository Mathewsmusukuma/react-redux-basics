import { combineReducers } from "redux";
import articlesListReducer from "../reducers/articlesListReducer";

const rootReducer = combineReducers({
    articlesList: articlesListReducer
});


export default rootReducer;