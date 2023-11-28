import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <FaExclamationTriangle size={50} />
      <p style={{ fontSize: "5px" }}>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <p style={{ fontSize: "5px" }}>
        Es posible que hayas escrito mal la dirección o que la página se haya
        movido.
      </p>
      <Link style={{ fontSize: "5px" }} to="/">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFoundPage;
