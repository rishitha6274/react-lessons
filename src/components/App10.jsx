import React, { useState } from "react";
import "./App10.css"; 

export default function App10() {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ]);

  const [cart, setCart] = useState({});

  const handleAdd = (id) => {
    setCart((prevCart) => ({ ...prevCart, [id]: 1 }));
  };

  const handleIncrement = (id) => {
    setCart((prevCart) => ({ ...prevCart, [id]: prevCart[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      if (prevCart[id] <= 1) {
        const updatedCart = { ...prevCart };
        delete updatedCart[id];
        return updatedCart;
      }
      return { ...prevCart, [id]: prevCart[id] - 1 };
    });
  };

  return (
    <div>
      <h1 style={{ color: "#d86c7a" }}>App10</h1>

      <h2>Products</h2>
      <div className="Container">
        {products.map((product) => (
          <div key={product.id} className="box">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAdd(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <hr />

      <h2 style={{ color: "#d86c7a" }}>My Cart</h2>
       <ol>
  {products.map((product) => {
    const qty = cart[product.id];
    if (!qty) return null;

    return (
      <li key={product.id}>
        {product.name} - ${product.price} 
        <button onClick={() => handleDecrement(product.id)}> - </button>
        {qty}
        <button onClick={() => handleIncrement(product.id)}> + </button>
      </li>
    );
  })}
</ol>
    </div>
  );
}
