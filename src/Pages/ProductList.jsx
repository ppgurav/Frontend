import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {products.length > 0 &&
        products.map((e) => (
          <div style={{ border: "1px solid #333", padding: 10, width: 200 }}>
            <img src={e.image} height="100" width="100" />
            {e.title}
            <br />
            <strong>
              {e.category} - {e.price}
            </strong>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
