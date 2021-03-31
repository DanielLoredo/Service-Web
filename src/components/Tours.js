import React from "react";

import Card from "./cards/TourCard";

import "./../sass/_ToursStyle.scss";
import "./../sass/utilities/_resources.scss";
import "./../sass/_AboutStyle.scss";
import "./../sass/_PopupStyle.scss";
import "./../sass/utilities/_resources.scss";

import img1 from "./../img/lazy-dog.jpg";
import img2 from "./../img/corgi-4.jpg";

class Tours extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">Best Tools</h2>
          </div>
          <div className="row">
            <Card
              backColor="back__1"
              picture="picture--1"
              spanColor="span--1"
              footerColor="footer--1"
              title="Un lomito"
              description1="Corgi"
              description2="WOW"
              description3="Suavecito"
              description4="Guapo"
              price="$297"
            />
            <Card
              backColor="back__2"
              picture="picture--1"
              spanColor="span--2"
              footerColor="footer--2"
              title="Otro lomito"
              description1="Corgi"
              description2="WOW"
              description3="Suavecito"
              description4="Guapo"
              price="$599"
            />
            <Card
              backColor="back__3"
              picture="picture--1"
              spanColor="span--3"
              footerColor="footer--3"
              title="Un tercer lomito"
              description1="Corgi"
              description2="WOW"
              description3="Suavecito"
              description4="Guapo"
              price="$999"
            />
          </div>
        </section>

        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img src={img1} className="popup__img" alt="dog"></img>
              <img src={img2} className="popup__img" alt="dog"></img>
            </div>

            <div className="popup__right">
              <a href="#section-tours" alt="popup" className="popup__close">
                &times;
              </a>
              <div className="heading-secondary  u-margin-bottom-xsmall">
                WOW Mira esto
              </div>
              <div className="heading-tertiary">
                WOW &ndash; esto es lo más asombroso de tu vida asegurado
              </div>
              <p className="popup__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
              </p>
              <a className="btn btn--purple" href="/" alt="Button">
                Contrata Ya!
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tours;
