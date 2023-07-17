import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

import HeaderMovies from "../HeaderMovies/HeaderMovies.js";

function Profile() {
  return (
    <div>
      <HeaderMovies />
      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__info-block">
          <div className="profile__info-line">
            <p className="profile__data-name">Имя</p>
            <p className="profile__data">Виталий</p>
          </div>
          <div className="profile__info-line">
            <p className="profile__data-name">E-mail</p>
            <p className="profile__data">pochta@yandex.ru</p>
          </div>
        </div>
        <button
          className="profile__button-edit"
          type="button"
          aria-label="Редактировать"
        >
          Редактировать
        </button>
        <Link className="profile__signaut" to="/signaut">
          Выйти из аккаунта
        </Link>
      </div>
    </div>
  );
}

export default Profile;
