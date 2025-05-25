import React from "react";
import { useState } from "react";
export default function App8() {
  const [count, setCount] = useState(10);
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
      <div className="box">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <span className="value">{count}</span>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}