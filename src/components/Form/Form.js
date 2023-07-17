import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import Logo from "../Logo/Logo.js";

function Form({
  formTitle,
  buttonName,
  formSubmitType,
  formQuestion,
  formLinkName,
  formLink,
  children,
}) {
  return (
    <div className="form">
      <Logo />
      <h1 className="form__title">{formTitle}</h1>
      <form className="form__form">
        <fieldset className="form__fieldset">{children}</fieldset>
        <button className={`form__submit ${formSubmitType}`} type="submit" aria-label={buttonName}>
          {buttonName}
        </button>
      </form>
      <div className="form__question">
        <p className="form__text">{formQuestion}</p>
        <Link className="form__link" to={formLink}>
          {formLinkName}
        </Link>
      </div>
    </div>
  );
}

export default Form;
