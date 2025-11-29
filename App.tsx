import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import HRAssistant from './components/HRAssistant';
import { RoutePath } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Website Routes */}
        <Route path="*" element={
          <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path={RoutePath.HOME} element={<Home />} />
                <Route path={RoutePath.SHOP} element={<Shop />} />
                <Route path={RoutePath.PRODUCT} element={<ProductDetail />} />
                <Route path={RoutePath.ABOUT} element={<About />} />
                <Route path={RoutePath.SERVICES} element={<Contact />} />
                <Route path={RoutePath.BLOG} element={<Blog />} />
                <Route path={RoutePath.BLOG_POST} element={<BlogPost />} />
                <Route path={RoutePath.CONTACT} element={<Contact />} />
                <Route path="*" element={<Navigate to={RoutePath.HOME} replace />} />
              </Routes>
            </main>
            <Footer />
            <HRAssistant />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;