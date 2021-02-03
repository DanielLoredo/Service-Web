import React from "react";
import "./../sass/_AboutStyle.scss";
import "./../sass/utilities/_grid.scss";
import "./../sass/utilities/_resources.scss";
import img_corgi_1 from "./../img/corgi-1.jpg";
import img_corgi_2 from "./../img/corgi-2.jpg";
import img_corgi_3 from "./../img/corgi-3.jpg";

class About extends React.Component {
  render() {
    return (
      <main className="section-about">
        <div className="u-center-text u-margin-bottom-large ">
          <h2 className="heading-secondary">El mejor servicio de la galaxia</h2>
        </div>

        <div className="row">
          <div className="column-1-of-2">
            <h2 className="heading-tertiary u-margin-bottom-small">
              Justo lo que necesitas
            </h2>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <h2 className="heading-tertiary u-margin-bottom-small">
              Esperas poco, pero recibes mucho
            </h2>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <a href="#" alt="" className="btn-text">
              Más información &rarr;
            </a>
          </div>

          <div className="column-1-of-2">
            <div className="composition">
              <img
                src={img_corgi_3}
                className="composition__photo composition__photo-1"
                alt="corgi 1"
              />
              <img
                src={img_corgi_3}
                className="composition__photo composition__photo-2"
                alt="corgi 2"
              />
              <img
                src={img_corgi_3}
                className="composition__photo composition__photo-3"
                alt="corgi 3"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
