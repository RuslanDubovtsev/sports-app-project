import PostList from "./components/PostList";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./assets/css/style.css";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostsByCategoryPage from "./pages/PostsByCategoryPage";
import {Routes,  Route} from "react-router-dom"

function App() {
  return ( 
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/post/:id" element={<PostDetailPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path="/category/posts/:id" element={<PostsByCategoryPage/>}/>
        </Routes>
      </main>
    </>
   
  );
}

export default App;
