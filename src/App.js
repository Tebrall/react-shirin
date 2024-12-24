import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Router, Routes, and Route are imported
import Navbar from './components/navbar.jsx'; // Correct file paths
import Hero from './components/hero.jsx';
import Products from './components/Products.jsx';
import ProductsPage from './components/ProductsPage.jsx'; // For the separate Products Page
import AboutUs from './components/AboutUs.jsx';
import WhyUs from './components/WhyUs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <Navbar />
      <Routes>
        {/* Route for Products Page */}
        <Route path="/products" element={<ProductsPage />} />
        {/* Default "homepage" components will display when no route matches */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <AboutUs />
              <WhyUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
