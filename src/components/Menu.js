import React from "react";

import "./../sass/_MenuStyle.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        ></input>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background"></div>

        <div className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>
                About Service
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>
                The benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>
                Popular Trends
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>
                Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
