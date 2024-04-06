import React, { useContext, createContext, useState } from "react";
import type { AuthResponse } from "../types/types";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveUser: (data) => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [userRoll, setUserRoll] = useState(''); 

  function getAccessToken() {
    return accessToken;
  }

  async function saveUser(x) {
    return new Promise((resolve, reject) => {
      setAccessToken(x.access_token); 
      setUserRoll(x.user_roll);   
      setIsAuthenticated(true);
      console.log(accessToken);
      resolve();
      console.log(userRoll)
      localStorage.setItem('userRoll', x.user_roll);
      localStorage.setItem('isAuthenticated', true);
    });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);