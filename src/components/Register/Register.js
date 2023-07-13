import React from "react";
import "./Register.css";

import Form from "../Form/Form.js";
import Input from "../Input/Input.js";

function Register() {
  return (
    <Form
      formTitle="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      formQuestion="Уже зарегистрированы?"
      formLinkName="Войти"
      formLink="/signin"
    >
      <Input id="name" placeholder="Имя" type="text" name="name" />
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

export default Register;
