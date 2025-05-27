import React, { useContext, useState } from "react";
import { AppContext } from "./App21";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert("User registered!");
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <div>
      <h3 style={{ color: "#d86c7a" }}>Register</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
