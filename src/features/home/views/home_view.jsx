import React, { useState } from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { authApi } from "../../../core/datasource/remote/auth/auth_api";
import "./home_view.css";

const HomeView = () => {
  const [user, setUser] = useState(null);
  const { logout } = useAuth();

  const getUser = async () => {
    //saco el try catch porque lo manejo en el interceptor en auth_provider.jsx
    /*     // try { */
    const response = await authApi.get("/user");
    setUser(response.data.user);

    /*     }
    catch (error) {
      if (error.response.status === 401) return logout();
    } */

    // obtiene el usuario del sv
    /* console.log(response.data.user); */
  };

  return (
    <div className="containerStyle">
      <h1 className="textStyle">HOME</h1>

      <button className="buttonStyle" onClick={getUser}>
        Get User
      </button>

      <button className="buttonStyle" onClick={logout}>
        Cerrar Sesión
      </button>
      {user ? <p>{JSON.stringify(user.email)}</p> : null}
    </div>
  );
};

export default HomeView;
