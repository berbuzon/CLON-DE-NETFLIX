import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";
import NotFoundPage from "../../features/pages/not_found_page";

// Cuando visito la ruta "/", se renderiza el componente HomeView.
// PrivateRoute redirige a los usuarios no autenticados a la página
// de inicio de sesión.(HomeView)
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },

  // Cuando visito la ruta "/login", se renderiza el componente LoginView.
  // PublicRoute redirige a los usuarios autenticados a otra página para evitar
  // que accedan a la página de inicio de sesión.
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
