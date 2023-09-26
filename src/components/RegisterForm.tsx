import React, { useState } from "react";
//import "../styles/LoginAndRegister.css";


interface RegisterFormProps {
  handleRegister: (e: React.FormEvent) => Promise<void>;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  callsign: string;
  setCallsign: (callsign: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = (props: RegisterFormProps) => {
  const {handleRegister, email, setEmail, password, setPassword, callsign, setCallsign} = props

  const formGroup = "login-form-group";
  const formLabel = "login-form-label";
  const formControl = "login-form-control";

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          <label className={formLabel}>Callsign (Optional)</label>
          <input
            className={formControl}
            value={callsign}
            onChange={(e) => setCallsign(e.target.value)}
            required
          />
        </div>
        <div className={formGroup}>
          <label className={formLabel}>Password</label>
          <input
            className={formControl}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className={"login-submit-button"} type="submit">
          Register
        </button>
    </form>
  </div>);
};

export default RegisterForm;

