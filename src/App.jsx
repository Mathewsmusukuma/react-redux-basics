import ArticleList from "./components/articlesLists/ArticleList";
import ArticleForm from "./components/forms/ArticleForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/"  element={ <ArticleList />}/>
    <Route exact path="/addarticle" element={<ArticleForm />}/>
  </Routes>
</Router>
  );
}

export default App;
