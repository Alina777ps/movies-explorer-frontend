import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__line">
        <p className="header__data">© 2020</p>
        <ul className="header__list">
          <li className="header__list_item">Яндекс.Практикум</li>
          <li className="header__list_item">Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
