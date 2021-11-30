import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesListPage from "./pages/listArticles";
import AddArticlePage from "./pages/addArticles";
import UpdateArticlePage from "./pages/updateArticle";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={ <ArticlesListPage />}/>
        <Route exact path="/addarticle" element={<AddArticlePage />}/>
        <Route exact path="/article/updatearticle/:articleID" 
        element={<UpdateArticlePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
