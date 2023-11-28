import React from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { authApi } from "../../../datasource/remote/auth/auth_api";

const HomeView = () => {
  const { logout, isLoggedIn } = useAuth();

const getUser = async () => {
  const response = await authApi.get("/user");
}

  return (
    <div>
      <h1>HOME</h1>


      <button onClick={getUser}>Obtener Usuario</button>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeView;
