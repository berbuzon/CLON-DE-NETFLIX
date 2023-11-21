import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";

export const appRouter = createBrowserRouter([
  { path: "/", element:
  <HomeView /> },
  { path: "/login", element: <LoginView /> },
]);
