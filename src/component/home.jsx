import React, { Component } from "react";
import ReactDOM from "react-dom";

import ParallaxContainer from "./ParallaxContainer.jsx"


class HomeContainer extends Component {
  render() {
    return (
      <ParallaxContainer />
    );
  }
}

export default HomeContainer;

const wrapper = document.getElementById("profile_container");
wrapper ? ReactDOM.render(<HomeContainer />, wrapper) : false;
