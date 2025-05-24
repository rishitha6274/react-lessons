import React from 'react'
import "./Fruit.css";

export default function Fruit(props) {
  return (
    <div className="Fruitbox">{props.name}</div>
  );
}