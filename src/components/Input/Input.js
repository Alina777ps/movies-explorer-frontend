import React from "react";
import "./Input.css";

function Input({ id, placeholder, type, name }) {
  return (
    <label className="input__label" for={id}>
      {placeholder}
      <input
        className="input__input"
        type={type}
        name={name}
        id={id}
        value={name}
        placeholder={placeholder}
        required
        minLength="2"
        maxLength="40"
      ></input>
      <span className={`input-error ${name}-error`}></span>
    </label>
  );
}

export default Input;
