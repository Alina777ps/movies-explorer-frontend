import React from "react";
import "./Movies.css";

import like from "../../images/like.svg";
/*import dislike from '../../images/dislike.svg';*/

import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies() {
  return (
    <div>
      <HeaderMovies
        moviesActive="movies__active"
        navigationMovies="movies__burger-menu_active"
      />
      <div className="movies">
        <SearchForm />
        <MoviesCardList buttonImg={like} buttonAlt="Нравится" />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
