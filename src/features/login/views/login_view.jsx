import React from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";

const LoginView = () => {
  const { login,isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <h1>Clon de Netflix</h1>
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginView;
