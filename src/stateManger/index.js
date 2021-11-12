import store from "./store";
import { addArticle, deleteArticle } from "./actions";

window.store = store;
window.addArticle = addArticle;
window.deleteArticle = deleteArticle;
