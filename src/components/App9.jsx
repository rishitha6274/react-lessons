import React from "react";
import { useState } from "react";
export default function App8() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1 style={{color:'#d86c7a'}}>App9</h1>
      <h2>useState Revision</h2>
      <div className="counter-box">
        <button className="counter-btn" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}