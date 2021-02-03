import React from "react";
import "./../sass/_HeaderStyle.scss";
import "../sass/utilities/_resources.scss";
import logo_img from "./../img/daniel-icon.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={logo_img} alt="Logo" className="header__logo" />
        </div>

        <div className="main-content">
          <h1 className="head-primary">
            <span className="head-primary--main">Servicio TI</span>
            <span className="head-primary--sub">Soporte Técnico del bueno</span>
          </h1>

          <a href="#" className="btn btn--white btn--animated">
            Llama Ya
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
