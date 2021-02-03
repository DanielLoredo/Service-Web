import React from "react";
import Card from "./cards/StoryCard";

import "./../sass/_StoriesStyle.scss";
import "./../sass/_AboutStyle.scss";

import user_img from "./../img/corgi-4.jpg";
import user_img2 from "./../img/corgi-4.jpg";
import video from "./../img/video1.mp4";

class Stories extends React.Component {
  render() {
    return (
      <section className="section-story">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondary">Los resultados más reales</h2>
        </div>
        <Card
          image={user_img}
          userName="Daniel Loredo"
          title="This service changed my life"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book."
        />
        <Card
          image={user_img2}
          userName="Mauricio Portilla"
          title="Los más asombroso de mi vida"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book."
        />
        <div className="u-center-text">
          <a className="btn-text" href="/" alt="">
            Read all stories &rarr;
          </a>
        </div>
      </section>
    );
  }
}

export default Stories;
