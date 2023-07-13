import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <form class="filterCheckbox__form-checkbox">
      <label class="filterCheckbox__checkbox-label">
        <input class="filterCheckbox__checkbox-input" type="checkbox"></input>
        <span class="filterCheckbox__checkbox-span"></span>
        <span class="filterCheckbox__span-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
