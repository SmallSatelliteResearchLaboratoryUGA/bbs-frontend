import React, { useState } from "react";
import "../styles/LoginAndRegisterForm.css";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error("Error registering user.");
        }
  
        const data = await response.json();
        console.log("User registered successfully:", data);
        // Handle redirection or user interface update after successful registration
  
      } catch (error) {
        console.error("Error registering user:", error);
        // Show an error message to the user
      }
  
  };

  return (
    <div className={"form-container"}>
      <div className={"form-box"}>
      <h2 className={"form-title"}>Register</h2>
        <form onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

