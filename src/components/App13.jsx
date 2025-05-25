import React, { useState, useEffect } from "react";
import "./App13.css";

export default function App13() {
  const [inputNumber, setInputNumber] = useState("");
  const [results, setResults] = useState({
    addition: "-",
    subtraction: "-",
    multiplication: "-",
    division: "-"
  });

  useEffect(() => {
    const number = Number(inputNumber);

    if (!isNaN(number) && inputNumber !== "") {
      setResults({
        addition: 100 + number,
        subtraction: 100 - number,
        multiplication: 100 * number,
        division: number !== 0 ? (100 / number).toFixed(2) : "∞"
      });
    } else {
      setResults({
        addition: "-",
        subtraction: "-",
        multiplication: "-",
        division: "-"
      });
    }
  }, [inputNumber]);

  return (
    <div className="container">
      <h1 className="heading">App13</h1>

      <div className="box">
        <div className="b1">
          <strong>Addition</strong>
          <p>100 + {inputNumber || "-"} = {results.addition}</p>
        </div>
        <div className="b1">
          <strong>Subtraction</strong>
          <p>100 - {inputNumber || "-"} = {results.subtraction}</p>
        </div>

        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          className="inputBox"
        />

        <div className="b1">
          <strong>Multiplication</strong>
          <p>100 * {inputNumber || "-"} = {results.multiplication}</p>
        </div>
        <div className="b1">
          <strong>Division</strong>
          <p>100 / {inputNumber || "-"} = {results.division}</p>
        </div>
      </div>
    </div>
  );
}
