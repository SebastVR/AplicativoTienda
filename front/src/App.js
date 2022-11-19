// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/layout/Footer';
import Header from './components/layout/Header';
import React from 'react';
import Home from './components/Home';
import { ProductDetails } from './components/products/productDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productList" element={<ProductsList />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </div>
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
