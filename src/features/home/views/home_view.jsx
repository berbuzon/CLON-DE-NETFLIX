import React from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { authApi } from "../../../core/datasource/remote/auth/auth_api"

const HomeView = () => {
  const { logout } = useAuth();

const getUser = async () => {
  const response = await authApi.get("/user");
  console.log(response.data);
}

  return (
    <div>
      <h1>HOME</h1>


      <button onClick={getUser}>Get User</button>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeView;
