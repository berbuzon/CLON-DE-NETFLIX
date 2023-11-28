import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveLoginState = (state) => localStorage.setItem(AUTH_KEY, state);

  const getLoginState = () => localStorage.getItem(AUTH_KEY);

  const removeItem = () => localStorage.removeItem(AUTH_KEY);

  useEffect(() => {

    const initAuth = async () => {
      const loginState = getLoginState();
      if (!loginState) return;
      setIsLoggedIn(loginState);
    };

    initAuth();
  }, []);

  const login = async () => {
    setIsLoggedIn(true);
    saveLoginState(true);
  };
  const logout = async () => {
    setIsLoggedIn(false);
    removeItem();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
