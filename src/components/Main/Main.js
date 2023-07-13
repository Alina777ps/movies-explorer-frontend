import React from "react";
import "./Main.css";

import HeaderMain from "../HeaderMain/HeaderMain.js";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Footer from "../Footer/Footer.js";

function Main() {
  return (
    <div className="main">
      <HeaderMain />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
