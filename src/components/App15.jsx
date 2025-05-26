import React from "react";
import { useRef, useState } from "react";
export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  const [sum, setSum] = useState();
  const [color, setColor] = useState("grey");
  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue"
  };
  const handleSubmit1 = () => {
    const a = Number(num1Ref.current.value);
    const b = Number(num2Ref.current.value);
    setSum(a + b);
  };

  const handleSubmit2 = () => {
    setColor(colorRef.current.value);
  };
  return (
    <div>
      <h1 style={{ color: "#d86c7a" }}>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      <p>
        <input type="text" ref={nameRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <p>
        <input type="number" ref={num1Ref}/>
        <input type="number" ref={num2Ref}/>
      </p>
      <p>{sum}</p>
      <button onClick={handleSubmit1}>Submit</button>
      <hr />
      <input type="text" ref={colorRef}/> 
       <button onClick={handleSubmit2}>Submit</button>
       <p style={{ color: color, fontWeight: "bold", fontSize: "24px" }}>
        Hello world
      </p>
    </div>
  );
}