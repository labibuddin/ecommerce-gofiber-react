import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data.data)) // Akses 'data' dalam objek yang di-fetch
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.ID}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Amount: {product.amount}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default Products;
