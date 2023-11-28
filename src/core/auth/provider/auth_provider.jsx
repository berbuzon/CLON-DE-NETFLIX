import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../base/app_storage";
import { authApi } from "../../datasource/remote/auth/auth_api";
export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveLoginState = (state) => AppStorage.setItem(AUTH_KEY, state);

  const getLoginState = () => AppStorage.getItem(AUTH_KEY);

  const removeItem = () => AppStorage.removeItem(AUTH_KEY);

  useEffect(() => {
    const initAuth = async () => {
      const loginState = getLoginState();
      if (!loginState) return;
      setIsLoggedIn(loginState);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    //enviar datos al servidor

const response = await authApi.post("/login", {email, password,});

// console.log(response.data);

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
