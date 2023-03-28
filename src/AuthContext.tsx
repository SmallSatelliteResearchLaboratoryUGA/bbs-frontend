import React, { createContext, useState, useContext, useEffect } from 'react';
import { retrieveToken, storeToken } from './components/Security';
interface AuthState {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function attemptLogin() {
      // Check for an existing token and update the state accordingly
      try{
        const token = await retrieveToken();
        setIsLoggedIn(!!token);
      }
      catch (error: any) {
        setIsLoggedIn(false);
      }
    }
    attemptLogin();
  }, []);

  const login = async (token: string) => {
    storeToken(token);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      const token = await retrieveToken();
      if (!token) return;
      const response = await fetch("http://localhost:8000/user/token", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
      });
    }
    catch {

    }
    sessionStorage.removeItem('encryptionKey');
    localStorage.removeItem('encryptedToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);