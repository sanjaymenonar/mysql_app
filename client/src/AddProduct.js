import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/addProduct",
        {
          name: productName,
          cost: parseFloat(cost),
        }
      );
      alert("Product added successfully!");
      setProductName("");
      setCost("");
    } catch (error) {
      alert("Failed to add product");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Cost:
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
