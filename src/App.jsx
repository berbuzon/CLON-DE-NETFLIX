import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./core/routes/app_router";

const App = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default App;
