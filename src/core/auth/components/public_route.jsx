import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn)
  return <Navigate to={"/"} />;
  return children;
};

export default PublicRoute;

