import React from "react";
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ buttonImg, buttonAlt }) {
  return (
    <div className="moviesCardList">
      <MoviesCard buttonImg={buttonImg} buttonAlt={buttonAlt} />
      <MoviesCard buttonImg={buttonImg} buttonAlt={buttonAlt} />
      <MoviesCard buttonImg={buttonImg} buttonAlt={buttonAlt} />
      <MoviesCard buttonImg={buttonImg} buttonAlt={buttonAlt} />
      <MoviesCard buttonImg={buttonImg} buttonAlt={buttonAlt} />
      <button
        className="moviesCardList__button-still"
        type="button"
        aria-label="Ещё"
      >
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
