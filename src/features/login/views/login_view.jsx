import React from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";

const LoginView = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      //como obtengo los datos del formulario
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData);
      // console.log(Object.fromEntries(formData));

      // Esto es lo mismo que lo de arriba
      // const { email, password } = Object.fromEntries(new FormData(e.target));
      // console.log(email, password);

      login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#141414",
        color: "#fff",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>CLON DE NETFLIX</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          type="email"
          name="email"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            marginBottom: "10px",
          }}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            marginBottom: "20px",
          }}
          placeholder="Password"
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#e50914",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginView;
