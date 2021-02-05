import React from "react";

import "./../sass/_FooterStyle.scss";

import footer_logo from "./../img/daniel-icon.jpg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcset={`${footer_logo} 1x, ${footer_logo} 2x`}
              media="(max-width: 37.5em)"
            />
            <img
              srcset={`${footer_logo} 1x, ${footer_logo} 2x`}
              className="footer__logo"
              alt="Full Logo"
            ></img>
          </picture>
        </div>
        <div className="row">
          <div className="column-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Contact
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Private Policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column-1-of-2">
            <div className="footer__copyright">
              Lorem Ipsum is simply{" "}
              <a href="/" className="footer__link">
                dummy text
              </a>
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard{" "}
              <a href="/" className="footer__link">
                dummy text
              </a>{" "}
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
