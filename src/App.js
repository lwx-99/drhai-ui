import './App.scss';
import React, {useState, useEffect} from "react";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import ScrollToTop from "./helpers/ScrollToTop";
import axios from "axios";
import NotFound from './components/404/NotFound';
import ProductPage from './pages/ProductPage'
import SingleProduct from './pages/SingleProduct/SingleProduct'

function App() {

  const [latestPost, setLatestPost] = useState([]);
  const [categories, setCategories] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/bai-viets?populate=*&pagination[limit]=6&sort[0]=createdAt:desc`)
      .then(({ data }) => setLatestPost(data.data))
      .catch((error) => setError(error));
  }
  
  fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/danh-mucs?populate=*&sort[0]=createdAt:desc`)
      .then(({ data }) => setCategories(data.data))
      .catch((error) => setError(error));
  }
  
  fetchData();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/san-pham" element={<ProductPage />} />
        <Route path="/san-pham/:id" element={<SingleProduct />} />
        <Route path="/bai-viet" element={<BlogsPage categories={categories}/>}  />
        <Route path="/bai-viet/:id" element={<SingleBlog latestPost={latestPost} />} />
        <Route path="/lien-he" element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
