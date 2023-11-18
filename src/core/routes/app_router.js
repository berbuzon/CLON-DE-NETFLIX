import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_views";
import LoginView from "../../features/login/views/login_views";

export const AppRouter = createBrowserRouter([
  { path: "/", Component: HomeView },
  { path: "/login", Component: LoginView },
]);
