import React from "react";

import "./../../sass/_StoriesStyle.scss";

class StoryCard extends React.Component {
  render() {
    return (
      <div className="row margin-bottom-card">
        <div className="story">
          <figure className="story__figure">
            <img
              src={this.props.image}
              alt="User image"
              className="story__image"
            />
            <figcaption className="story__caption">
              {this.props.userName}
            </figcaption>
          </figure>
          <div className="story__text">
            <h4 className="story__text--title">{this.props.title}</h4>
            <div className="story__text--description">{this.props.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryCard;
