import React from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { authApi } from "../../../core/datasource/remote/auth/auth_api";

const HomeView = () => {
  const { logout } = useAuth();

  const getUser = async () => {

    //saco el try catch porque lo manejo en el interceptor en auth_provider.jsx
    // try {
      const response = await authApi.get("/user");
    // } 
    // catch (error) {
    //   if (error.response.status === 401) return logout();
    // }
  };

  return (
    <div>
      <h1>HOME</h1>

      <button onClick={getUser}>Get User</button>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeView;
