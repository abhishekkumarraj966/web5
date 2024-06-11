import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Probuctpage from "./components/Probuctpage";
import Articlespage from "./components/Articlespage"
import Categoriespage from "./components/Categoriespage"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/articlespage" element={<Articlespage />} />
          <Route path="/productpage" element={<Probuctpage />} />
          <Route path="/categoriespage" element={<Categoriespage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
