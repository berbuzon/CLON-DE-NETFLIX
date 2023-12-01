import React, { useState } from "react";
import { useAuth } from "../../../features/auth/base/hooks/useAuth";
import "./login_view.css";

// El resto de tu código de componente aquí
class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}


const LoginView = () => {
  // const { login , isLoggedIn} = useAuth();
  const { login } = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setIsSubmitted(true);

    try {
      //como obtengo los datos del formulario
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData);
      // console.log(Object.fromEntries(formData));

      // Esto es lo mismo que lo de arriba
      // const { email, password } = Object.fromEntries(new FormData(e.target));
      // console.log(email, password)

      form.reset();

      if (!email || !password)
        throw new AuthError("Todos los campos son requeridos");

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
      className="containerStyle"
    >
      <h1 className="titleStyle">CLON DE NETFLIX</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <input
          type="email"
          id="email"
          name="email"
          className="inputStyle"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          className="inputStyle"
          placeholder="Password"
        />
        <button type="submit" className="buttonStyle">
          Iniciar Sesión
        </button>

        {isSubmitted && <p className="warning">{error}</p>}
      </form>
    </div>
  );
};

export default LoginView;
