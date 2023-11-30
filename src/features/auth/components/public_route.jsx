import { useAuth } from "../../../features/auth/base/hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();


  // si estoy logueado, me redirige a la pagina de home
  // si no estoy logueado, me redirige a la pagina de login (que es el children)

  if (isLoggedIn)
  return <Navigate to={"/"} />;
  return children;
};

export default PublicRoute;

