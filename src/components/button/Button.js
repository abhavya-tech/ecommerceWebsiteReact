/**
 * default
 * inverted
 * Google Sign In
 */
import React from "react";
import "./button-styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, butonType, ...otherProps }) => {
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[butonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
