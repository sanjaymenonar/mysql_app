import React, { useState } from "react";
import axios from "axios";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/api/searchProduct?q=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error("Failed to search products", error);
    }
  };

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((product) => (
          <li key={product.productid}>
            {product.productname} - ${product.cost}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchProduct;
