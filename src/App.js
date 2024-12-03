import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/san-pham" element={<Services />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:url" element={<SingleBlog />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
