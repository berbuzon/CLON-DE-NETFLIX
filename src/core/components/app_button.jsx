import React from "react";
import "../../features/home/views/home_view.css";

const AppButton = ({ children, primary, secondary,tertiary, ...props }) => {
  return (
    <button
      className={`buttonStyle   ${primary ? "primary" : ""} 
                                ${secondary ? "secondary" : ""} 
                                ${tertiary ? "tertiary" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
