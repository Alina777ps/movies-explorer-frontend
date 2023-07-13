import React from "react";
import "./Login.css";

import Form from "../Form/Form.js";
import Input from "../Input/Input.js";

function Login() {
  return (
    <Form
      formTitle="Рады видеть!"
      buttonName="Войти"
      formQuestion="Ещё не зарегистрированы?"
      formLinkName="Регистрация"
      formLink="/signup"
    >
      <Input id="email" placeholder="E-mail" type="email" name="email" />
      <Input
        id="password"
        placeholder="Пароль"
        type="password"
        name="password"
      />
    </Form>
  );
}

export default Login;
