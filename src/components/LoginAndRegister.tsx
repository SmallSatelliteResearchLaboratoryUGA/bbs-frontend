import React, { useContext } from 'react';
import "../styles/Login.css"
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useState } from 'react';
import { storeToken } from './Security';
import { backend_url, useAuth } from '../AuthContext';
import { useNavigate } from "react-router-dom"
import { Box, Button, Modal } from '@mui/material';

const registrationStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const LoginAndRegister: React.FC = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerCallsign, setRegisterCallsign] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [openRegistration, setOpenRegistration] = useState(false);
  const { setRoleId } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch(`${backend_url}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        });

        if (!response.ok) {
            alert("Invalid email or password.")
            throw new Error("Invalid email or password.");
        }
  
        const data = await response.json();
        // Save the token and handle redirection or user interface update
        await storeToken(data.token);
        if (data.user.role_id) {
          setRoleId(data.user.role_id);
        }
        // handle when token not found
        login(data.token);
        navigate('/');
    } 
    catch (error) {
        console.error("Error logging in:", error);
        // Show an error message to the user
    }
  };


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ email: registerEmail, callsign: registerCallsign, password: registerPassword }),
        });
        if (!response.ok) {
          alert("Invalid email or password.")
          throw new Error("Error registering user.");
        }
  
        const data = await response.json();
        console.log("User registered successfully:", data);
        login(data.token)
        // Handle redirection or user interface update after successful registration
        navigate('/')
      } catch (error) {
        console.error("Error registering user:", error);
        // Show an error message to the user
      }
  
  };

  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  }
  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  }


    return (
      <div id="login-background">
      <div className={"login-container"}>
        <LoginForm handleLogin={handleLogin} email={loginEmail} setEmail={setLoginEmail} password={loginPassword} setPassword={setLoginPassword}/>
      </div>
      <div className={"login-container"}>
        <Button className="signup" onClick={handleOpenRegistration}>
          New here?
        </Button>
      </div>
      <Modal
        open={openRegistration}
        onClose={handleCloseRegistration}
      >
        <Box sx={{ ...registrationStyle, width: 400 }}>
          
          <RegisterForm 
            handleRegister={handleRegister} 
            email={registerEmail} 
            setEmail={setRegisterEmail} 
            password={registerPassword} 
            setPassword={setRegisterPassword}
            callsign={registerCallsign}
            setCallsign={setRegisterCallsign}
          />
      
        </Box>
      </Modal>
    </div>
    );
  };


export default LoginAndRegister;