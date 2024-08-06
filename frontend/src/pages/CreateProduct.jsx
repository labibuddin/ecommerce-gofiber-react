import React, { useState } from "react";
import axios from "axios";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage
      const response = await axios.post(
        "http://localhost:3000/api/product",
        { title, description, amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Product created", response.data);
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Create Product</button>
    </form>
  );
}

export default CreateProduct;
