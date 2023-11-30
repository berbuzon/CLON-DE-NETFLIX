import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider/root_provider";

//Swiper
import { register as registeSwiper } from "swiper/element/bundle";

registeSwiper();

// El RootProvider es el proveedor general de la aplicación que contiene todos los providers de la aplicación
// tiene como hijo al RootProvider
// El RouterProvider recibe como prop el router que es el que contiene todas las rutas de la aplicación
const App = () => {
  return (
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
  );
};

export default App;


