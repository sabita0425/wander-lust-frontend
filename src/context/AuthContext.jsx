import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const onLogin = (user, jwtToken) => {
    setUserData(user);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
  };

  const onLogout = () => {
    setUserData(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ userData, token, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
