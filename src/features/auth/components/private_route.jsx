import { useAuth } from "../../../features/auth/base/hooks/useAuth";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  
  // si estoy logueado, me redirige a la pagina de home
  // si no estoy logueado, me redirige a la pagina de login

  if (isLoggedIn)
  return children;
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
