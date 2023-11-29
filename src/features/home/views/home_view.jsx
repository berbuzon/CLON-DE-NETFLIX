import React, { useState } from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
// import { authApi } from "../../../core/datasource/remote/auth/auth_api";
import "./home_view.css";

import axios from "axios";

const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  api_key: "dcd601b15c6ef59ab712cd1686a133ea",
  params: { language: "es-ES" },
});

console.log(TMDB_API);
console.log(import.meta.env.VITE_TMDB_API_KEY);

const HomeView = () => {
  const { logout } = useAuth();

  return (
    <div className="containerStyle">
      <h1 className="textStyle">HOME</h1>

      <button className="buttonStyle" onClick={logout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default HomeView;
