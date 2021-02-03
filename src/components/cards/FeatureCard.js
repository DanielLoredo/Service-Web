import React from "react";
import "./../../sass/_AboutStyle.scss";
import "./../../sass/_Features.scss";
import "./../../css/styles.css";

class FeatureCard extends React.Component {
  render() {
    return (
      <div className="column-1-of-4">
        <div className="feature-box">
          <i className={`feature-box__icon ${this.props.icon}`}></i>
          <h3 className="heading-tertiary">{this.props.title}</h3>
          <p className="feature-box__text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
