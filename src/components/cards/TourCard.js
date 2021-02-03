import React from "react";

class TourCard extends React.Component {
  render() {
    return (
      <div className="column-1-of-3">
        &nbsp;
        <div className="card">
          <div className="card__side card__side__front">
            <div className={`card__picture card__${this.props.picture}`}> </div>
            <h4 className="card__heading">
              <span
                className={`card__heading__span card__heading__${this.props.spanColor}`}
              >
                {this.props.title}
              </span>
            </h4>
            <div className="card__text">
              <ul>
                <li>{this.props.description1}</li>
                <li>{this.props.description2}</li>
                <li>{this.props.description3}</li>
                <li>{this.props.description4}</li>
              </ul>
            </div>
            <div
              className={`card__footer card__${this.props.footerColor}`}
            ></div>
          </div>

          <div
            className={`card__side card__side__back card__side__${this.props.backColor}`}
          >
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">{this.props.price}</p>
              </div>
              <a className="btn btn--white" href="#popup" alt="">
                Pícale Aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourCard;
