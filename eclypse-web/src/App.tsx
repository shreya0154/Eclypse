
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Cart from './pages/Cart.tsx';
import Layout from "./components/Layout.tsx";
import Checkout from "./pages/Checkout.tsx";
import AboutPage from "./pages/AboutPage.tsx";


const App: React.FC = () => {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

