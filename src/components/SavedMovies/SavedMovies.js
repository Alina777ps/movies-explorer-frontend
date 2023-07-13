import React from "react";
import "./SavedMovies.css";

import deliteButton from "../../images/deliteButton.svg";

import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function SavedMovies() {
  return (
    <div>
      <HeaderMovies
        savedMoviesActive="savedMovies__active"
        navigationSavedMovies="movies__burger-menu_active"
      />
      <div className="savedMovies">
        <SearchForm />
        <MoviesCardList buttonImg={deliteButton} buttonAlt="Удалить" />
      </div>
      <Footer />
    </div>
  );
}

export default SavedMovies;
