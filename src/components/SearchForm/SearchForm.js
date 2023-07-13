import React from "react";
import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

import searchFormImg from "../../images/searchFormImg.svg";
import searchFormButton from "../../images/searchFormButton.svg";

function SearchForm({ headerType, children }) {
  return (
    <div className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__block">
          <img className="searchForm__img" src={searchFormImg} alt="Лупа" />
          <input
            className="searchForm__input-string"
            type="text"
            name="inputString"
            id="inputString"
            placeholder="Фильм"
            required
          ></input>
        </div>
        <button className="searchForm__button" type="submit" aria-label="Поиск">
          <img
            className="searchForm__button-img"
            src={searchFormButton}
            alt="Поиск"
          />
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
/*
    <label className="searchForm__input-label" for="inputString">
                <input 
                    className="searchForm__input-checkbox" 
                    type="checkbox" 
                    name="inputCheckbox" 
                    id="inputCheckbox" 
                    min="0" max="1"
                >
                </input>
                Короткометражки
    </label>
    */
