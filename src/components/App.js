import React from "react";

import "./../sass/utilities/_grid.scss";
import "./../sass/utilities/_base.scss";

import Menu from "./Menu";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header />
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
