import React, { useState } from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";

// class AuthError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "AuthError";
//   }
// }

const LoginView = () => {
  // const { login , isLoggedIn} = useAuth();
  const { login } = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    try {
      //como obtengo los datos del formulario
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData);
      // console.log(Object.fromEntries(formData));

      form.reset();

      // if (!email || !password)
      //   throw new AuthError("Todos los campos son requeridos");

      // Esto es lo mismo que lo de arriba
      // const { email, password } = Object.fromEntries(new FormData(e.target));
      // console.log(email, password);

      await login(email, password);
    } catch (error) {
      if (error instanceof AuthError) return setError(error.message);
      setError(error.response.data.msg);
      console.log(error);
    } finally {
      setIsLoggedIn(false);
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
        <p>{error}</p>
      </form>
    </div>
  );
};

export default LoginView;
