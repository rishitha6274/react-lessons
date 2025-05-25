import React, { useState, useEffect } from "react";
import "./App13.css"; 

export default function App13() {
  const [inputNumber, setInputNumber] = useState();
  const [results, setResults] = useState({
    addition: 110,
    subtraction: 90,
    multiplication: 1000,
    division: 10,
  });

  useEffect(() => {
    setResults({
      addition: 100 + Number(inputNumber),
      subtraction: 100 - Number(inputNumber),
      multiplication: 100 * Number(inputNumber),
      division: inputNumber !== 0 ? (100 / Number(inputNumber)).toFixed(2) : "∞",
    });
  }, [inputNumber]);

  return (
    <div className="container">
      <h1 className="heading">App13</h1>
     
      
      <div className="box">
        <div className="b1">
          <strong>Addition</strong>
          <p>100 + {inputNumber} = {results.addition}</p>
        </div>
        <div className="b1">
          <strong>Subtraction</strong>
          <p>100 - {inputNumber} = {results.subtraction}</p>
        </div> 
        <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        className="inputBox"
      /> 
        <div className="b1">
          <strong>Multiplication</strong>
          <p>100 * {inputNumber} = {results.multiplication}</p>
        </div>
        <div className="b1">
          <strong>Division</strong>
          <p>100 / {inputNumber} = {results.division}</p>
        </div>
      </div>
    </div>
  );
}
