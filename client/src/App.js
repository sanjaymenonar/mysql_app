import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/list">List Products</Link></li>
            <li><Link to="/search">Search Products</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/search" element={<SearchProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
