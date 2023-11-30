import React, { useState } from "react";
import { useAuth } from "../../../features/auth/base/hooks/useAuth";
import "./home_view.css";
import AppButton from "../../../core/components/app_button";
import { MyComponent } from "../../myComponent/MyComponent ";



const HomeView = () => {
  const { logout } = useAuth();

  return (
    <div className="containerStyle">
      <h1 className="textStyle">HOME</h1>
      <AppButton primary={true} onClick={logout}>
        Cerrar Sesión
      </AppButton>
      <MyComponent />
    </div>
  );
};

export default HomeView;
