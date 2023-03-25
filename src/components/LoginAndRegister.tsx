import React from 'react';
import "../styles/LoginAndRegister.css"
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginAndRegister: React.FC = () => {
    return (
      <div className={"container"}>
        <LoginForm />
        <RegisterForm />
      </div>
    );
  };


export default LoginAndRegister;