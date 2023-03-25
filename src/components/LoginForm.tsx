import React, { useState } from "react";
import "../styles/LoginAndRegisterForm.css";
import { storeToken } from "./Security";
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error("Invalid email or password.");
        }
  
        const data = await response.json();
        // Save the token and handle redirection or user interface update
        await storeToken(data.token)
        history('/');
      } catch (error) {
        console.error("Error logging in:", error);
        // Show an error message to the user
      }
  };

  return (
    <div className={"form-container"}>
      <div className={"form-box"}>
        <h2 className={"form-title"}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={"form-group"}>
            <label className={"form-label"}>Email</label>
            <input
              className={"form-control"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={"form-group"}>
            <label className={"form-label"}>Password</label>
            <input
              className={"form-control"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={"submit-button"} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
