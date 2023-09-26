import React, { useState } from "react";
import "../styles/Login.css";

interface LoginFormProps {
    handleLogin: (e: React.FormEvent) => Promise<void>;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
  }

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const {handleLogin, email, setEmail, password, setPassword} = props;
  const formGroup = "login-form-group";
  const formLabel = "login-form-label";
  const formControl = "login-form-control";
  return (
    <div className={"login-form-container"}>
      <div className={"login-form-box"}>
        <h2 className={"login-form-title"}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={formGroup}>
            <label className={formLabel}>Email</label>
            <input
              className={formControl}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={formGroup}>
            <label className={"form-label"}>Password</label>
            <input
              className={formControl}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={"login-submit-button"} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
