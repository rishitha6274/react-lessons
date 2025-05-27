import React, { useContext, useState } from "react";
import { AppContext } from "./App21";

export default function Login() {
  const { users } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFound, setUserFound] = useState(null);

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    setUserFound(user || null);
    if (!user) alert("Invalid credentials");
  };

  return (
    <div>
      <h3>Login</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Submit</button>
      {userFound && <p>Welcome, {userFound.name}!</p>}
    </div>
  );
}
