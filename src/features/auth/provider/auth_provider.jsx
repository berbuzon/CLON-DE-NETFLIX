import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../base/app_storage";
import { authApi } from "../../../core/datasource/remote/auth/auth_api";
export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children, fallback }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const saveLoginState = (state) => AppStorage.setItem(AUTH_KEY, state);

  const getLoginState = () => AppStorage.getItem(AUTH_KEY);

  const removeItem = () => AppStorage.removeItem(AUTH_KEY);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;

        setIsLoggedIn(loginState);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {

    // esto es para enviar datos al servidor
    /* await authApi.post("/login", { email, password }); */
    /*console.log(response.data); */

    setIsLoggedIn(true);
    saveLoginState(true);
  };
  const logout = async () => {
    setIsLoggedIn(false);
    removeItem();
  };


  // INTERCEPTOR DE PETICIONES HTTP (REQUEST Y RESPONSE)
  useEffect(() => {
    // ESTO OCURRE ANTES DE ENVIAR LA SOLICITUD AL SV
    authApi.interceptors.request.use(
      async (config) => {
        // se puede hacer cualquier cosa con el objeto de la request antes de enviarlo al sv
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // ESTO OCURRE DESPUES DE RECIBIR LA SOLICITUD DEL SV
    authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        // se puede hacer cualquier cosa con el objeto del error de la response
        if (error.response.status === 401) await logout();

        return Promise.reject(error);
      }
    );
  });

  // fallback es un componente que se muestra cuando isLoading es true. 
  // Podría ser, por ejemplo, un componente de carga o un mensaje de "Cargando...".
  // en este caso muestra un mensaje de Cargando...
  // si fallback es null o undefined, AuthProvider no renderiza nada.
  // En este caso siempre es true porque se lo paso por props al AuthProvider en el RootProvider
  
  // isLoading es una variable booleana que indica si se está cargando algo. 
  // si isLoading es false, AuthProvider renderiza children.

  if (fallback && isLoading) return fallback;


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};