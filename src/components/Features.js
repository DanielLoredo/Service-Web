import React from "react";
import "./../sass/_Features.scss";
import FeatureCard from "./cards/FeatureCard";

class Features extends React.Component {
  render() {
    return (
      <section className="section-features">
        <div className="row">
          <FeatureCard
            icon="icon-basic-world"
            title="Conquista"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
          <FeatureCard
            icon={"icon-basic-compass"}
            title="Reúne"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
          <FeatureCard
            icon={"icon-basic-map"}
            title="Revive"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
          <FeatureCard
            icon={"icon-basic-heart"}
            title="Evoluciona"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
        </div>
      </section>
    );
  }
}

export default Features;
