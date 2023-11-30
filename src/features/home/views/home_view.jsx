import React, { useState } from "react";
import { useAuth } from "../../../features/auth/base/hooks/useAuth";
import "./home_view.css";

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
