import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { identity, password }
      );
      console.log(response.data);
      // Save the token in local storage or context
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username or Email"
        value={identity}
        onChange={(e) => setIdentity(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
