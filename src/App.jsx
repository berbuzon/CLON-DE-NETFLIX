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

// ESTUVE JUGANDO CON LOS INTERCEPTORES DE PETICIONES HTTP

/* //CREO UNA INSTANCIA DE AXIOS PARA PODER USARLA EN OTRO COMPONENTE
  const jsonPlaceHolder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 3000,
    // headers: {
    // Authorization: "Bearer token",
  }
  });

  const [data, setData] = useState([]);

  //uso la instancia de axios para hacer la petición
  const getUsers = async () => {
    const response = await jsonPlaceHolder.get("/users");
    setData(response.data);
    // console.log(response.data);
  };

  // INTERCEPTOR DE PETICIONES HTTP (REQUEST)
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      async (config) => {
        config.headers["nuevo-elem-header"] = "puedo agregar cualquier cosa";
        console.log("REQUEST", config);
        return config;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );
    // Devolver una función de limpieza para eliminar el interceptor cuando se desmonta el componente
    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []); // Pasar un array vacío como segundo argumento para ejecutar useEffect solo una vez

  // INTERCEPTOR DE PETICIONES HTTP (RESPONSE)
  // AGREGA UN NUEVO USUARIO A LA LISTA DE USUARIOS

  //(lo tuve que poner en un useEffect porque se ejecutaba dos veces)
  // ahora se ejecuta una vez antes que el componente se monte

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      async (response) => {
        {
          response.data.push({
            id: 11,
            name: "Bernardo",
          });
          console.log("RESPONSE", response);
        }
        return response;
      },

      async (error) => {
        return Promise.reject(error);
      }
    );

    // Devolver una función de limpieza para eliminar el interceptor cuando se desmonta el componente
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []); // Pasar un array vacío como segundo argumento para ejecutar useEffect solo una vez

  //PARA SABER QUE ENDPOINT ESTOY LLAMANDO
  axios.interceptors.response.use(
    async (response) => {
      console.log("ENDPOINT", response.config.url);

      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <div>USERS</div>
      <button onClick={getUsers}>Get Users</button>
      {data.map((user) => (
        <div key={user?.id}>{user.name}</div>
      ))}
    </>
  ); */
