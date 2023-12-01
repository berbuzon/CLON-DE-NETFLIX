import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../base/app_storage";
import { authApi } from "../../../core/datasource/remote/auth/auth_api";
export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children, fallback }) => {
  // isLoggedIn indica si el usuario está logueado o no.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  // isLoading indica si se está cargando algo.
  const [isLoading, setIsLoading] = useState(true);

  // setItem guarda el estado de isLoggedIn en el localStorage.
  const saveLoginState = (state) => AppStorage.setItem(AUTH_KEY, state);

  // getItem obtiene el estado de isLoggedIn del localStorage.
  const getLoginState = () => AppStorage.getItem(AUTH_KEY);

  // removeItem elimina el estado de isLoggedIn del localStorage.
  const removeItem = () => AppStorage.removeItem(AUTH_KEY);

  // initAuth obtiene el estado de inicio de sesión del localStorage.
  // si es false, no hace nada.
  // si es true, setea el estado de isLoggedIn en true.
  // finalmente, setea el estado de isLoading en false que indica que ya no se está cargando nada.

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

  // El usuario está logueado si isLoggedIn es true.
  // saveLoginState guarda el estado de isLoggedIn en el localStorage.
  const login = async () => {
    setIsLoggedIn(true);
    saveLoginState(true);
  };

  // El usuario está deslogueado si isLoggedIn es false.
  // removeItem elimina el estado de isLoggedIn del localStorage.
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


  // LIMPIAR LOCALSTORAGE AL CERRAR LA PESTAÑA
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.clear();
    });
  
    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.clear();
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.clear();
    });
  
    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.clear();
      });
    };
  }, []);

  // fallback es un componente que se muestra cuando isLoading es true.
  // Podría ser, por ejemplo, un componente de carga o un mensaje de "Cargando...".
  // en este caso muestra un mensaje de Cargando...
  // si fallback es null o undefined, AuthProvider no renderiza nada.
  // En este caso siempre es true porque se lo paso por props al AuthProvider en el RootProvider

  // isLoading indica si se está cargando algo.
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
