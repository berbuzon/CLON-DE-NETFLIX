import React from "react";
import { AuthProvider } from "../../../features/auth/provider/auth_provider"

// El RootProvider es el proveedor general de la aplicación que contiene todos los providers de la aplicación
// Es hijo del App.jsx
// El AuthProvider es el proveedor de autenticación que contiene todas las funciones de autenticación
// Si tengo mas providers los llamo de la misma manera
// Este es el lugar donde ubico todos los providers de la aplicación para que el main no quede tan cargado
// Si tengo Redux envuelvo los componentes con el Provider de Redux para tener variables globales

const RootProvider = ({ children }) => {
  return (
    <AuthProvider  
      fallback={
        <div>
          <h1>Cargando...</h1>
        </div>
      }
    >
      {children}
    </AuthProvider>
  );
};

export default RootProvider;

