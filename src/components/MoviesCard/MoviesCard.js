import React from "react";
import "./MoviesCard.css";

import movieImg from "../../images/movieImg.png";

function MoviesCard({ buttonImg, buttonAlt }) {
  return (
    <div className="moviesCard">
      <div className="moviesCard__info">
        <h2 className="moviesCard__name">33 слова о дизайне</h2>
        <p className="moviesCard__time">1ч 42м</p>
        <button
          className="moviesCard__button"
          type="button"
          aria-label={buttonAlt}
        >
          <img
            className="moviesCard__button-img"
            src={buttonImg}
            alt={buttonAlt}
          />
        </button>
      </div>
      <img className="moviesCard__img" src={movieImg} alt="Кино" />
    </div>
  );
}

export default MoviesCard;
