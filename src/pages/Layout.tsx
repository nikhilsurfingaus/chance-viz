import NavTab from '../components/NavUI/Nav'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Visual from './Visual';
import About from './About';
import PageNotFound from './PageNotFound';
import Foot from '../components/NavUI/Footer';

const Layout = () => {
  return (
    <Router>
        <NavTab />
        <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/home" element={<Home />}  />
              <Route path="/visual" element={<Visual />}  />
              <Route path="/about" element={<About />}  />
              <Route path="/404" element={<PageNotFound />}  />
              <Route path="*" element={<Navigate to="/404" />}  />
      </Routes>
      <Foot />
    </Router>
  )
}

export default Layout